import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid runtime errors on load if env missing (handled in calls)
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

// Helper to handle API errors gracefully
const handleGeminiError = (error: any): string => {
  console.error("Gemini API Error:", JSON.stringify(error, null, 2));

  // Check for quota exceeded / rate limit (429)
  // The error object structure can vary, so we check multiple properties
  const isQuotaError = 
    error?.status === 429 || 
    error?.code === 429 ||
    (error?.message && (
      error.message.includes('429') || 
      error.message.includes('quota') || 
      error.message.includes('RESOURCE_EXHAUSTED')
    ));

  if (isQuotaError) {
    return "⚠️ High Traffic / Quota Limit: The AI safety assistant is currently busy. Please refer to the written guides on this page or consult local authorities (911 / ZCDRRMO) directly.";
  }

  return "Unable to retrieve real-time advice. Please check your internet connection or rely on the static guides provided.";
};

export const generateSafetyAdvice = async (topic: string, question?: string): Promise<string> => {
  if (!ai) return "AI Service not configured.";

  try {
    // Context for Zamboanga City / Philippines
    const localContext = "You are Prepedia, a safety expert for Lantawan Pasonanca National High School in Zamboanga City, Philippines. Always use Philippines context (Typhoons, PAGASA signals). NEVER provide US phone numbers (like 911 in US context or 988). Use Philippines Emergency Hotline 911.";

    const prompt = question 
      ? `${localContext} Context: The user is asking about "${topic}". Question: "${question}". Provide a concise, educational answer suitable for a Filipino high school student. Do not be alarmist, be practical.`
      : `${localContext} Provide 3 vital, actionable safety tips specifically for "${topic}". Keep them concise and easy to remember.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful, educational assistant for a disaster preparedness website called Prepedia, serving Lantawan Pasonanca National High School.",
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || "No advice available at the moment.";
  } catch (error) {
    return handleGeminiError(error);
  }
};

export const chatWithAi = async (message: string, context: string): Promise<string> => {
  if (!ai) return "AI Service not configured.";

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: User is viewing the "${context}" page on Prepedia (Disaster/Health guide). User asks: ${message}`,
      config: {
        systemInstruction: `
          You are Prepedia AI, a safety assistant for students at Lantawan Pasonanca National High School in Zamboanga City, Philippines.
          
          RULES:
          1. STRICTLY LOCALIZED: All advice must be relevant to the Philippines and Zamboanga City.
          2. NO US NUMBERS: Do NOT use US hotlines like 988. 
          3. EMERGENCY NUMBERS: Use Philippines National Emergency Hotline **911**. For Mental Health, use the NCMH Crisis Hotline (1553 or 0966-351-4518).
          4. FORMATTING: Format your answers clearly using bullet points (* point) for lists and bold text (**text**) for emphasis. Keep paragraphs short. Do not use markdown headers (#).
          5. TONE: Helpful, educational, protecting, like a teacher or school counselor.
        `,
      }
    });
    return response.text || "I couldn't generate a response.";
  } catch (error) {
    return handleGeminiError(error);
  }
};