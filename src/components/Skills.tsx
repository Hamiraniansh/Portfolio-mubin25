import React, { useState } from 'react';
import { motion } from 'framer-motion';

const technicalStack = [
    {
        title: "Programming Languages",
        skills: [
            { name: "JS", icon: "devicon-javascript-plain", color: "#F7DF1E" },
            { name: "Java", icon: "devicon-java-plain", color: "#007396" },
            { name: "C++", icon: "devicon-cplusplus-plain", color: "#00599C" },
            { name: "C#", icon: "devicon-csharp-plain", color: "#239120" },
            { name: "Dart", icon: "devicon-dart-plain", color: "#0175C2" },
            { name: "PHP", icon: "devicon-php-plain", color: "#777BB4" },
            { name: "C", icon: "devicon-c-plain", color: "#A8B9CC" },
            { name: "Shell", icon: "devicon-bash-plain", color: "#4EAA25" },
            { name: "TS", icon: "devicon-typescript-plain", color: "#3178C6" },
            { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
            { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26" },
            { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6" }
        ]
    },
    {
        title: "Frameworks",
        skills: [
            { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
            { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933" },
            { name: "Express.js", icon: "devicon-express-original", color: "#000000" },
            { name: "Laravel", icon: "devicon-laravel-original", color: "#FF2D20" },
            { name: "Tailwind", icon: "devicon-tailwindcss-original", color: "#06B6D4" },
            { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "#7952B3" },
            { name: "Socket.io", icon: "devicon-socketio-original", color: "#010101" }
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
            { name: "GitHub", icon: "devicon-github-original", color: "#FFFFFF" },
            { name: "VS Code", icon: "devicon-vscode-plain", color: "#007ACC" },
            { name: "NPM", icon: "devicon-npm-original-wordmark", color: "#CB3837" },
            { name: "Vite", icon: "devicon-vite-original", color: "#646CFF" },
            { name: "XAMPP", icon: "devicon-apache-plain", color: "#FB503B" },
            { name: "CodeBlocks", icon: "fa-solid fa-cube", color: "#2E5D87" },
            { name: "Cloudflare", icon: "devicon-cloudflare-plain", color: "#F38020" },
            { name: "Postman", icon: "devicon-postman-plain", color: "#FF6C37" },
            { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E" },
            { name: "Vercel", icon: "devicon-vercel-original", color: "#FFFFFF" },
            { name: "Netlify", icon: "devicon-netlify-plain", color: "#00C7B7" },
            { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },
            { name: "Linux", icon: "devicon-linux-plain", color: "#FCC624" },
            { name: "Ubuntu", icon: "devicon-ubuntu-plain", color: "#E95420" },
            { name: "Arch", icon: "devicon-archlinux-plain", color: "#1793D1" },
            { name: "Kali", icon: "devicon-linux-plain", color: "#557C94" },
            { name: "Windows", icon: "devicon-windows8-original", color: "#00ADEF" }
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479A1" },
            { name: "Postgres", icon: "devicon-postgresql-plain", color: "#4169E1" },
            { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248" },
            { name: "Supabase", icon: "devicon-supabase-plain", color: "#3ECF8E" },
            { name: "Firebase", icon: "devicon-firebase-plain", color: "#FFCA28" },
            { name: "MariaDB", icon: "devicon-mariadb-plain", color: "#003545" }
        ]
    }
];

const SectionFlipCard = ({
    title,
    color,
    children,
    className = "",
    frontIcon = null
}: {
    title: string;
    color: string;
    children: React.ReactNode;
    className?: string;
    frontIcon?: string | null;
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`perspective-1000 cursor-pointer ${className} h-full group`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side: Minimalist Designed Box */}
                <div
                    className="absolute inset-0 backface-hidden glass-card flex flex-col items-center justify-center rounded-2xl overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div
                        className="absolute w-32 h-32 blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: color }}
                    ></div>
                    {frontIcon && <i className={`${frontIcon} text-3xl md:text-4xl mb-4 text-white/10 group-hover:text-white/30 transition-all duration-500`}></i>}
                    <h3 className="text-sm md:text-base font-black text-white/60 group-hover:text-white uppercase tracking-[0.3em] text-center px-4 relative z-10 transition-colors">
                        {title}
                    </h3>
                    <div className="absolute bottom-4 text-[7px] md:text-[8px] font-black text-slate-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        CLICK OR HOVER TO REVEAL
                    </div>
                </div>

                {/* Back Side: The Details (Skills Grid) */}
                <div
                    className="absolute inset-0 backface-hidden glass-card flex flex-col p-4 md:p-6 rounded-2xl bg-[#0a0a0b] overflow-hidden shadow-2xl"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        <h4
                            className="text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-6 py-1 opacity-40"
                        >
                            {title}
                        </h4>
                        <div className="flex-1 min-h-0">
                            {children}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const SkillItem = ({ name, icon, color }: { name: string; icon: string; color: string }) => (
    <div className="flex items-center gap-3 group/skill cursor-default py-1">
        <i
            className={`${icon} text-base md:text-xl text-slate-500 group-hover/skill:brightness-125 transition-all`}
            style={{ color: color }}
        ></i>
        <span className="text-[10px] md:text-[11px] font-black text-slate-400 group-hover/skill:text-white uppercase transition-colors tracking-tight truncate">
            {name}
        </span>
    </div>
);

const coreSkills = ["Full Stack Dev", "Software Architecture", "System Optimization", "Problem Solving", "Web Dev", "UI/UX Engineering"];
const supportingSkills = ["Fast Learner", "Open Source", "Tech-Curious", "Editing", "Photography"];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
};

const swipeTransition = { duration: 0.6, ease: "easeOut" };

export const Skills = () => {
    return (
        <section id="skills" className="snap-section px-4 py-8 relative overflow-hidden flex flex-col justify-center bg-transparent">
            <div className="container max-w-7xl mx-auto relative z-10 flex flex-col h-full max-h-[88vh] min-h-0 pt-2 lg:pt-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-end justify-between mb-4"
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none">
                            EXPERTISE <span className="text-gradient">& STACK</span>
                        </h2>
                        <p className="text-slate-500 text-[9px] md:text-[10px] font-bold tracking-[0.2em] mt-1 uppercase">interactive technology landscape</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-[auto_1fr_1fr] gap-3 lg:gap-4 flex-1 min-h-0"
                >
                    {/* 1. Programming Languages */}
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-3">
                        <SectionFlipCard title="Languages" color="#00f2fe" frontIcon="fa-solid fa-code">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                                {technicalStack[0].skills.map((skill, i) => (
                                    <SkillItem key={i} {...skill} />
                                ))}
                            </div>
                        </SectionFlipCard>
                    </motion.div>

                    {/* 2. Core Competencies */}
                    <motion.div variants={itemVariants} className="md:col-span-3 md:row-span-1">
                        <SectionFlipCard title="Systems" color="#00f2fe" frontIcon="fa-solid fa-brain">
                            <div className="flex flex-wrap gap-2">
                                {coreSkills.map((skill, i) => (
                                    <span key={i} className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/5 text-[10px] font-black uppercase text-slate-400 hover:text-white hover:border-primary/40 transition-all tracking-widest cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </SectionFlipCard>
                    </motion.div>

                    {/* 3. Aptitudes */}
                    <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
                        <SectionFlipCard title="Soft Skills" color="#4facfe" frontIcon="fa-solid fa-bolt">
                            <div className="flex flex-col gap-3 text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">
                                {supportingSkills.map((s, i) => (
                                    <span key={i} className="hover:text-white transition-colors cursor-default flex items-center gap-2">
                                        <span className="w-1 h-1 bg-secondary rounded-full"></span>
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </SectionFlipCard>
                    </motion.div>

                    {/* 4. Engines */}
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1">
                        <SectionFlipCard title="Frameworks" color="#4facfe" frontIcon="fa-solid fa-layer-group">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                {technicalStack[1].skills.map((skill, i) => (
                                    <SkillItem key={i} {...skill} />
                                ))}
                            </div>
                        </SectionFlipCard>
                    </motion.div>

                    {/* 5. Core Tools */}
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1">
                        <SectionFlipCard title="Power Tools" color="#ffffff" frontIcon="fa-solid fa-wrench">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                {technicalStack[2].skills.slice(0, 8).map((skill, i) => (
                                    <SkillItem key={i} {...skill} />
                                ))}
                            </div>
                        </SectionFlipCard>
                    </motion.div>

                    {/* 6. Utility */}
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1">
                        <SectionFlipCard title="Automation" color="#ffffff" frontIcon="fa-solid fa-screwdriver-wrench">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                {technicalStack[2].skills.slice(8).map((skill, i) => (
                                    <SkillItem key={i} {...skill} />
                                ))}
                            </div>
                        </SectionFlipCard>
                    </motion.div>

                    {/* 7. Data Labs */}
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1">
                        <SectionFlipCard title="Persistence" color="#ff007a" frontIcon="fa-solid fa-database">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                {technicalStack[3].skills.map((skill, i) => (
                                    <SkillItem key={i} {...skill} />
                                ))}
                            </div>
                        </SectionFlipCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
