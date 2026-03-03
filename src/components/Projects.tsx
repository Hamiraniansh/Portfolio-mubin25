import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const featuredProjects = [
    {
        title: "Pet Shop",
        description: "A full-featured MERN stack application with real-time chat and order management for an online pet store. Includes an admin dashboard, user authentication, and responsive design.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        link: "https://mfathumsachcha-netizen.github.io/petshop-Demo/",
        github: "https://github.com/mubin25s/Pet_Shop-3",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
    },
    {
        title: "Pet Shelter",
        description: "A comprehensive web application for managing pet adoptions and shelter inventory. It features a seamless adoption process, animal profiles, and administrative tools.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
        link: "https://mfathumsachcha-netizen.github.io/petshelter-Demo/",
        github: "https://github.com/mubin25s/Pet_Shelter",
        image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e"
    },
    {
        title: "Sneakers Shop",
        description: "A modern e-commerce platform for premium footwear. It features beautiful UI with smooth animations, advanced filtering, and a fully functional cart system.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://mubin25s.github.io/Sneakers/",
        github: "https://github.com/mubin25s/Sneakers",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-slate-400 max-w-2xl text-sm md:text-base">
                    Here are some of my best works that showcase my skills in building full-stack applications and creating engaging user experiences.
                </p>
            </motion.div>

            <div className="space-y-24">
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`flex flex-col gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                            }`}
                    >
                        {/* Project Image */}
                        <div className="w-full lg:w-3/5 group">
                            <div className="relative rounded-xl md:rounded-2xl overflow-hidden glass-card border border-white/10 aspect-[16/10]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'
                            } text-left`}>
                            <p className="text-primary font-bold tracking-widest text-sm mb-2 uppercase">Featured Project</p>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-6">{project.title}</h3>

                            <div className="glass-card p-6 rounded-xl border border-white/5 mb-6 bg-white/[0.03] backdrop-blur-md relative z-10 w-full shadow-2xl">
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <ul className={`flex flex-wrap gap-3 mb-8 ${index % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start'
                                } font-mono text-xs md:text-sm text-slate-400`}>
                                {project.techStack.map((tech, i) => (
                                    <li key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 whitespace-nowrap">
                                        {tech}
                                    </li>
                                ))}
                            </ul>

                            <div className={`flex items-center gap-4 ${index % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start'
                                }`}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-slate-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
                                    aria-label="GitHub Repository"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-slate-400 hover:text-primary transition-colors duration-300 transform hover:-translate-y-1"
                                    aria-label="Live Demo"
                                >
                                    <ExternalLink size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <a
                    href="https://github.com/mubin25s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-full text-sm font-bold tracking-wider uppercase transition-transform hover:scale-105"
                >
                    View More on GitHub <Github size={18} />
                </a>
            </div>
        </section>
    );
};

export default Projects;
