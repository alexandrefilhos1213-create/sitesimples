import { motion } from "framer-motion";

export function ModernModel() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        className="relative w-64 h-64"
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Central Core - Cloud/Network */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
        </div>

        {/* Satellite Nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-4 h-4"
            style={{
              transform: `rotate(${i * 60}deg) translateX(100px) rotate(-${i * 60}deg)`,
            }}
          >
            <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
            
            {/* Connection lines back to center */}
            <div 
              className="absolute top-1/2 left-1/2 h-[1px] bg-primary/20 origin-left"
              style={{
                width: "100px",
                transform: `rotate(${180 + i * 60}deg)`,
              }}
            />
          </motion.div>
        ))}

        {/* Orbiting Ring 1 */}
        <motion.div
          className="absolute inset-0 border border-primary/30 rounded-full"
          style={{ rotateX: 60 }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Orbiting Ring 2 */}
        <motion.div
          className="absolute inset-0 border border-primary/30 rounded-full"
          style={{ rotateX: -60 }}
          animate={{ rotateZ: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}
