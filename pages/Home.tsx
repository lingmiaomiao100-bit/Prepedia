import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, ArrowRight, AlertTriangle, FileText, Globe, Radio, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRecentInquiries } from '../services/supabaseClient';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home: React.FC = () => {
  const [recentInquiries, setRecentInquiries] = useState<any[]>([]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    getRecentInquiries(3).then(({ data, error }) => {
      if (!error && data) {
        setRecentInquiries(data);
        setIsLive(true);
      } else {
        // Fallback or RLS restricted
        setIsLive(false);
      }
    });
  }, []);

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-slate-900 dark:bg-black text-white relative overflow-hidden py-32 border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-red-400"
          >
            Lantawan Pasonanca National High School
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-serif leading-tight"
          >
            Welcome to Prepedia
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-10"
          >
            Knowledge is your best defense.
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Serving the students and community of Zamboanga City. We help you understand disasters and health risks so you can stay safe.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/disasters" className="group bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-sm transition-all duration-300 text-sm uppercase tracking-widest flex items-center justify-center hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1">
              Read Disaster Guides
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/health-risks" className="group bg-transparent border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600 font-bold py-4 px-8 rounded-sm transition-all duration-300 text-sm uppercase tracking-widest flex items-center justify-center hover:-translate-y-1">
              Check Health Tips
              <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Community Pulse - Live Backend Integration */}
      <section className="bg-slate-50 dark:bg-slate-900 py-12 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Radio className="w-5 h-5 text-emerald-500" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">Community Pulse</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-0.5">Live Database Activity</p>
              </div>
            </div>

            <div className="flex-1 max-w-2xl overflow-hidden whitespace-nowrap mask-linear-gradient">
              <AnimatePresence mode='wait'>
                {recentInquiries.length > 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-12 items-center"
                  >
                    {recentInquiries.map((q, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[10px] text-red-500 font-bold font-mono">NEW INQUIRY:</span>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300 italic">"{q.title}"</span>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3 text-emerald-600 dark:text-emerald-500 font-mono text-[10px] tracking-widest font-bold"
                  >
                    <Database className="w-3 h-3" />
                    SYSTEM ONLINE // PROJECT lpczjcpi... // READY FOR INQUIRIES
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/faqs" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-red-600 transition-colors flex items-center gap-2">
              Join Conversation <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Sectors */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          
          {/* Disaster Section */}
          <Link to="/disasters">
            <motion.div 
              variants={fadeInUp}
              className="group relative block"
            >
              <div className="absolute -inset-6 rounded-lg bg-slate-50 dark:bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative border-l-4 border-slate-200 dark:border-slate-800 pl-8 group-hover:border-red-700 dark:group-hover:border-red-600 transition-all duration-300 group-hover:pl-10">
                <div className="mb-6 inline-block p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                  <AlertTriangle className="w-6 h-6 text-slate-900 dark:text-slate-100 group-hover:text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif group-hover:text-red-800 dark:group-hover:text-red-400 transition-colors">Disasters</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                  Learn what causes earthquakes, typhoons, and floods. Find out exactly what steps to take before, during, and after a disaster to keep your family safe.
                </p>
                <ul className="space-y-4 mb-8 border-t border-slate-100 dark:border-slate-800 pt-8">
                  <li className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    Natural Disasters (Earthquakes, Floods)
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    Emergency Kits & Plans
                  </li>
                </ul>
                <div className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 border-b-2 border-slate-900 dark:border-slate-200 pb-1 group-hover:text-red-700 group-hover:border-red-700 dark:group-hover:text-red-400 dark:group-hover:border-red-400 transition-colors">
                  Start Learning <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Health Section */}
          <Link to="/health-risks">
            <motion.div 
              variants={fadeInUp}
              className="group relative block"
            >
              <div className="absolute -inset-6 rounded-lg bg-slate-50 dark:bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative border-l-4 border-slate-200 dark:border-slate-800 pl-8 group-hover:border-blue-700 dark:group-hover:border-blue-500 transition-all duration-300 group-hover:pl-10">
                <div className="mb-6 inline-block p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <Activity className="w-6 h-6 text-slate-900 dark:text-slate-100 group-hover:text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">Health Risks</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                  Understand common illnesses like Dengue and Heat Stroke. Learn simple ways to prevent them and spot the symptoms early.
                </p>
                 <ul className="space-y-4 mb-8 border-t border-slate-100 dark:border-slate-800 pt-8">
                  <li className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    Common Illnesses
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    First Aid Basics
                  </li>
                </ul>
                <div className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 border-b-2 border-slate-900 dark:border-slate-200 pb-1 group-hover:text-blue-700 group-hover:border-blue-700 dark:group-hover:text-blue-400 dark:group-hover:border-blue-400 transition-colors">
                  Read Health Guides <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Strategic Values */}
      <section className="bg-slate-50 dark:bg-slate-900 py-24 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-serif">Why This Matters</h2>
            <div className="h-1 w-24 bg-slate-900 dark:bg-slate-400 mt-4 rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-950 p-8 border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-sm group">
              <Globe className="w-8 h-8 text-slate-800 dark:text-slate-200 mb-6 group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-serif">Be Aware</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Knowing the risks is the first step. We explain things clearly so everyone can understand.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-950 p-8 border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-sm group">
              <Shield className="w-8 h-8 text-slate-800 dark:text-slate-200 mb-6 group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-serif">Be Prepared</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Don't wait for an emergency. Learn how to get your home and family ready today.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-950 p-8 border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-sm group">
              <FileText className="w-8 h-8 text-slate-800 dark:text-slate-200 mb-6 group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-serif">Take Action</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Practical, proven advice on what to do when safety is at risk. Simple steps to save lives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;