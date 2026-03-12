import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Github, ExternalLink, GitBranch, GitPullRequest, Flame, Trophy, RefreshCw } from 'lucide-react';
// GitHub contributions API — same source used by react-github-calendar
const GH_CONTRIB_API = 'https://github-contributions-api.jogruber.de/v4';

type ContribDay = { date: string; count: number; level: number };

/** Compute current & longest streak from a chronological list of contribution days */
function computeStreaks(days: ContribDay[]) {
    // Sort ascending just in case
    const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
    const todayStr = new Date().toISOString().slice(0, 10);

    let longest = 0;
    let tempStreak = 0;
    let current = 0;
    let inCurrentStreak = true; // walk backwards from today

    // Longest streak (forward pass)
    for (const day of sorted) {
        if (day.count > 0) {
            tempStreak++;
            if (tempStreak > longest) longest = tempStreak;
        } else {
            tempStreak = 0;
        }
    }

    // Current streak (backward pass from today)
    const reversed = [...sorted].reverse();
    for (const day of reversed) {
        if (day.date > todayStr) continue; // skip future days
        if (day.count > 0 && inCurrentStreak) {
            current++;
        } else {
            inCurrentStreak = false;
            break;
        }
    }

    return { current, longest };
}

// Animated counter hook
function useCountUp(target: number | null, duration = 1800) {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        if (target === null) return;
        const start = performance.now();
        const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [target, duration]);

    return count;
}

