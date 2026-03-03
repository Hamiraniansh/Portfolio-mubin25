import React, { useState } from 'react';
import { motion } from 'framer-motion';

const technicalStack = [
    {
        title: "Frontend",
        color: "#61DAFB",
        frontIcon: "fa-solid fa-desktop",
        skills: [
            { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
            { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6" },
            { name: "Tailwind", icon: "devicon-tailwindcss-original", color: "#06B6D4" },
            { name: "JS", icon: "devicon-javascript-plain", color: "#F7DF1E" },
            { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26" },
            { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6" }
        ]
    },
    {
        title: "Backend",
        color: "#339933",
        frontIcon: "fa-solid fa-server",
        skills: [
            { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933" },
            { name: "Express.js", icon: "devicon-express-original", color: "#000000" },
            { name: "PHP", icon: "devicon-php-plain", color: "#777BB4" },
            { name: "Java", icon: "devicon-java-plain", color: "#007396" },
            { name: "C++", icon: "devicon-cplusplus-plain", color: "#00599C" },
            { name: "Python", icon: "devicon-python-plain", color: "#3776AB" }
        ]
    },
    {
        title: "Database",
        color: "#47A248",
        frontIcon: "fa-solid fa-database",
        skills: [
            { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248" },
            { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479A1" },
            { name: "Postgres", icon: "devicon-postgresql-plain", color: "#4169E1" },
            { name: "Firebase", icon: "devicon-firebase-plain", color: "#FFCA28" },
            { name: "Supabase", icon: "devicon-supabase-plain", color: "#3ECF8E" }
        ]
    },
    {
        title: "Tools",
        color: "#F05032",
        frontIcon: "fa-solid fa-wrench",
        skills: [
            { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
            { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },
            { name: "GitHub", icon: "devicon-github-original", color: "#FFFFFF" },
            { name: "VS Code", icon: "devicon-vscode-plain", color: "#007ACC" },
            { name: "Postman", icon: "devicon-postman-plain", color: "#FF6C37" },
            { name: "Linux", icon: "devicon-linux-plain", color: "#FCC624" }
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
                    className="absolute inset-0 backface-hidden glass-card flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5"
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
                    className="absolute inset-0 backface-hidden glass-card border-0 flex flex-col p-4 md:p-6 rounded-2xl bg-[#0a0a0b] overflow-hidden shadow-2xl border border-white/5"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        <h4
                            className="text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-4 py-1 opacity-40 border-b border-white/10"
                        >
                            {title}
                        </h4>
                        <div className="flex-1 min-h-0 flex items-center">
                            {children}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const SkillItem = ({ name, icon, color }: { name: string; icon: string; color: string }) => (
    <div className="flex items-center gap-3 group/skill cursor-default py-2 hover:bg-white/5 px-2 rounded-lg transition-colors">
        <i
            className={`${icon} text-lg md:text-2xl text-slate-500 group-hover/skill:brightness-125 transition-all`}
            style={{ color: color }}
        ></i>
        <span className="text-[11px] md:text-xs font-bold text-slate-400 group-hover/skill:text-white transition-colors tracking-tight truncate">
            {name}
        </span>
    </div>
);

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



export const Skills = () => {
    return (
        <section id="skills" className="snap-section px-4 py-20 relative overflow-hidden flex flex-col justify-center bg-transparent min-h-screen">
            <div className="container max-w-7xl mx-auto relative z-10 flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mb-4"></div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl">
                        A focused overview of the technologies and tools I use to build robust, scalable, and modern applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 min-h-[400px]"
                >
                    {technicalStack.map((category, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="col-span-1">
                            <SectionFlipCard
                                title={category.title}
                                color={category.color}
                                frontIcon={category.frontIcon}
                            >
                                <div className="grid grid-cols-1 w-full gap-y-1">
                                    {category.skills.map((skill, i) => (
                                        <SkillItem key={i} {...skill} />
                                    ))}
                                </div>
                            </SectionFlipCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
