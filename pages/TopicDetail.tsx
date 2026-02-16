import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { TOPICS } from '../data/content';
import { ArrowLeft, AlertCircle, CheckSquare, Bot, FileText, Info, BookOpen } from 'lucide-react';
import { generateSafetyAdvice } from '../services/geminiService';
import AiAssistant from '../components/AiAssistant';
import TopicBackground from '../components/TopicBackground';
import { motion } from 'framer-motion';

const TopicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const topic = TOPICS.find(t => t.id === id);
  const [aiTip, setAiTip] = useState<string | null>(null);
  const [loadingTip, setLoadingTip] = useState(false);

  useEffect(() => {
    if (topic) {
      setLoadingTip(true);
      generateSafetyAdvice(topic.title)
        .then(tip => setAiTip(tip))
        .catch(() => setAiTip("Follow standard safety rules. Ask a teacher or parent if unsure."))
        .finally(() => setLoadingTip(false));
    }
  }, [topic?.id]);

  if (!topic) {
    return <Navigate to="/disasters" replace />;
  }

  const backLink = topic.category === 'DISASTER' ? '/disasters' : '/health-risks';
  const categoryLabel = topic.category === 'DISASTER' ? 'Disaster Guide' : 'Health Fact Sheet';

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pb-20 transition-colors duration-300">
      {/* Document Header */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-12 pb-16 transition-colors">
        <TopicBackground id={topic.id} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <Link to={backLink} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-red-700 dark:hover:text-red-400 mb-8 transition-colors group">
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Topics
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-200 text-[10px] font-bold uppercase tracking-widest mb-4 rounded-sm shadow-md">
                {categoryLabel}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-serif mb-4">{topic.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 font-light max-w-2xl font-serif italic">
                {topic.shortDescription}
              </p>
            </div>
            <div className="hidden md:block text-right opacity-60">
              <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-1">File ID</p>
              <p className="text-sm font-mono text-slate-900 dark:text-slate-300">PREP-{topic.id.toUpperCase()}-01</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="lg:col-span-8 space-y-12"
          >
            
            {/* Overview Section */}
            <div className="bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 shadow-lg relative transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 dark:bg-red-600"></div>
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">What is this?</h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-serif">
                {topic.fullDescription}
              </p>
            </div>

            {/* Action Protocols */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                <CheckSquare className="w-5 h-5 text-red-700 dark:text-red-500" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white font-serif">Key Safety Steps</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {topic.keyPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start bg-slate-50 dark:bg-slate-900 p-6 border-l-4 border-slate-300 dark:border-slate-700 hover:border-red-700 dark:hover:border-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 group"
                  >
                    <span className="flex-shrink-0 font-mono text-slate-300 dark:text-slate-600 group-hover:text-red-400 font-bold mr-4 text-xl transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium group-hover:text-slate-900 dark:group-hover:text-white">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Citations / Footer for Article */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                 <BookOpen className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                 <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Sources & Attribution</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Information provided in this section is based on general safety guidelines adapted for educational purposes. 
                      Specific protocols for Zamboanga City may vary. Always follow official instructions from local authorities (ZCDRRMO).
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      <span className="font-semibold">AI Assistance:</span> Some content and dynamic tips are generated using Google AI Studio technology to provide accessible summaries.
                    </p>
                 </div>
              </div>
            </div>

          </motion.div>

          {/* Sidebar Intelligence */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             className="lg:col-span-4 space-y-8 mt-8 lg:mt-0"
          >
            {/* AI Insight Card */}
            <div className="bg-slate-900 dark:bg-black text-slate-300 p-6 rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 border dark:border-slate-800">
              <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-4">
                <Bot className="w-5 h-5 text-white animate-bounce" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">AI Safety Tip</h3>
              </div>
              
              <div className="min-h-[80px]">
                {loadingTip ? (
                  <div className="space-y-3 opacity-50">
                    <div className="h-1 bg-slate-600 rounded w-3/4 animate-pulse"></div>
                    <div className="h-1 bg-slate-600 rounded w-1/2 animate-pulse"></div>
                  </div>
                ) : (
                  <div className="prose prose-invert prose-sm">
                    <p className="text-slate-300 leading-relaxed font-light text-sm italic border-l-2 border-red-500 pl-4">
                      "{aiTip}"
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-6 text-[10px] uppercase tracking-widest text-slate-500 flex justify-between">
                <span>Updated Live</span>
                <span>Prepedia AI</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* AI Assistant */}
      <AiAssistant contextTitle={topic.title} />
    </div>
  );
};

export default TopicDetail;