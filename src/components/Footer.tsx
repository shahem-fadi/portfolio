import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          
          

          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/shahem-fadi" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shahem-albakri-b38b1a306" },
              { icon: Mail, href: "mailto:shahemfadi18@gmail.com" }
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm font-mono text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Shahem Fadi. All rights reserved.</p>
          <p className="mt-4 md:mt-0"></p>
        </div>
      </div>
    </footer>
  );
}
