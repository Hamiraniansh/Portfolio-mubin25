import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ChevronDown } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
            <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center lg:text-left z-10"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm"
                    >
                        Creative Developer & Designer
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
                    >
                        <span className="name-white">K. M. Fathum</span> <br />
                        <span className="name-accent">Mubin</span> <span className="name-white">Sachcha</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
                    >
                        Curious, tech-driven, and constantly evolving—an editor and software engineer with a sharp eye for detail and a drive to build, learn, and grow beyond limits.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
                    >
                        <a href="#contact" className="btn-primary">Get In Touch</a>
                        <a href="#projects" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm font-semibold">View Projects</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center lg:justify-start gap-6 text-slate-400"
                    >
                        <a href="https://github.com/mubin25s" target="_blank" className="hover:text-primary transition-colors"><Github size={24} /></a>
                        <a href="https://linkedin.com/in/fathum-mubin-090937280" target="_blank" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                        <a href="mailto:fathummubin26@gmail.com" className="hover:text-primary transition-colors"><Mail size={24} /></a>
                        <a href="https://x.com/FathumMubin26" target="_blank" className="hover:text-primary transition-colors"><Twitter size={24} /></a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-1 relative"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-[80px] animate-pulse"></div>
                        <img
                            src="/Mubin.jpeg"
                            alt="Mubin Sachcha"
                            className="w-full h-full object-cover rounded-full border-4 border-white/10 hover:border-primary/50 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10"
                        />
                        <div className="absolute -inset-6 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
                        <div className="absolute -inset-12 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                        <div className="absolute -inset-20 border border-white/5 rounded-full animate-[spin_40s_linear_infinite]"></div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};
