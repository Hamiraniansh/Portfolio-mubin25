import { motion } from 'framer-motion';

const technicalStack = [
    {
        title: "Programming Languages",
        skills: [
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "Java", icon: "devicon-java-plain" },
            { name: "PHP", icon: "devicon-php-plain" },
            { name: "C", icon: "devicon-c-plain" },
            { name: "C++", icon: "devicon-cplusplus-plain" },
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "Dart", icon: "devicon-dart-plain" },
            { name: "TypeScript", icon: "devicon-typescript-plain" }
        ]
    },
    {
        title: "Frameworks & Tools",
        skills: [
            { name: "React", icon: "devicon-react-original" },
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "Express", icon: "devicon-express-original" },
            { name: "Laravel", icon: "devicon-laravel-original" },
            { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
            { name: "Git", icon: "devicon-git-plain" },
            { name: "Docker", icon: "devicon-docker-plain" },
            { name: "VS Code", icon: "devicon-vscode-plain" }
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "Supabase", icon: "devicon-supabase-plain" },
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
            { name: "Firebase", icon: "devicon-firebase-plain" }
        ]
    }
];

const coreSkills = [
    "Problem Solving",
    "Programming Fundamentals",
    "Web Development",
    "Frontend & UI/UX Designer",
    "Backend & Database Basics",
    "Git & Version Control",
    "Project Structuring"
];

const supportingSkills = [
    "Linux (Ubuntu, Kali, Arch)",
    "Open Source",
    "Fast Learner, Tech-Curious",
    "Editing & Clarity",
    "Photography"
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container max-w-7xl mx-auto relative z-10">

                {/* Section 1: Conceptual Skills (From Image) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-32">
                    {/* Core Skills Column */}
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-12 group">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Core Skills</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#7000ff] rounded-full mx-auto relative overflow-hidden">
                                <motion.div
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-white/30"
                                />
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-full p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 shadow-[0_0_50px_-12px_rgba(0,242,254,0.05)] hover:border-[#00f2fe]/20 transition-colors duration-500"
                        >
                            <div className="flex flex-wrap justify-center gap-3">
                                {coreSkills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05, borderColor: 'rgba(0,242,254,0.3)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                                        className="px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/5 text-slate-400 text-sm font-medium transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Supporting Skills Column */}
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Supporting Skills</h2>
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-24 h-1 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#7000ff] rounded-full relative overflow-hidden">
                                    <motion.div
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-white/30"
                                    />
                                </div>
                                <div className="w-3 h-3 rounded-full bg-[#00f2fe] shadow-[0_0_15px_#00f2fe] animate-pulse"></div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-full p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 shadow-[0_0_50px_-12px_rgba(0,242,254,0.05)] hover:border-[#00f2fe]/20 transition-colors duration-500"
                        >
                            <div className="flex flex-wrap justify-center gap-3">
                                {supportingSkills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05, borderColor: 'rgba(0,242,254,0.3)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                                        className="px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/5 text-slate-400 text-sm font-medium transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Section 2: Technical Arsenal (Original Categories) */}
                <div className="text-center mb-20 pt-10 border-t border-white/5">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-4 text-white"
                    >
                        Tech <span className="text-gradient">Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400"
                    >
                        Specific technologies I use to build robust and scalable digital products.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {technicalStack.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#00f2fe]/30 transition-all duration-500 backdrop-blur-2xl group"
                        >
                            <h3 className="text-2xl font-bold mb-10 text-[#00f2fe] tracking-tight group-hover:scale-105 transition-transform origin-left">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {cat.skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-[#00f2fe]/20 transition-all duration-300 shadow-lg shadow-black/20"
                                    >
                                        <i className={`${skill.icon} text-2xl`}></i>
                                        <span className="text-sm font-semibold tracking-wide">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
