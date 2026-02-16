import React from 'react';
import { FAQS } from '../data/content';
import { FileQuestion, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-slate-900 dark:bg-black text-slate-300 p-8 flex flex-col md:flex-row items-center justify-between rounded-sm shadow-2xl dark:shadow-slate-900/50"
        >
          <div>
              <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-2">Still need help?</h3>
              <p className="text-xs text-slate-400">Click the button in the bottom corner to ask our AI Helper.</p>
          </div>
          <div className="mt-4 md:mt-0 text-[10px] uppercase tracking-widest border border-slate-600 px-4 py-2 text-slate-400">
            System Online
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;