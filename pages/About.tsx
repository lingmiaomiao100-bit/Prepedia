import React from 'react';
import { Shield, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 border-b border-slate-200 dark:border-slate-800 pb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 block">Lantawan Pasonanca National High School</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 font-serif">Our Mission</h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-serif italic max-w-2xl mx-auto">
            "To keep everyone in our Zamboanga community safe by making disaster and health information easy to understand and access."
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-16">
          <motion.section variants={fadeInUp} className="bg-slate-50 dark:bg-slate-900 p-10 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-serif uppercase tracking-wide border-l-4 border-slate-900 dark:border-red-600 pl-4">What We Do</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-light">
              Prepedia is a digital handbook created for Lantawan Pasonanca National High School. We know that thick manuals can be hard to read, so we break down complicated safety rules into simple steps. Whether it's a typhoon, a flood in Zamboanga, or health risks, we help you know exactly what to do.
            </p>
          </motion.section>

          <motion.section variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="text-center group">
              <div className="w-12 h-12 bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center mx-auto mb-6 rounded-sm group-hover:scale-110 group-hover:bg-red-700 dark:group-hover:bg-red-600 transition-all duration-300">
                 <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-widest text-sm">Protection</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Getting ready before something bad happens is the best way to stay safe.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center group">
              <div className="w-12 h-12 bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center mx-auto mb-6 rounded-sm group-hover:scale-110 group-hover:bg-blue-700 dark:group-hover:bg-blue-600 transition-all duration-300">
                 <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-widest text-sm">Knowledge</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">We turn difficult facts into clear advice that anyone can follow.</p>
            </motion.div>
             <motion.div variants={fadeInUp} className="text-center group">
              <div className="w-12 h-12 bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center mx-auto mb-6 rounded-sm group-hover:scale-110 group-hover:bg-green-700 dark:group-hover:bg-green-600 transition-all duration-300">
                 <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-widest text-sm">Community</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">When we are all prepared, our whole neighborhood becomes safer.</p>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;