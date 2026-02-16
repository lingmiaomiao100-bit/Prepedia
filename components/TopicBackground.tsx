import React from 'react';
import { motion } from 'framer-motion';

const TsunamiEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      className="absolute bottom-[-50%] left-[-20%] right-[-20%] h-[100%] bg-blue-400/10 dark:bg-blue-600/10 rounded-[100%]"
      animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-[-60%] left-[-20%] right-[-20%] h-[100%] bg-blue-500/10 dark:bg-blue-500/10 rounded-[100%]"
      animate={{ y: [0, -30, 0], rotate: [0, -3, 3, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30 dark:to-blue-900/10" />
  </div>
);

const FireEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bottom-[-20px] rounded-full bg-orange-500/10 dark:bg-orange-600/10 blur-xl"
        style={{
          left: `${15 + i * 15}%`,
          width: `${30 + Math.random() * 50}px`,
          height: `${30 + Math.random() * 50}px`,
        }}
        animate={{
          y: [0, -150 - Math.random() * 100],
          opacity: [0, 0.5, 0],
          scale: [0.5, 1.5, 0.5]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: Math.random() * 2
        }}
      />
    ))}
    <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 dark:from-orange-900/10 to-transparent" />
  </div>
);

const TyphoonEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
     <motion.div 
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,transparent_30%,rgba(100,116,139,0.1)_70%)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
     />
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-slate-400/30 dark:bg-slate-500/30 w-[1px] h-[40px]"
        style={{
          left: `${Math.random() * 100}%`,
          top: -50
        }}
        animate={{
          y: 600,
          x: -100,
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 1 + Math.random(),
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2
        }}
      />
    ))}
  </div>
);

const EarthquakeEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
     <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.02)_50%,rgba(0,0,0,0.02)_75%,transparent_75%,transparent)] bg-[length:24px_24px]" />
     <motion.div
       className="absolute inset-0 border-b-4 border-amber-500/10"
       animate={{ x: [-2, 2, -1, 1, 0] }}
       transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
     />
  </div>
);

const FloodEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-1/3 bg-cyan-400/10 dark:bg-cyan-600/10 blur-lg"
      animate={{ height: ["30%", "35%", "30%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
     <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
  </div>
);

const VolcanoEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent" />
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-gray-600/20 w-1.5 h-1.5 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: -10
        }}
        animate={{
          y: 400,
          x: (Math.random() - 0.5) * 50,
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5
        }}
      />
    ))}
  </div>
);

const LandslideEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute -right-20 -top-20 w-[150%] h-[150%] bg-stone-500/5 rotate-12"
        animate={{ x: [-10, 0, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-500/10" />
    </div>
);

const HealthEffect = ({ color }: { color: string }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
     {[...Array(5)].map((_, i) => (
       <motion.div
         key={i}
         className={`absolute rounded-full opacity-10 ${color}`}
         style={{
           width: Math.random() * 100 + 50,
           height: Math.random() * 100 + 50,
           left: `${Math.random() * 80}%`,
           top: `${Math.random() * 80}%`,
         }}
         animate={{
           y: [0, -20, 0],
           scale: [1, 1.1, 1],
           opacity: [0.05, 0.1, 0.05]
         }}
         transition={{
           duration: 5 + Math.random() * 5,
           repeat: Infinity,
           ease: "easeInOut"
         }}
       />
     ))}
  </div>
);

const TopicBackground = ({ id }: { id: string }) => {
  switch (id) {
    case 'tsunami': return <TsunamiEffect />;
    case 'fire': return <FireEffect />;
    case 'typhoon': return <TyphoonEffect />;
    case 'flood': return <FloodEffect />;
    case 'earthquake': return <EarthquakeEffect />;
    case 'landslide': return <LandslideEffect />; 
    case 'volcano': return <VolcanoEffect />;
    case 'heatstroke': return <HealthEffect color="bg-orange-500" />;
    case 'dengue': return <HealthEffect color="bg-green-500" />;
    case 'leptospirosis': return <HealthEffect color="bg-yellow-500" />;
    case 'rabies': return <HealthEffect color="bg-red-800" />;
    case 'cardiac-arrest': return <HealthEffect color="bg-rose-500" />;
    case 'mental-health': return <HealthEffect color="bg-purple-500" />;
    default: return <HealthEffect color="bg-slate-500" />;
  }
};

export default TopicBackground;