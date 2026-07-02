import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certs = [
  {
    name: 'Understanding Basic SQL Syntax',
    issuer: 'Coursera',
    date: 'November 2024',
    url: 'https://coursera.org/share/45fa592104d9aa91fe54e3f16b867d65',
  },
  {
    name: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: 'May 2025',
    url: 'https://coursera.org/share/8045d4f3c2436c550c213cceada7cd6f',
  },
  {
    name: 'Network Security',
    issuer: 'ISC2',
    date: 'July 2025',
    url: 'https://coursera.org/share/ead7e018d9be58d0a86085d67223a381',
  },
  {
    name: 'Linux Fundamentals',
    issuer: 'LearnQuest',
    date: 'July 2025',
    url: 'https://coursera.org/share/9a74468900a72df3d78ebb0c3847c8ba',
  },
  {
    name: 'Technical Support Fundamentals',
    issuer: 'Google',
    date: 'July 2025',
    url: 'https://coursera.org/share/c6a33a44a2ecb0bc3dcef36b89d8350c',
  },
  {
    name: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    date: 'July 2025',
    url: 'https://coursera.org/share/078d2abe93931a9507a8d3f640dc4ddb',
  },
  {
    name: 'System Administration and IT Infrastructure Services',
    issuer: 'Google',
    date: 'July 2025',
    url: 'https://coursera.org/share/99d7fcd5b3e5324bbcd68f674d68eb3f',
  },
  {
    name: 'Connect and Protect: Networks and Network Security',
    issuer: 'Google',
    date: 'November 2025',
    url: 'https://coursera.org/share/0a5fe50edce86a56f55f528b1d342c02',
  },
  {
    name: 'Advanced Relational Database and SQL',
    issuer: 'Coursera',
    date: 'March 2026',
    url: 'https://coursera.org/share/ce8afcc2abdcc7beea5788d0b56d4f5c',
  },
  {
    name: 'IoT (Internet of Things) Wireless & Cloud Computing Emerging Technologies',
    issuer: 'Yonsei University',
    date: 'March 2026',
    url: 'https://coursera.org/share/1c1809b27e521b81e23df1889e8650bc',
  },
  {
    name: 'Cybersecurity Compliance Framework, Standards & Regulations',
    issuer: 'IBM',
    date: 'July 2026',
    url: 'https://coursera.org/share/e435bea48433231aef70393ad112a46c',
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-32 bg-card/30 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Proven <span className="italic text-accent">Expertise</span></h2>
          <p className="text-muted-foreground">Continuous learning is the foundation of my practice. These credentials reflect my commitment to mastering cybersecurity and network systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.6 }}
              data-testid={`cert-card-${index}`}
              className="group relative p-6 rounded-2xl bg-background border border-white/5 hover:border-accent/50 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">{cert.issuer}</p>
                  <h4 className="text-base font-medium text-foreground leading-snug group-hover:text-accent transition-colors">{cert.name}</h4>
                </div>
                <ExternalLink size={14} className="shrink-0 mt-1 text-muted-foreground/40 group-hover:text-accent transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground/50 font-mono border-t border-white/5 pt-4 mt-auto">{cert.date}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 p-10 rounded-2xl border border-accent/20 bg-accent/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Education</p>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
              B.Sc. IT Networking & Security
            </h3>
            <p className="text-muted-foreground text-lg">Ajman University · United Arab Emirates</p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-mono text-sm text-muted-foreground/60 uppercase tracking-widest">Graduated</p>
            <p className="text-4xl font-serif text-accent mt-1">AU</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
