import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Github, ExternalLink, GitBranch, GitPullRequest, Flame, Trophy } from 'lucide-react';
import axios from 'axios';

export const CodingActivity = () => {
    // Theme matching the deep burgundy colors from index.css
    // Darker base for empty contribution blocks to match site theme
    const explicitTheme = {
        light: ['#e5e5e5', '#fca5a5', '#ef4444', '#b91c1c', '#80011f'],
        dark: ['#2a2a2a', '#5c0016', '#80011f', '#b3002b', '#e60037'],
    };

    const [currentStreak, setCurrentStreak] = useState<number | null>(null);
    const [maxStreak, setMaxStreak] = useState<number | null>(null);
    const [totalContributions, setTotalContributions] = useState<number | null>(null);

    useEffect(() => {
        const fetchStreaks = async () => {
            try {
                // streak-stats.demolab.com mirrors GitHub's own streak calculation exactly
                const response = await axios.get('https://streak-stats.demolab.com/?user=mubin25s&type=json');
                const data = response.data;

                setCurrentStreak(data.currentStreak?.length ?? 0);
                setMaxStreak(data.longestStreak?.length ?? 0);
                setTotalContributions(data.totalContributions ?? 0);
            } catch (error) {
                console.error("Error fetching GitHub streak data:", error);
            }
        };

        fetchStreaks();
    }, []);

    return (
        <section id="activity" className="snap-section px-6 relative flex-col justify-center min-h-screen py-20">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/5 rounded-full blur-[150px]"></div>
            </div>

            <div className="container max-w-5xl mx-auto flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 w-full relative"
                >
                    <h2 className="text-4xl md:text-6xl font-black leading-tight text-white mb-4">
                        Coding <span className="text-gradient">Activity</span>
                    </h2>
                </motion.div>

                <div className="relative w-full">
                    {/* Floating Icons */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -left-6 lg:-left-20 w-16 h-16 glass-card rounded-2xl flex items-center justify-center z-20 border-white/10 hidden md:flex backdrop-blur-xl shadow-xl shadow-black/50"
                    >
                        <GitBranch size={28} className="text-primary" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-10 -right-6 lg:-right-20 w-20 h-20 glass-card rounded-2xl flex items-center justify-center z-20 border-white/10 hidden md:flex backdrop-blur-xl shadow-xl shadow-black/50"
                    >
                        <GitPullRequest size={32} className="text-secondary" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card p-1 relative overflow-hidden flex flex-col justify-center items-center w-full max-w-5xl group border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(128,1,31,0.15)] bg-black/40 backdrop-blur-2xl"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                        {/* Card Header */}
                        <div className="w-full flex flex-wrap justify-between items-center p-6 border-b border-white/5 mb-6 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-500">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">mubin25s</h3>
                                    <p className="text-xs text-slate-400 font-medium mt-0.5">GitHub Contributions & Streaks</p>
                                </div>
                            </div>

                            {/* Streak Stats */}
                            <div className="flex items-center gap-3 flex-wrap">
                                {currentStreak !== null && (
                                    <div className="flex flex-col items-center bg-white/5 border border-orange-400/20 px-4 py-2 rounded-xl">
                                        <span className="flex items-center gap-1.5 text-orange-400 font-black text-xl">
                                            <Flame size={18} className="shrink-0" />{currentStreak}
                                        </span>
                                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-0.5">Current Streak</span>
                                    </div>
                                )}
                                {maxStreak !== null && (
                                    <div className="flex flex-col items-center bg-white/5 border border-yellow-400/20 px-4 py-2 rounded-xl">
                                        <span className="flex items-center gap-1.5 text-yellow-400 font-black text-xl">
                                            <Trophy size={18} className="shrink-0" />{maxStreak}
                                        </span>
                                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-0.5">Longest Streak</span>
                                    </div>
                                )}
                                {totalContributions !== null && (
                                    <div className="flex flex-col items-center bg-white/5 border border-primary/20 px-4 py-2 rounded-xl">
                                        <span className="flex items-center gap-1.5 text-primary font-black text-xl">
                                            {totalContributions.toLocaleString()}
                                        </span>
                                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-0.5">Total Contributions</span>
                                    </div>
                                )}
                                <a
                                    href="https://github.com/mubin25s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors hover:bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20"
                                >
                                    <span className="hidden sm:inline">View Profile</span> <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Calendar Body */}
                        <div className="overflow-x-auto text-slate-300 w-full flex justify-center pb-8 px-4 md:px-8 custom-scrollbar">
                            <div className="min-w-fit">
                                <GitHubCalendar
                                    username="mubin25s"
                                    colorScheme="dark"
                                    theme={explicitTheme}
                                    blockSize={14}
                                    blockMargin={5}
                                    fontSize={14}
                                    blockRadius={3}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    display: block;
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 4px;
                    margin: 0 20px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(128, 1, 31, 0.3);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(128, 1, 31, 0.6);
                }
            `}</style>
        </section>
    );
};
