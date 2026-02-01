import { motion } from "framer-motion";

export function ElectromechanicalModel() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {/* Tube Array Container */}
      <div className="grid grid-cols-3 gap-8">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="w-12 h-24 relative"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            {/* Glass Tube */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 border border-primary/30 rounded-t-full rounded-b-lg backdrop-blur-sm" />
            
            {/* Filament */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-16 bg-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.5)] rounded-full">
              <motion.div 
                className="w-full h-full bg-orange-400"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.1, repeat: Infinity }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Connecting Wires - decorative */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 stroke-primary" style={{ zIndex: -1 }}>
        <path d="M100 200 Q 200 100 300 200 T 500 200" fill="none" strokeWidth="2" />
        <path d="M100 400 Q 200 500 300 400 T 500 400" fill="none" strokeWidth="2" />
      </svg>
    </div>
  );
}
