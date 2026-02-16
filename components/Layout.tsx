import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ArrowRight, Sun, Moon, Zap, Database } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/disasters', label: 'Disasters' },
    { path: '/health-risks', label: 'Health' },
    { path: '/faqs', label: 'Questions' },
    { path: '/about', label: 'About Us' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Top Bar */}
      <div className="bg-slate-900 dark:bg-black text-slate-300 py-1.5 px-4 text-[10px] uppercase tracking-widest font-semibold border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Student Safety Resource</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>Verified Information</motion.span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 shadow-sm dark:shadow-slate-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo Area */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-slate-900 dark:bg-red-700 p-1.5 rounded-sm shadow-md transition-colors"
                >
                  <Shield className="h-5 w-5 text-white" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-2xl text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors">PREPEDIA</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-sans-safe font-medium mt-0.5">Safety Encyclopedia</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative inline-flex items-center px-1 pt-1 text-xs font-bold uppercase tracking-widest transition-colors duration-300 group ${
                    isActive(link.path)
                      ? 'text-red-700 dark:text-red-400'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-700 dark:bg-red-500 transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden gap-4">
               <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all ${
                      isActive(link.path)
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white pl-6'
                        : 'text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:pl-6'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-white dark:bg-slate-950 transition-colors duration-300">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-6 w-6 text-slate-100" />
                <span className="font-serif font-bold text-xl text-white tracking-wide">PREPEDIA</span>
              </div>
              <p className="text-sm leading-relaxed max-w-md font-light mb-6">
                A simple, reliable guide to help students and families prepare for disasters and understand health risks. Knowledge is your best protection.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700/50">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Google AI</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-900/20 rounded-full border border-emerald-800/50">
                  <div className="relative">
                    <Database className="w-3 h-3 text-emerald-500" />
                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Supabase Linked</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Explore</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/disasters" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Disaster Guide</Link></li>
                <li><Link to="/health-risks" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Health Facts</Link></li>
                <li><Link to="/faqs" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Questions</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Sources</h3>
              <ul className="space-y-3 text-xs text-slate-500">
                <li>• PAGASA (Weather)</li>
                <li>• PHIVOLCS (Seismic)</li>
                <li>• DOH Philippines (Health)</li>
                <li>• ZCDRRMO (Local Data)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <div className="flex flex-col gap-1">
              <p>&copy; {new Date().getFullYear()} Prepedia. Student Safety Initiative.</p>
              <p className="font-mono opacity-50 text-[9px] uppercase tracking-tighter">NODE: lpczjcpi..._STABLE_VERIFIED</p>
            </div>
            <p className="mt-2 md:mt-0 italic opacity-70">Knowledge is the foundation of resilience.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;