// Skeleton for streak box
const StreakBoxSkeleton = ({ color }: { color: 'blue' | 'red' }) => (
    <div className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl border animate-pulse
        ${color === 'blue'
            ? 'bg-blue-500/5 border-blue-500/20'
            : 'bg-red-600/5 border-red-600/20'
        } w-[100px] h-[50px]`}>
        <div className={`h-4 w-6 rounded ${color === 'blue' ? 'bg-blue-500/15' : 'bg-red-600/15'}`} />
        <div className={`h-1.5 w-16 rounded ${color === 'blue' ? 'bg-blue-500/10' : 'bg-red-600/10'}`} />
    </div>
);

const REFRESH_INTERVAL = 300; // 5 minutes in seconds

export const CodingActivity = () => {
    const explicitTheme = {
        light: ['#e5e5e5', '#fca5a5', '#ef4444', '#b91c1c', '#80011f'],
        dark: ['#2a2a2a', '#5c0016', '#80011f', '#b3002b', '#e60037'],
    };

    const [currentStreak, setCurrentStreak] = useState<number | null>(null);
    const [maxStreak, setMaxStreak] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [refreshKey, setRefreshKey] = useState(0);
    const [flashBlue, setFlashBlue] = useState(false);
    const [flashRed, setFlashRed] = useState(false);

    const statsRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(statsRef, { once: true, margin: '-60px' });
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const prevCurrentRef = useRef<number | null>(null);
    const prevMaxRef = useRef<number | null>(null);

    const displayCurrentStreak = isInView ? currentStreak : null;
    const displayMaxStreak = isInView ? maxStreak : null;

    const animatedCurrent = useCountUp(displayCurrentStreak, 1400);
    const animatedMax = useCountUp(displayMaxStreak, 1800);

    const fetchStreaks = async (manual = false) => {
        if (manual) setLoading(true);
        try {
            // Fetch raw contribution data directly from GitHub
            const response = await fetch(`${GH_CONTRIB_API}/mubin25s?y=last`);
            if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
            const data = await response.json();

            const days: ContribDay[] = data.contributions ?? [];
            const { current: newCurrent, longest: newMax } = computeStreaks(days);

            // Flash animation when values change
            if (prevCurrentRef.current !== null && prevCurrentRef.current !== newCurrent) {
                setFlashBlue(true);
                setTimeout(() => setFlashBlue(false), 900);
            }
            if (prevMaxRef.current !== null && prevMaxRef.current !== newMax) {
                setFlashRed(true);
                setTimeout(() => setFlashRed(false), 900);
            }

            prevCurrentRef.current = newCurrent;
            prevMaxRef.current = newMax;

            setCurrentStreak(newCurrent);
            setMaxStreak(newMax);

            // Force Calendar to remount and fetch updated total contributions
            setRefreshKey(k => k + 1);
        } catch (error) {
            console.error('Error fetching GitHub streak data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStreaks();
        intervalRef.current = setInterval(() => fetchStreaks(), REFRESH_INTERVAL * 1000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-10 -left-6 lg:-left-20 w-16 h-16 glass-card rounded-2xl flex items-center justify-center z-20 border-white/10 hidden md:flex backdrop-blur-xl shadow-xl shadow-black/50"
                    >
                        <GitBranch size={28} className="text-primary" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
                        {/* Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                        {/* ── Card Header — single row: identity | streak boxes | controls ── */}
                        <div ref={statsRef} className="w-full flex flex-wrap items-center justify-between gap-4 p-6 border-b border-white/5 mb-6">

                            {/* LEFT — Identity */}
                            <div className="flex items-center gap-4 shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-500">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">mubin25s</h3>
                                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                        <p className="text-xs text-slate-400 font-medium">GitHub Contributions &amp; Streaks</p>

                                        {/* LIVE badge */}
                                        <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-black uppercase tracking-widest border border-emerald-400/30 bg-emerald-400/5 px-1.5 py-0.5 rounded-md">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                                            LIVE
                                        </span>


                                    </div>
                                </div>
                            </div>

                            {/* CENTER — Streak Boxes */}
                            <div className="flex items-center gap-3 flex-1 justify-center flex-nowrap">
                                {/* Current Streak — BLUE */}
                                {loading ? (
                                    <StreakBoxSkeleton color="blue" />
                                ) : (
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`cs-${currentStreak}`}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.35 }}
                                            className={`relative flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-500 overflow-hidden
                                                ${flashBlue
                                                    ? 'bg-blue-500/20 border-blue-400 shadow-[0_0_24px_rgba(59,130,246,0.5)]'
                                                    : 'bg-blue-500/5 border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none rounded-xl" />
                                            <div className="relative w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center shrink-0">
                                                <Flame size={16} className="text-blue-400" />
                                                <span className="absolute inset-0 rounded-lg border border-blue-400/40 animate-ping opacity-40" />
                                            </div>
                                            <div className="relative flex flex-col min-w-[60px]">
                                                <span className="text-xl font-black text-blue-300 tabular-nums leading-none tracking-tight">
                                                    {animatedCurrent}
                                                    <span className="text-blue-400/60 text-xs font-bold ml-1">days</span>
                                                </span>
                                                <span className="text-[9px] text-blue-400/70 uppercase tracking-widest font-bold mt-0.5">Current Streak</span>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                )}

                                {/* Highest Streak — RED */}
                                {loading ? (
                                    <StreakBoxSkeleton color="red" />
                                ) : (
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`ms-${maxStreak}`}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.35, delay: 0.08 }}
                                            className={`relative flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-500 overflow-hidden
                                                ${flashRed
                                                    ? 'bg-red-600/20 border-red-500 shadow-[0_0_24px_rgba(220,38,38,0.5)]'
                                                    : 'bg-red-600/5 border-red-600/30 hover:bg-red-600/10 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]'
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent pointer-events-none rounded-xl" />
                                            <div className="relative w-8 h-8 rounded-lg bg-red-600/15 border border-red-600/25 flex items-center justify-center shrink-0">
                                                <Trophy size={16} className="text-red-400" />
                                                <span className="absolute inset-0 rounded-lg border border-red-500/40 animate-ping opacity-40" />
                                            </div>
                                            <div className="relative flex flex-col min-w-[60px]">
                                                <span className="text-xl font-black text-red-300 tabular-nums leading-none tracking-tight">
                                                    {animatedMax}
                                                    <span className="text-red-400/60 text-xs font-bold ml-1">days</span>
                                                </span>
                                                <span className="text-[9px] text-red-400/70 uppercase tracking-widest font-bold mt-0.5">Highest Streak</span>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                )}
                            </div>

                            {/* RIGHT — Controls */}
                            <div className="flex items-center gap-2 shrink-0">
                                <button
                                    onClick={() => {
                                        if (intervalRef.current) clearInterval(intervalRef.current);
                                        fetchStreaks(true);
                                        intervalRef.current = setInterval(() => fetchStreaks(), REFRESH_INTERVAL * 1000);
                                    }}
                                    disabled={loading}
                                    title="Refresh now"
                                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors hover:bg-white/5 px-3 py-2.5 rounded-xl border border-white/10 hover:border-white/20 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                                </button>

                                <a
                                    href="https://github.com/mubin25s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors hover:bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20"
                                >
                                    <span className="hidden sm:inline">View Profile</span>
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Calendar Body */}
                        <div className="overflow-x-auto text-slate-300 w-full flex justify-center pb-8 px-4 md:px-8 custom-scrollbar">
                            <div className="min-w-fit">
                                <GitHubCalendar
                                    key={refreshKey}
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
