
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { TOPICS } from "../data/content";

// Always initialize with the direct process.env.API_KEY as per SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Simple in-memory cache to prevent redundant calls for the same topic in one session
const adviceCache: Record<string, string> = {};

// Circuit Breaker: If we hit a 429, don't even try for another 60 seconds
let quotaExhaustedUntil = 0;

/**
 * Robust check for 429/Quota errors based on SDK error structures
 */
const isQuotaExhausted = (error: any): boolean => {
  // Check direct properties
  if (error?.status === 429 || error?.code === 429) return true;
  
  // Check nested error object (common in the error structure)
  if (error?.error?.code === 429 || error?.error?.status === "RESOURCE_EXHAUSTED") return true;
  
  // Check if it's a stringified error object or message
  const errorStr = typeof error === 'string' ? error : JSON.stringify(error);
  const msg = errorStr?.toLowerCase() || "";
  
  if (
    msg.includes("429") || 
    msg.includes("quota") || 
    msg.includes("exhausted") || 
    msg.includes("limit") || 
    msg.includes("resource_exhausted")
  ) return true;
  
  return false;
};

/**
 * Utility for exponential backoff retries
 */
async function retryWithBackoff<T>(
  fn: () => Promise<T>, 
  maxRetries: number = 2, 
  initialDelay: number = 2000
): Promise<T> {
  let delay = initialDelay;
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      const quotaHit = isQuotaExhausted(error);
      
      // If quota is exhausted, mark the circuit as open and don't bother retrying
      if (quotaHit) {
        console.warn("Gemini Quota Exhausted. Opening circuit breaker for 60s.");
        quotaExhaustedUntil = Date.now() + 60000; // 60 seconds
        throw error; 
      }

      if (i < maxRetries) {
        console.warn(`Gemini API Error. Retrying in ${delay}ms... (Attempt ${i + 1})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; 
        continue;
      }
      throw error;
    }
  }
  throw new Error('Max retries reached');
}

/**
 * Fallback mechanism: returns verified local content if the AI is unavailable
 */
const getLocalFallbackAdvice = (topicTitle: string): string => {
  const topic = TOPICS.find(t => t.title.toLowerCase() === topicTitle.toLowerCase());
  if (topic && topic.keyPoints.length > 0) {
    return `**Verified Safety Essentials:**\n${topic.keyPoints.slice(0, 3).map(p => `* ${p}`).join('\n')}\n\n*(Note: Displaying verified local guide due to high AI traffic)*`;
  }
  return "Please stay alert and follow local ZCDRRMO guidelines. Emergency: 911.";
};

// Helper to handle API errors gracefully
const handleGeminiError = (error: any, topic?: string): string => {
  console.error("Gemini API Error Detail:", error);

  if (isQuotaExhausted(error)) {
    if (topic) return getLocalFallbackAdvice(topic);
    return "⚠️ System busy (Quota reached). Please refer to the verified local emergency guides or try again in a moment.";
  }

  return topic ? getLocalFallbackAdvice(topic) : "Unable to connect to AI advisor. Please rely on the verified guides below.";
};

export const generateSafetyAdvice = async (topic: string, question?: string): Promise<string> => {
  // 1. Check Circuit Breaker
  if (Date.now() < quotaExhaustedUntil) {
    return getLocalFallbackAdvice(topic);
  }

  // 2. Check cache for non-question based advice
  if (!question && adviceCache[topic]) {
    return adviceCache[topic];
  }

  try {
    const localContext = "You are Prepedia, a safety expert for Lantawan Pasonanca National High School in Zamboanga City, Philippines. Context: Disasters and Health.";
    const prompt = question 
      ? `${localContext} Topic: "${topic}". Question: "${question}". Provide a short, practical answer for a high school student.`
      : `${localContext} Provide 3 short, vital safety tips for "${topic}".`;

    const result = await retryWithBackoff(async () => {
      // Correct implementation using ai.models.generateContent directly
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are Prepedia, a disaster preparedness expert. Use bullet points.",
          thinkingConfig: { thinkingBudget: 0 } 
        }
      });
      return response.text || "No advice available.";
    });

    // Cache the result if it's general advice
    if (!question && result) {
      adviceCache[topic] = result;
    }

    return result;
  } catch (error) {
    return handleGeminiError(error, topic);
  }
};

export const chatWithAi = async (message: string, context: string): Promise<string> => {
  // Check Circuit Breaker
  if (Date.now() < quotaExhaustedUntil) {
    return "⚠️ The AI helper is currently at capacity. Please refer to the common questions and verified guides on this page.";
  }

  try {
    return await retryWithBackoff(async () => {
      // Correct implementation using ai.models.generateContent directly
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Context: Prepedia guide for "${context}". User asks: ${message}`,
        config: {
          systemInstruction: `
            You are Prepedia AI (Lantawan Pasonanca NHS). 
            STRICT RULES:
            1. Use Zamboanga/Philippines context. 
            2. Emergency is 911. 
            3. Keep it brief. 
            4. If rate limited, tell user to wait.
          `,
        }
      });
      return response.text || "I couldn't generate a response.";
    });
  } catch (error) {
    return handleGeminiError(error);
  }
};
