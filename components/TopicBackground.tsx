import React from 'react';
import { motion } from 'framer-motion';

const TsunamiEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
    {[...Array(3)].map((_, i) => (
      <motion.div 
        key={i}
        className="absolute bottom-[-20%] left-[-25%] right-[-25%] h-[80%] bg-blue-600/10 rounded-[100%] blur-3xl"
        initial={{ rotateX: 60, z: -i * 200, y: 100 }}
        animate={{ 
          y: [100, -50, 100],
          z: [-i * 200, -i * 200 + 100, -i * 200],
          rotateX: [60, 45, 60]
        }}
        transition={{ 
          duration: 6 + i * 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    ))}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10" />
  </div>
);

const FireEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1200px' }}>
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bottom-[-20px] rounded-full bg-orange-500/20 dark:bg-red-600/20 blur-xl"
        style={{
          left: `${Math.random() * 100}%`,
          width: `${20 + Math.random() * 40}px`,
          height: `${20 + Math.random() * 40}px`,
        }}
        initial={{ z: Math.random() * -500 }}
        animate={{
          y: [0, -400 - Math.random() * 200],
          z: [Math.random() * -500, 500],
          opacity: [0, 0.8, 0],
          scale: [0.5, 1.5, 0.5],
          rotateY: [0, 360],
          rotateX: [0, 180]
        }}
        transition={{
          duration: 3 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: Math.random() * 5
        }}
      />
    ))}
  </div>
);

const TyphoonEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center" style={{ perspective: '1500px' }}>
     <motion.div 
        className="w-[150%] h-[150%] border-[40px] border-slate-500/5 rounded-full"
        initial={{ rotateX: 75, rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
     />
     <motion.div 
        className="absolute w-[100%] h-[100%] border-[20px] border-slate-400/5 rounded-full"
        initial={{ rotateX: 75, rotateZ: 45, z: 100 }}
        animate={{ rotateZ: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
     />
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-slate-300/10 w-1 h-20"
        style={{ left: `${Math.random() * 100}%`, top: -100 }}
        animate={{
          y: 1000,
          rotateZ: 45,
          z: [-200, 200],
          opacity: [0, 0.5, 0]
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
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
     <div className="grid grid-cols-4 grid-rows-4 w-full h-full gap-4 p-10 opacity-10">
        {[...Array(16)].map((_, i) => (
          <motion.div 
            key={i}
            className="bg-amber-900/20 border border-amber-900/40 rounded-sm"
            animate={{ 
              rotateX: [0, 5, -5, 0],
              rotateY: [0, -5, 5, 0],
              z: [0, 20, -20, 0]
            }}
            transition={{ 
              duration: 0.5, 
              repeat: Infinity, 
              repeatDelay: 3 + Math.random() * 2,
              delay: i * 0.05
            }}
          />
        ))}
     </div>
  </div>
);

const FloodEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '800px' }}>
    <motion.div 
      className="absolute bottom-0 left-[-10%] right-[-10%] h-[40%] bg-cyan-500/10 blur-3xl"
      initial={{ rotateX: 80 }}
      animate={{ 
        height: ['30%', '50%', '30%'],
        rotateX: [80, 70, 80]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bottom-[10%] w-[120%] h-2 bg-white/5"
        style={{ left: '-10%', top: `${60 + i * 5}%` }}
        animate={{ 
          z: [-100, 100],
          opacity: [0, 0.2, 0]
        }}
        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const VolcanoEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center" style={{ perspective: '1200px' }}>
    {[...Array(25)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-orange-600/20 w-4 h-4 rounded-full blur-md"
        initial={{ z: -1000, y: 200 }}
        animate={{
          z: [ -1000, 800],
          y: [ 200, -800],
          x: [ 0, (Math.random() - 0.5) * 1000 ],
          opacity: [0, 1, 0],
          scale: [0, 4, 0]
        }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: Math.random() * 4
        }}
      />
    ))}
  </div>
);

const LandslideEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1500px' }}>
    <motion.div 
      className="absolute top-[-20%] right-[-20%] w-[100%] h-[150%] bg-stone-800/5 blur-3xl"
      initial={{ rotateY: -45, rotateX: 20 }}
      animate={{ 
        rotateY: [-45, -35, -45],
        z: [0, 100, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const HeatStrokeEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0 border-[100px] border-orange-500/5 rounded-full blur-[100px]"
        initial={{ z: -i * 200 }}
        animate={{ 
          z: [-i * 200, -i * 200 + 400, -i * 200],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const MentalHealthEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center" style={{ perspective: '1000px' }}>
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-purple-500/20 rounded-full"
        initial={{ width: 100, height: 100, z: -1000, opacity: 0 }}
        animate={{ 
          width: 800, 
          height: 800, 
          z: 500,
          opacity: [0, 0.4, 0],
          rotateZ: i * 60
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: i * 1.5
        }}
      />
    ))}
  </div>
);

const DengueEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1200px' }}>
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-green-500/40 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
        initial={{ 
          x: Math.random() * window.innerWidth, 
          y: Math.random() * 500,
          z: Math.random() * -1000 
        }}
        animate={{
          z: [Math.random() * -1000, 500],
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 1000,
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 5
        }}
      />
    ))}
  </div>
);

const FeverEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center" style={{ perspective: '1000px' }}>
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-full h-full bg-red-500/5 blur-[120px]"
        initial={{ z: -i * 300 }}
        animate={{ 
          z: [-i * 300, 200, -i * 300],
          scale: [0.8, 1.3, 0.8],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
      />
    ))}
  </div>
);

const CardiacArrestEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center" style={{ perspective: '1000px' }}>
    <motion.div 
      className="w-64 h-64 border-4 border-rose-500/20 rounded-full flex items-center justify-center"
      animate={{ 
        scale: [1, 1.2, 1.1, 1.3, 1],
        rotateX: [0, 20, -20, 0],
        z: [0, 100, -50, 0]
      }}
      transition={{ 
        duration: 0.8, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <div className="w-32 h-32 bg-rose-600/10 rounded-full blur-xl animate-pulse" />
    </motion.div>
  </div>
);

const RabiesEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
    <motion.div 
      className="absolute inset-0 bg-red-950/5"
      animate={{ 
        rotateX: [0, 2, -2, 0],
        rotateY: [0, -2, 2, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 4 }}
    />
    <div className="absolute inset-0 border-[50px] border-red-900/10 blur-2xl" />
  </div>
);

const LeptospirosisEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1200px' }}>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-yellow-500/10 w-20 h-20 rounded-full blur-2xl"
        initial={{ 
          x: Math.random() * 1000 - 500, 
          y: Math.random() * 1000 - 500,
          z: Math.random() * -1500 
        }}
        animate={{
          z: [Math.random() * -1500, 800],
          rotateX: 360,
          rotateY: 360,
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 10 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear"
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
    case 'heatstroke': return <HeatStrokeEffect />;
    case 'mental-health': return <MentalHealthEffect />;
    case 'dengue': return <DengueEffect />;
    case 'fever': return <FeverEffect />;
    case 'cardiac-arrest': return <CardiacArrestEffect />;
    case 'rabies': return <RabiesEffect />;
    case 'leptospirosis': return <LeptospirosisEffect />;
    default: return <div className="absolute inset-0 bg-slate-500/5 dark:bg-slate-400/5 blur-3xl rounded-full" />;
  }
};

export default TopicBackground;