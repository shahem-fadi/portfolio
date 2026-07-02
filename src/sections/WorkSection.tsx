import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import project1 from '../assets/unity-game.jpg';
import project2 from '../assets/uniclass-dashboard.jpg';
import project3 from '../assets/healthcare-network.jpg';
import project4 from '../assets/quran-stories.jpg';
import project5 from '../assets/car-maintenance-app.jpg';

const projects = [
  {
    id: '01',
    title: 'Unity Game',
    category: 'Interactive 3D Game',
    description: 'Programmed a fully playable low-poly 3D game using the Unity engine. Features a winter survival environment with a character, cabin, and snowman. Designed all game mechanics, scripted gameplay systems in C#, and built the level from scratch.',
    image: project1,
    tech: ['Unity', 'C#', 'Game Design', 'Physics Engine', '3D Modeling'],
    link: null
  },
  {
    id: '02',
    title: 'Uniclass',
    category: 'Scheduling System / Web Platform',
    description: 'Built a web platform that automates university class scheduling. The system intelligently assigns classrooms, timeslots, and instructors while detecting and resolving conflicts — streamlining the entire academic timetabling process.',
    image: project2,
    tech: ['FastAPI', 'Python', 'OR-Tools (CP-SAT)', 'SQLAlchemy', 'PostgreSQL', 'React', 'TypeScript'],
    link: null
  },
  {
    id: '03',
    title: 'Healthcare Centre Network',
    category: 'Network Infrastructure / Design',
    description: 'Designed and constructed a full network infrastructure for a healthcare centre. Created the topology, configured routers, switches, and VLANs, and enforced security policies to protect sensitive patient data.',
    image: project3,
    tech: ['Cisco Packet Tracer', 'VLAN', 'Network Security', 'TCP/IP', 'Firewall'],
    link: null
  },
  {
    id: '04',
    title: 'Quran Stories',
    category: 'Educational Web App',
    description: 'An educational web app that brings together the stories of the Holy Quran in one organized and easy-to-use platform — making Quranic knowledge accessible to everyone.',
    image: project4,
    tech: ['React', 'TypeScript', 'Vite'],
    link: 'https://shahem-fadi.github.io/Quran_stories/'
  },
  {
    id: '05',
    title: 'Car Maintenance App',
    category: 'Mobile Application',
    description: 'Developed a mobile application that helps car owners track and manage vehicle maintenance. Features include service history logging (oil changes, tire repairs, brake replacements), user account registration, and a clean multi-screen UI with a purple-accented design.',
    image: project5,
    tech: ['Mobile Dev', 'UI/UX Design', 'Firebase', 'Authentication'],
    link: null
  }
];

export function WorkSection() {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-serif">Selected <span className="italic text-accent">Work</span></h2>
          </div>
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
            2025
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                <div className={`lg:col-span-5 order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2 lg:col-start-8'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-accent font-mono text-sm">{project.id}</span>
                    <span className="h-[1px] w-8 bg-white/20"></span>
                    <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-semibold mb-6 group-hover:text-accent transition-colors flex items-center gap-4">
                    {project.title}
                    <ArrowUpRight className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-accent border border-accent/30 px-5 py-2.5 rounded-full hover:bg-accent/10 transition-colors"
                    >
                      View Live <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <div className={`lg:col-span-7 order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1 lg:col-start-1'}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-card border border-white/5">
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                        </a>
                      ) : (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </motion.div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
