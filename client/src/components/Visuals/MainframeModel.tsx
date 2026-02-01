import { motion } from "framer-motion";

export function MainframeModel() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        className="relative w-64 h-96 bg-primary/5 border-2 border-primary/20 rounded-xl overflow-hidden shadow-2xl"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Header */}
        <div className="h-12 bg-primary/10 border-b border-primary/20 flex items-center gap-2 px-4">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>

        {/* Tape Reels */}
        <div className="p-8 flex flex-col items-center gap-8">
          <div className="flex gap-4">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="w-20 h-20 rounded-full border-4 border-primary/40 relative flex items-center justify-center"
                animate={{ rotate: i === 0 ? 360 : 360 }} // Both spin clockwise or counter
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="absolute w-full h-1 bg-primary/20 rotate-0" />
                <div className="absolute w-full h-1 bg-primary/20 rotate-90" />
              </motion.div>
            ))}
          </div>

          {/* Blinkenlights Panel */}
          <div className="w-full grid grid-cols-8 gap-1 p-4 bg-primary/10 rounded-lg">
            {[...Array(32)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: Math.random() * 0.5 + 0.1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
