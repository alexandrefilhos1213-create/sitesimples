import { useEras } from "@/hooks/use-eras";
import { EraSection } from "@/components/EraSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { data: eras, isLoading, error } = useEras();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <p className="font-mono text-sm text-muted-foreground animate-pulse">Inicializando linha do tempo...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-destructive/5 text-destructive">
        <div className="max-w-md text-center p-8">
          <h2 className="text-2xl font-bold mb-2">Falha no Sistema</h2>
          <p className="opacity-80">Não foi possível recuperar os dados temporais. Por favor, atualize o sinal.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      <ThemeToggle />
      
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Intro Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="font-mono text-sm tracking-[0.5em] text-primary/60 uppercase mb-6 block">
            Uma história visual
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-8 text-primary">
            Eras da<br/>Computação
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            De engrenagens mecânicas a nuvens distribuídas. <br/>
            Role para atravessar a linha do tempo da computação humana.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Rolar</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Dynamic Era Sections */}
      {eras?.map((era, index) => (
        <EraSection key={era.id} era={era} index={index} />
      ))}

      {/* Outro / Footer */}
      <footer className="h-[50vh] flex flex-col items-center justify-center bg-primary text-primary-foreground p-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-display font-bold mb-6">Fim da Transmissão</h2>
          <p className="font-mono text-sm opacity-60">
            © {new Date().getFullYear()} Arquivo Histórico da Computação
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
