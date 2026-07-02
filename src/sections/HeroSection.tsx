import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="font-mono text-sm tracking-widest text-accent uppercase">
              IT Networking & Security · Ajman University
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight text-foreground"
          >
            Securing <span className="italic text-muted-foreground">networks,</span> <br />
            building <span className="italic text-muted-foreground">systems,</span> <br />
            <span className="text-accent italic">with purpose.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            IT Networking and Security graduate from Ajman University, passionate about 
            cybersecurity, network systems, and building impactful software that makes a difference.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8"
          >
            <a
              href="/CV-Shahem-Fadi.pdf"
              download="CV-Shahem-Fadi.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white font-mono text-sm tracking-wider rounded-full hover:bg-accent/80 transition-all"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-muted-foreground"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
