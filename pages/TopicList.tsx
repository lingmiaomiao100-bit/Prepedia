import React from 'react';
import { TOPICS } from '../data/content';
import TopicCard from '../components/TopicCard';
import { Category } from '../types';
import { motion } from 'framer-motion';

interface TopicListProps {
  category: Category;
  title: string;
  description: string;
  basePath: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const TopicList: React.FC<TopicListProps> = ({ category, title, description, basePath }) => {
  const filteredTopics = TOPICS.filter(t => t.category === category);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-slate-200 dark:border-slate-800 pb-8"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 block">Directory</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-serif">{title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-light max-w-3xl leading-relaxed font-serif italic">{description}</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTopics.map((topic) => (
            <motion.div key={topic.id} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <TopicCard topic={topic} basePath={basePath} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TopicList;