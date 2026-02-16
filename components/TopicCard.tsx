import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { Topic } from '../types';
import { motion } from 'framer-motion';

interface TopicCardProps {
  topic: Topic;
  basePath: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, basePath }) => {
  return (
    <Link to={`${basePath}/${topic.id}`}>
      <motion.div 
        whileHover={{ y: -5, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.2)" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-200 dark:hover:border-red-900 transition-all duration-300 flex flex-col h-full rounded-sm relative overflow-hidden"
      >
        {/* Decorative background accent on hover */}
        <div className={`absolute inset-0 ${topic.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

        <div className="p-8 flex-grow flex flex-col relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-sm group-hover:bg-white dark:group-hover:bg-slate-700 shadow-sm transition-all duration-300">
              <FileText className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 px-2 py-1 rounded-sm group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-colors">
              Topic: {topic.id.toUpperCase()}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif group-hover:text-red-800 dark:group-hover:text-red-400 transition-colors">
            {topic.title}
          </h3>
          
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-sans-safe group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
            {topic.shortDescription}
          </p>
          
          <div className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors mt-auto">
            Read Guide <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
        
        {/* Bottom bar indicator */}
        <div className={`h-1 w-full ${topic.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>
      </motion.div>
    </Link>
  );
};

export default TopicCard;