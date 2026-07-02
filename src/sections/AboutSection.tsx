import { motion } from 'framer-motion';
import shahemPhoto from '../assets/shahem-photo.jpg';

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden group">
              <img 
                src={shahemPhoto}
                alt="Shahem Fadi" 
                className="w-full h-full object-cover object-top transition-all duration-700"
              />
            </div>
            <div className="absolute -inset-4 border border-white/10 rounded-lg -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8">
              Who is <br/>
              <span className="italic text-accent">Shahem Fadi?</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                I'm an IT Networking and Security graduate from <strong className="font-normal text-foreground">Ajman University</strong>, 
                driven by a deep curiosity about how systems connect, communicate, and stay resilient under pressure.
              </p>
              <p>
                My passion lives at the intersection of cybersecurity, network infrastructure, and software development. 
                I believe security isn't just a feature — it's a foundation. Every system I build starts with that principle.
              </p>
              <p>
                Whether I'm analyzing network traffic, hardening systems against threats, or building tools that make 
                complex infrastructure visible and manageable, my goal is always the same: 
                <strong className="font-normal text-foreground"> technology that actually matters.</strong>
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {['Cybersecurity', 'Network Systems', 'Python', 'Linux', 'Cisco', 'Wireshark', 'Firewalls', 'Software Development'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 border border-white/10 rounded-full text-sm font-mono text-foreground/80 hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
