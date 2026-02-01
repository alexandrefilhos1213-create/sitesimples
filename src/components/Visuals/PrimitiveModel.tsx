import { motion } from "framer-motion";

export function PrimitiveModel() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        className="relative w-64 h-64 border-4 border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {/* Abacus / Gear aesthetic - minimal lines */}
        {[0, 45, 90, 135].map((deg, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-full h-1 bg-primary/20"
            style={{
              transform: `translate(-50%, -50%) rotate(${deg}deg)`,
            }}
          />
        ))}
        
        <motion.div
          className="absolute inset-0 m-auto w-32 h-32 border-4 border-primary rounded-lg"
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-4 border-2 border-primary/50 rounded-full grid place-items-center">
            <div className="w-4 h-4 bg-primary rounded-full" />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Floating beads */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 bg-primary rounded-full opacity-10"
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: `${20 + i * 20}%`, left: `${20 + i * 20}%` }}
        />
      ))}
    </div>
  );
}
