import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lpczjcpiyzzfmzfqptxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwY3pqY3BpeXp6Zm16ZnFwdHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNTAwODYsImV4cCI6MjA4NjgyNjA4Nn0.2zMj0EqeNeRrgRe9-czAfDFAnCEib7XZMLEKfG8_948';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Feature: Log AI Interactions
export const logAiInteraction = async (topic: string, question: string, answer: string, helpful: boolean = false) => {
  try {
    const { error } = await supabase
      .from('ai_logs')
      .insert([
        { 
          topic, 
          question, 
          answer, 
          helpful,
          created_at: new Date().toISOString()
        }
      ]);
    if (error) throw error;
  } catch (err) {
    console.error('Supabase logging failed:', err);
  }
};

// Feature: Submit Public Inquiry
export const submitPublicInquiry = async (data: { title: string; question: string; email?: string }) => {
  const { error } = await supabase
    .from('community_inquiries')
    .insert([
      { 
        ...data,
        status: 'pending',
        created_at: new Date().toISOString()
      }
    ]);
  return { error };
};

// Feature: Fetch Recent Activity (Titles only for privacy)
export const getRecentInquiries = async (limit: number = 3) => {
  try {
    const { data, error } = await supabase
      .from('community_inquiries')
      .select('title, created_at')
      .order('created_at', { ascending: false })
      .limit(limit);
    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
};