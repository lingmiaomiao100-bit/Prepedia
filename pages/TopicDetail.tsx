import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { TOPICS } from '../data/content';
import { ArrowLeft, Info, BookOpen, ShieldAlert, Zap, HeartPulse, Clock, ClipboardCheck, Siren, Activity, ExternalLink, Youtube, Library, Quote } from 'lucide-react';
import TopicBackground from '../components/TopicBackground';
import { motion } from 'framer-motion';

const TopicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const topic = TOPICS.find(t => t.id === id);

  if (!topic) {
    return <Navigate to="/disasters" replace />;
  }

  const backLink = topic.category === 'DISASTER' ? '/disasters' : '/health-risks';
  const categoryLabel = topic.category === 'DISASTER' ? 'Disaster Guide' : 'Health Fact Sheet';

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pb-24 transition-colors duration-300">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-12 pb-16 transition-colors">
        <TopicBackground id={topic.id} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <Link to={backLink} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-red-700 dark:hover:text-red-400 mb-8 transition-colors group">
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Directory
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Context/Overview */}
            <motion.div 
              {...fadeInUp}
              className="bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 shadow-lg relative rounded-sm"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 dark:bg-red-600"></div>
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-5 h-5 text-slate-400" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Critical Overview</h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-serif">
                {topic.fullDescription}
              </p>
            </motion.div>

            {/* PROTOCOL TIMELINE */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <Clock className="w-5 h-5 text-red-600" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white font-serif">Safety Protocol Timeline</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* BEFORE */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative bg-amber-50/30 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900/30 p-8 rounded-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-sm text-amber-700 dark:text-amber-400">
                      <ClipboardCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 font-serif">Preparation</h3>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/70">Stage 1: Before Event</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {topic.before.map((step, i) => (
                      <li key={i} className="flex gap-4 items-start text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        <span className="flex-shrink-0 w-5 h-5 bg-amber-200 dark:bg-amber-900/40 rounded-full flex items-center justify-center text-[10px] font-bold text-amber-800 dark:text-amber-300 mt-0.5">{i+1}</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* DURING */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group relative bg-red-50/30 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 p-8 rounded-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-sm text-red-700 dark:text-red-400">
                      <Siren className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-900 dark:text-red-200 font-serif">Immediate Action</h3>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600/70">Stage 2: During Event</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {topic.during.map((step, i) => (
                      <li key={i} className="flex gap-4 items-start text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        <span className="flex-shrink-0 w-5 h-5 bg-red-200 dark:bg-red-900/40 rounded-full flex items-center justify-center text-[10px] font-bold text-red-800 dark:text-red-300 mt-0.5">{i+1}</span>
                        <span className="font-bold">{step}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* AFTER */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group relative bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30 p-8 rounded-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-sm text-emerald-700 dark:text-emerald-400">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200 font-serif">Recovery</h3>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600/70">Stage 3: After Event</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {topic.after.map((step, i) => (
                      <li key={i} className="flex gap-4 items-start text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        <span className="flex-shrink-0 w-5 h-5 bg-emerald-200 dark:bg-emerald-900/40 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-800 dark:text-emerald-300 mt-0.5">{i+1}</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </section>

            {/* FORMAL CITATIONS SECTION - REFINED PLACEMENT AND AESTHETICS */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#020617] p-10 rounded-sm border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <ShieldAlert className="w-32 h-32 text-white" />
              </div>
              
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <Quote className="w-10 h-10 text-slate-500 fill-slate-500/20" />
                <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-white font-serif">Official Citations & References</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {topic.citations.map((cite, i) => (
                  <a 
                    key={i}
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 bg-slate-900/40 border border-slate-800 hover:border-red-600/50 hover:bg-slate-900/60 transition-all group rounded-sm"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-100 group-hover:text-white transition-colors tracking-wide">{cite.name}</span>
                      <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">Official Resource</span>
                    </div>
                    <div className="p-2 bg-slate-800/50 rounded-full group-hover:bg-red-600/20 transition-colors">
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-red-500" />
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-800 relative z-10">
                <p className="text-[11px] text-slate-500 italic text-center leading-relaxed tracking-wide">
                  All safety data is sourced from verified government portals and international health agencies as of 2026.
                </p>
              </div>
            </motion.section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Response Summary */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900 dark:bg-black text-white p-6 rounded-sm shadow-2xl border dark:border-slate-800"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                <ShieldAlert className="w-5 h-5 text-red-500" />
                <h3 className="text-xs font-bold uppercase tracking-widest">Priority Directives</h3>
              </div>
              
              <div className="space-y-4">
                {topic.keyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Zap className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-300">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>Safety Status</span>
                  <span className="text-emerald-500">Verified</span>
                </div>
                <div className="p-3 bg-slate-800/50 rounded-sm border border-slate-700 flex items-center gap-3">
                   <HeartPulse className="w-4 h-4 text-red-400" />
                   <div className="text-[10px] text-slate-300">
                      Emergency Dial: <span className="text-white font-bold ml-1">911</span>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* EXTERNAL REFERENCE LIBRARY */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-sm shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <Library className="w-5 h-5 text-slate-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Research Library</h3>
              </div>

              <div className="space-y-4">
                <a 
                  href={topic.wikipediaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 hover:border-red-500 dark:hover:border-red-500 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                       <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-red-600 transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Wikipedia</p>
                      <p className="text-[10px] text-slate-500">Full Encyclopedia Entry</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-red-500 transition-colors" />
                </a>

                <a 
                  href={topic.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 hover:border-red-600 dark:hover:border-red-600 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                       <Youtube className="w-4 h-4 text-slate-500 group-hover:text-red-600 transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">YouTube</p>
                      <p className="text-[10px] text-slate-500">Video Safety Guides</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-red-600 transition-colors" />
                </a>
              </div>
            </motion.div>

            {/* Document Footer Source */}
            <div className="p-6 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-sm">
               <div className="flex items-center gap-2 mb-4 text-slate-400">
                 <ShieldAlert className="w-4 h-4" />
                 <h4 className="text-[10px] font-bold uppercase tracking-widest">School Notice</h4>
               </div>
               <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed italic">
                 Prepared by the Student Council for Lantawan Pasonanca National High School. Citations linked above are official government sources.
               </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopicDetail;