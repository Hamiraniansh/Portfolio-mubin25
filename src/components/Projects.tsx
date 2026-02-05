import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Course Grade Calculator",
        description: "A dynamic calculator for computing university course grades and GPAs.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://mubin25s.github.io/Course-Grade-Calculator/X_Calculator/Grade_Calculator/index.html",
        github: "https://github.com/mubin25s/Course-Grade-Calculator",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    },
    {
        title: "Pet Shelter",
        description: "A web application for managing pet adoptions and shelter inventory.",
        tags: ["PHP", "Supabase", "JavaScript"],
        link: "https://mfathumsachcha-netizen.github.io/petshelter-Demo/",
        github: "https://github.com/mubin25s/Pet_Shelter",
        image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e"
    },
    {
        title: "Pet Shop",
        description: "A full-featured MERN stack application with real-time chat and order management.",
        tags: ["React", "Express", "MongoDB", "Node.js"],
        link: "https://mfathumsachcha-netizen.github.io/petshop-Demo/",
        github: "https://github.com/mubin25s/Pet_Shop-3",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
    },
    {
        title: "Goku Portfolio",
        description: "Stunning personal portfolio with dark theme, glassmorphism, and interactive animations.",
        tags: ["HTML", "CSS", "JavaScript", "Supabase"],
        link: "https://mubin25s.github.io/Portfolio-Goku/",
        github: "https://github.com/mubin25s/Portfolio-Goku",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
    },
    {
        title: "Library Management",
        description: "A system for managing library resources, members, and borrowing processes efficiently.",
        tags: ["PHP", "MySQL", "JavaScript"],
        link: "https://mfathumsachcha-netizen.github.io/library_management-Demo/",
        github: "https://github.com/mubin25s/Library_Management",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
    },
    {
        title: "Sneakers E-commerce",
        description: "A modern e-commerce platform for premium footwear with a sleek, responsive design.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://mubin25s.github.io/Sneakers/",
        github: "https://github.com/mubin25s/Sneakers",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-[#050505]/50 backdrop-blur-3xl">
            <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-4"
                    >
                        Selected <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        A showcase of some of my favorite works, ranging from simple calculators to full-stack applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card group flex flex-col h-full"
                        >
                            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.link} target="_blank" className="p-3 bg-primary rounded-full text-black hover:scale-110 transition-transform">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.github} target="_blank" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
