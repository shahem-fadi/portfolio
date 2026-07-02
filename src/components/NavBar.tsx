import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-xl font-serif font-bold tracking-wider text-foreground">
          SHAHEM<span className="text-accent italic font-serif">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:shahemfadi18@gmail.com"
            className="text-sm font-mono tracking-wider px-5 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
