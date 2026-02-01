import { motion } from "framer-motion";

export function PersonalModel() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {/* Monitor */}
      <motion.div
        className="relative"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-80 h-64 bg-background border-4 border-primary rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_20px_40px_-10px_rgba(0,0,0,0.2)] flex flex-col p-4 relative z-10">
          <div className="flex-1 bg-primary/5 rounded-lg border border-primary/10 p-4 font-mono text-xs text-primary overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              &gt; SYSTEM READY...<br />
              &gt; LOAD "OS",8,1<br />
              &gt; SEARCHING FOR...<br />
              &gt; LOADING...<br />
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>
          </div>
        </div>
        
        {/* Stand */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-12 bg-primary/10 border-x-2 border-b-2 border-primary/20 rounded-b-xl transform -skew-x-12" />
        
        {/* Keyboard base hint */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-16 bg-background border-2 border-primary rounded-lg transform rotate-x-60 shadow-xl" />
      </motion.div>
    </div>
  );
}
