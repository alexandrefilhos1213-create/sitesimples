import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { type Era } from "@/hooks/use-eras";
import { cn } from "@/lib/utils";

// Visual Models
import { PrimitiveModel } from "./Visuals/PrimitiveModel";
import { ElectromechanicalModel } from "./Visuals/ElectromechanicalModel";
import { MainframeModel } from "./Visuals/MainframeModel";
import { PersonalModel } from "./Visuals/PersonalModel";
import { ModernModel } from "./Visuals/ModernModel";

interface EraSectionProps {
  era: Era;
  index: number;
}

const VisualComponents: Record<string, React.FC> = {
  primitive: PrimitiveModel,
  electromechanical: ElectromechanicalModel,
  mainframe: MainframeModel,
  personal: PersonalModel,
  modern: ModernModel,
};

export function EraSection({ era, index }: EraSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scroll hook to track progress of this specific section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map visuals based on era type
  const VisualComponent = VisualComponents[era.visualType] || PrimitiveModel;

  // Animations driven by scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]); // Gentle parallax for text

  return (
    <div 
      ref={containerRef} 
      className="relative h-[200vh] w-full" // Extra height for scroll duration
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row bg-background">
        
        {/* Left Column: Visual Model */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-16 bg-accent/30 relative overflow-hidden">
          {/* Background Number */}
          <span className="absolute -left-10 bottom-0 text-[20rem] font-bold text-foreground/5 font-display leading-none select-none pointer-events-none">
            {index + 1}
          </span>
          
          <motion.div style={{ opacity, scale }} className="w-full h-full">
            <VisualComponent />
          </motion.div>
        </div>

        {/* Right Column: Narrative */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center p-8 md:p-16 lg:p-24 bg-background">
          <motion.div style={{ opacity }} className="max-w-xl">
            {/* Header */}
            <div className="mb-8 border-l-2 border-primary pl-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-2 block"
              >
                {era.yearRange}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight"
              >
                {era.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl mt-4 text-muted-foreground font-light"
              >
                {era.shortDescription}
              </motion.p>
            </div>

            {/* Scrolling Details */}
            <div className="space-y-8 font-sans text-lg leading-relaxed text-foreground/80">
              {era.details.map((detail, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                >
                  {detail}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
