import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
    const roles = [
        "Frontend Developer",
        "Full Stack Developer"
    ];

    const [roleIndex, setRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[roleIndex];

            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setSpeed(50);
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                setSpeed(100);
            }

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setSpeed(150);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, roleIndex, speed, roles]);

    return (
        <section id="home" className="snap-section overflow-hidden px-6 pt-28 md:pt-16 flex flex-col justify-center">
            <div className="container max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center lg:text-left z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                        <span className="text-xs md:text-sm font-medium text-slate-300">Currently building a MERN-based event management platform</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-2 leading-tight"
                    >
                        <span className="name-white">K. M. Fathum</span> <br />
                        <span className="name-accent">Mubin</span> <span className="name-white">Sachcha</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-primary font-bold tracking-[0.2em] uppercase mb-6 text-xs h-6"
                    >
                        <span>{currentText}</span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-1.5 h-4 bg-primary ml-1 align-middle"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 text-sm md:text-base max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0"
                    >
                        I build modern web applications with React & Node.js
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
                    >
                        <a href="#projects" className="btn-primary py-2 px-6 text-sm">View Projects</a>
                        <a href="#contact" className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm font-semibold text-sm">Contact Me</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-400"
                    >
                        {[
                            { icon: "fa-brands fa-github", href: "https://github.com/mubin25s", color: "#fff" },
                            { icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com/in/fathum-mubin-090937280", color: "#0077b5" },
                            { icon: "fa-solid fa-envelope", href: "mailto:fathummubin26@gmail.com", color: "#80011f" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    y: -6,
                                    scale: 1.3,
                                    color: social.color
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="w-10 h-10 flex items-center justify-center text-slate-400 transition-all duration-300 group"
                            >
                                <i
                                    className={`${social.icon} text-2xl transition-all duration-300 group-hover:brightness-150`}
                                    style={{ filter: `drop-shadow(0 0 2px rgba(255,255,255,0.1))` }}
                                    onMouseEnter={(e) => e.currentTarget.style.filter = `drop-shadow(0 0 10px ${social.color}) brightness(1.4)`}
                                    onMouseLeave={(e) => e.currentTarget.style.filter = `drop-shadow(0 0 2px rgba(255,255,255,0.1))`}
                                ></i>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-1 relative"
                >
                    <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-[380px] lg:h-[380px] mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-[60px] animate-pulse"></div>
                        <img
                            src="/Mubin.jpeg"
                            alt="Mubin Sachcha"
                            className="w-full h-full object-cover rounded-full border-4 border-white/10 hover:border-primary/50 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10"
                        />
                        <div className="absolute -inset-4 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
                        <div className="absolute -inset-8 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
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
