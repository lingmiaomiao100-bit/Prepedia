import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { FileQuestion, Plus, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitPublicInquiry } from '../services/supabaseClient';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FAQ: React.FC = () => {
  const [formState, setFormState] = useState({ title: '', question: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.title || !formState.question) return;

    setStatus('loading');
    const { error } = await submitPublicInquiry(formState);
    
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setFormState({ title: '', question: '', email: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-slate-200 dark:border-slate-800 pb-8 flex items-end justify-between"
        >
           <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 block">Help Center</span>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white font-serif">Common Questions</h1>
           </div>
           <FileQuestion className="w-10 h-10 text-slate-200 dark:text-slate-800 hidden md:block animate-pulse" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Column */}
          <div className="lg:col-span-8">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 md:grid-cols-2"
            >
              {FAQS.map((faq, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-300 rounded-sm"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 font-serif flex items-start gap-3">
                     <span className="text-red-700 dark:text-red-500 font-sans text-xs pt-1.5 flex-shrink-0"><Plus className="w-3 h-3" /></span>
                     {faq.q}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm pl-6 font-light">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sticky top-24"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-serif">Still have questions?</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-widest font-bold">Submit to the Community Inbox</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Topic / Subject</label>
                  <input 
                    type="text"
                    required
                    value={formState.title}
                    onChange={(e) => setFormState(p => ({...p, title: e.target.value}))}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm focus:border-red-500 outline-none transition-colors"
                    placeholder="e.g. Flood Evacuation"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Your Question</label>
                  <textarea 
                    required
                    rows={4}
                    value={formState.question}
                    onChange={(e) => setFormState(p => ({...p, question: e.target.value}))}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm focus:border-red-500 outline-none transition-colors resize-none"
                    placeholder="Describe your inquiry in detail..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Email (Optional)</label>
                  <input 
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(p => ({...p, email: e.target.value}))}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm focus:border-red-500 outline-none transition-colors"
                    placeholder="For follow-up answers..."
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-slate-900 dark:bg-red-700 text-white font-bold text-xs uppercase tracking-[0.2em] py-4 hover:bg-slate-800 dark:hover:bg-red-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Transmitting...' : <><Send className="w-3 h-3" /> Submit to Backend</>}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-600 dark:text-green-500 text-xs font-bold uppercase tracking-widest mt-4">
                      <CheckCircle2 className="w-4 h-4" /> Message Recorded Successfully
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-600 dark:text-red-500 text-xs font-bold uppercase tracking-widest mt-4">
                      <AlertCircle className="w-4 h-4" /> Network Failure. Try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>

        {/* System Info */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-slate-900 dark:bg-black text-slate-300 p-8 flex flex-col md:flex-row items-center justify-between rounded-sm shadow-2xl dark:shadow-slate-900/50"
        >
          <div>
              <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-2">Supabase Backend Active</h3>
              <p className="text-xs text-slate-400">All public inquiries are securely stored in the Project ID: lpczjcpi... for administrative review.</p>
          </div>
          <div className="mt-4 md:mt-0 text-[10px] uppercase tracking-widest border border-slate-600 px-4 py-2 text-slate-400">
            Encrypted Link: Live
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;