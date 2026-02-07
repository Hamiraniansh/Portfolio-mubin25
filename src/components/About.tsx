import { useState, useMemo } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';

interface CardData {
    id: number;
    title: string;
    content: string;
}

const INITIAL_CARDS: CardData[] = [
    { id: 0, title: 'Welcome!', content: 'Swipe left or right to explore the cards and learn more about me!' },
    { id: 1, title: 'Introduction', content: 'Hello! I am Mubin. Swipe the cards to explore my journey.' },
    { id: 2, title: 'Education', content: 'Currently pursuing a B.Sc. in Software Engineering at Daffodil International University.' },
    { id: 3, title: 'Hobby', content: 'Enjoys exploring computers, editing digital content, and learning new software tools.' },
    { id: 4, title: 'Interests', content: 'Interested in software development, IT systems, and technology-driven problem solving.' },
    { id: 5, title: 'Animal Lover', content: 'Loves animals, enjoys caring for pets.' },
    { id: 6, title: 'Programming Skills', content: 'Actively practices coding in languages like C, Java, and SQL through academic and personal projects.' },
    { id: 7, title: 'Database Enthusiast', content: 'Enjoys designing and implementing database systems, writing complex SQL queries, and managing data structures.' },
    { id: 8, title: 'Problem Solver', content: 'Likes solving data structure and algorithm challenges and building efficient solutions.' },
    { id: 9, title: 'Time Management', content: 'Maintains discipline in balancing academic work, self-learning, and personal projects.' },
    { id: 10, title: 'Continuous Learner', content: 'Always learning new technologies, frameworks, and tools to improve professional skills.' },
    { id: 11, title: 'UI/UX Designer', content: 'Passionately designing user-friendly interfaces and engaging experiences with a focus on aesthetics and functionality.' },
    { id: 12, title: 'Research-Oriented', content: 'Regularly researches new technologies, software trends, and best practices using online resources.' },
    { id: 13, title: 'Life Goal', content: 'Aspires to become a successful software professional with strong technical and practical expertise.' }
];

const Card = ({ data, index, isTop, onSwipe, total }: { data: CardData; index: number; isTop: boolean; onSwipe: (id: number) => void; total: number }) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-18, 18]);
    const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

    const [exitX, setExitX] = useState(0);

    // Random initial position for "flying in" effect
    const randomInitial = useMemo(() => ({
        x: (Math.random() - 0.5) * 4000,
        y: (Math.random() - 0.5) * 4000,
        rotate: (Math.random() - 0.5) * 720
    }), []);

    const handleDragEnd = (_: any, info: any) => {
        if (!isTop) return;
        const threshold = 100;
        if (info.offset.x > threshold) {
            setExitX(1000);
        } else if (info.offset.x < -threshold) {
            setExitX(-1000);
        }
    };

    // Handle trackpad two-finger swipe
    const handleWheel = (e: React.WheelEvent) => {
        if (!isTop) return;

        // Detect horizontal scroll (two-finger swipe on trackpad)
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            const threshold = 30;

            if (Math.abs(e.deltaX) > threshold) {
                // Animate the card position first
                const direction = e.deltaX > 0 ? -1 : 1;
                x.set(direction * 150);

                // Then trigger exit after a brief delay
                setTimeout(() => {
                    setExitX(direction * 1000);
                }, 100);
            }
        }
    };

    // Get card display value (DUCK, A, 2-10, J, Q, K)
    const getCardValue = (id: number) => {
        if (id === 0) return 'DUCK';
        if (id === 1) return 'A';
        if (id === 11) return 'J';
        if (id === 12) return 'Q';
        if (id === 13) return 'K';
        return String(id);
    };

    const cardValue = getCardValue(data.id);

    return (
        <motion.div
            style={{
                zIndex: index,
                x: isTop ? x : 0,
                rotate: isTop ? rotate : 0,
                opacity: isTop ? opacity : 1 - (total - 1 - index) * 0.05,
                scale: 1 - (total - 1 - index) * 0.05,
                y: (total - 1 - index) * 10,
                aspectRatio: '2.5/3.5'
            }}
            initial={{
                scale: 0,
                opacity: 0,
                x: randomInitial.x,
                y: randomInitial.y,
                rotate: randomInitial.rotate
            }}
            animate={{
                scale: 1 - (total - 1 - index) * 0.05,
                opacity: isTop ? 1 : 1 - (total - 1 - index) * 0.05,
                y: (total - 1 - index) * 10,
                x: exitX,
                rotate: 0 // Animate to 0 rotation (straight)
            }}
            transition={{
                type: "spring",
                stiffness: exitX !== 0 ? 500 : 50, // Fast exit, floaty entry
                damping: exitX !== 0 ? 50 : 20,
                mass: exitX !== 0 ? 0.5 : 1.5,
                delay: exitX !== 0 ? 0 : index * 0.05
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1} // More elastic
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} // Snappy drag release
            onDragEnd={handleDragEnd}
            onAnimationComplete={() => {
                if (exitX !== 0) onSwipe(data.id);
            }}
            onWheel={handleWheel}
            className="absolute top-0 left-0 w-full cursor-grab active:cursor-grabbing origin-bottom group"
        >
            {/* Playing card design */}
            <div className={`relative w-full h-full rounded-2xl shadow-2xl overflow-hidden border-4 ${data.id === 0
                ? 'bg-gradient-to-br from-[#0a0a0a] via-[#2a0a0f] to-[#1a0608] border-[#4a0a14]'
                : 'bg-white border-gray-200'
                }`}>
                {/* Ornate border */}
                <div className={`absolute inset-0 border-4 rounded-2xl ${data.id === 0 ? 'border-[#4a0a14]/30' : 'border-red-600/30'
                    }`}>
                    <div className={`absolute inset-2 border rounded-xl ${data.id === 0 ? 'border-white/10' : 'border-red-500/20'
                        }`} />
                </div>

                {/* Corner decorations - Top Left */}
                <div className="absolute top-4 left-4 flex flex-col items-center">
                    <div className={`font-black leading-none ${data.id === 0
                        ? 'text-white text-xl'
                        : 'text-red-600 text-3xl'
                        }`}>{cardValue}</div>
                    {data.id !== 0 ? (
                        <div className="w-8 h-8 mt-1">
                            <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-sm">
                                <defs>
                                    <linearGradient id={`diamond-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ff1a1a" />
                                        <stop offset="100%" stopColor="#990000" />
                                    </linearGradient>
                                    <linearGradient id={`diamond-shine-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M16 3L23 16L16 29L9 16L16 3Z" fill={`url(#diamond-grad-${index})`} />
                                <path d="M16 3L20 16L16 24L12 16L16 3Z" fill={`url(#diamond-shine-${index})`} />
                            </svg>
                        </div>
                    ) : (
                        <div className="w-7 h-7 mt-1">
                            <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
                                <defs>
                                    <linearGradient id={`star-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffd700" />
                                        <stop offset="100%" stopColor="#b8860b" />
                                    </linearGradient>
                                </defs>
                                <path d="M12 2L14.5 9.5L22 10L16.5 15L18 22L12 18L6 22L7.5 15L2 10L9.5 9.5L12 2Z" fill={`url(#star-grad-${index})`} />
                                <path d="M12 2L14.5 9.5L12 18L7.5 15L12 2Z" fill="white" fillOpacity="0.3" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Corner decorations - Bottom Right */}
                <div className="absolute bottom-4 right-4 flex flex-col items-center rotate-180">
                    <div className={`font-black leading-none ${data.id === 0
                        ? 'text-white text-xl'
                        : 'text-red-600 text-3xl'
                        }`}>{cardValue}</div>
                    {data.id !== 0 ? (
                        <div className="w-8 h-8 mt-1">
                            <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-sm">
                                <use href={`#diamond-def-${index}`} />
                                <path d="M16 3L23 16L16 29L9 16L16 3Z" fill={`url(#diamond-grad-${index})`} />
                                <path d="M16 3L20 16L16 24L12 16L16 3Z" fill={`url(#diamond-shine-${index})`} />
                            </svg>
                        </div>
                    ) : (
                        <div className="w-7 h-7 mt-1">
                            <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
                                <path d="M12 2L14.5 9.5L22 10L16.5 15L18 22L12 18L6 22L7.5 15L2 10L9.5 9.5L12 2Z" fill={`url(#star-grad-${index})`} />
                                <path d="M12 2L14.5 9.5L12 18L7.5 15L12 2Z" fill="white" fillOpacity="0.3" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Center content area */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                    {/* Decorative top flourish */}
                    <div className="mb-6 flex items-center gap-2">
                        <div className={`w-12 h-0.5 bg-gradient-to-r from-transparent ${data.id === 0 ? 'via-yellow-400' : 'via-red-600'
                            } to-transparent opacity-70`} />
                        <div className={`w-3 h-3 rounded-sm rotate-45 transform shadow-sm ${data.id === 0
                            ? 'bg-gradient-to-br from-yellow-300 to-yellow-600'
                            : 'bg-gradient-to-br from-red-500 to-red-800'
                            }`} />
                        <div className={`w-12 h-0.5 bg-gradient-to-l from-transparent ${data.id === 0 ? 'via-yellow-400' : 'via-red-600'
                            } to-transparent opacity-70`} />
                    </div>

                    {/* Title */}
                    <h2 className={`text-2xl md:text-3xl font-black text-center mb-6 leading-tight ${data.id === 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white' : 'text-gray-900'
                        }`}>
                        {data.id === 0 ? (
                            data.title
                        ) : (
                            data.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 0 ? 'text-red-600' : 'text-black'}>
                                    {i > 0 && ' '}
                                    {word}
                                </span>
                            ))
                        )}
                    </h2>

                    {/* Divider */}
                    <div className={`w-16 h-1 rounded-full mb-6 ${data.id === 0 ? 'bg-white/40' : 'bg-red-500/30'
                        }`} />

                    {/* Content */}
                    <p className={`text-center text-sm md:text-base leading-relaxed max-w-xs ${data.id === 0 ? 'text-white/95' : 'text-gray-800'
                        }`}>
                        {data.content}
                    </p>

                    {/* Decorative bottom flourish */}
                    <div className="mt-6 flex items-center gap-2">
                        <div className={`w-12 h-0.5 bg-gradient-to-r from-transparent ${data.id === 0 ? 'via-yellow-400' : 'via-red-600'
                            } to-transparent opacity-70`} />
                        <div className={`w-3 h-3 rounded-sm rotate-45 transform shadow-sm ${data.id === 0
                            ? 'bg-gradient-to-br from-yellow-300 to-yellow-600'
                            : 'bg-gradient-to-br from-red-500 to-red-800'
                            }`} />
                        <div className={`w-12 h-0.5 bg-gradient-to-l from-transparent ${data.id === 0 ? 'via-yellow-400' : 'via-red-600'
                            } to-transparent opacity-70`} />
                    </div>
                </div>

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(128, 1, 31, 0.1) 10px, rgba(128, 1, 31, 0.1) 20px)`
                }} />

                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
        </motion.div>
    );
};

export const About = () => {
    const [cards, setCards] = useState([...INITIAL_CARDS].reverse());

    const handleSwipe = (id: number) => {
        setCards(prev => prev.filter(c => c.id !== id));
    };

    const resetCards = () => {
        setCards([...INITIAL_CARDS].reverse());
    };

    return (
        <section className="min-h-screen relative overflow-hidden flex flex-col">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#0a0a0a]" />



            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="container max-w-4xl mx-auto relative z-10 flex-1 flex flex-col p-8">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 group w-fit">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">Back to Home</span>
                </Link>

                <div className="flex-1 flex flex-col items-center justify-start pt-6 min-h-[400px]">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-center"
                    >
                        More <span className="text-primary">About Me</span>
                    </motion.h1>

                    <div className="relative w-full max-w-xs mx-auto" style={{ height: '420px' }}>
                        <AnimatePresence>
                            {cards.map((card, index) => (
                                <Card
                                    key={card.id}
                                    data={card}
                                    index={index}
                                    total={cards.length}
                                    isTop={index === cards.length - 1}
                                    onSwipe={handleSwipe}
                                />
                            ))}
                        </AnimatePresence>

                        {cards.length === 0 && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute inset-0 rounded-3xl overflow-hidden"
                            >
                                <div className="relative w-full h-full bg-gradient-to-br from-[#0a0a0a] to-[#1a0a0f] rounded-3xl border border-primary/20 backdrop-blur-xl shadow-2xl">
                                    {/* Glossy floating card suits decoration */}
                                    {[...Array(6)].map((_, i) => {
                                        const suitType = i % 4;
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{
                                                    opacity: [0.3, 0.5, 0.3],
                                                    scale: [1, 1.15, 1],
                                                    y: [0, -15, 0]
                                                }}
                                                transition={{
                                                    duration: 6 + i * 1.5,
                                                    repeat: Infinity,
                                                    delay: i * 0.8
                                                }}
                                                className="absolute"
                                                style={{
                                                    left: `${(i * 15) + 8}%`,
                                                    top: `${(i % 3) * 30 + 10}%`,
                                                    width: `${50 + (i * 10)}px`,
                                                    height: `${50 + (i * 10)}px`,
                                                    filter: 'drop-shadow(0 4px 8px rgba(128, 1, 31, 0.3))'
                                                }}
                                            >
                                                <svg viewBox="0 0 64 64" className="w-full h-full">
                                                    <defs>
                                                        <linearGradient id={`glossy-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                                            <stop offset="0%" style={{ stopColor: '#ff002f', stopOpacity: 0.9 }} />
                                                            <stop offset="50%" style={{ stopColor: '#80011f', stopOpacity: 1 }} />
                                                            <stop offset="100%" style={{ stopColor: '#3a0010', stopOpacity: 0.8 }} />
                                                        </linearGradient>
                                                        <radialGradient id={`shine-${i}`} cx="30%" cy="30%">
                                                            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.4 }} />
                                                            <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                                                        </radialGradient>
                                                    </defs>
                                                    {/* Diamond */}
                                                    {suitType === 0 && (
                                                        <>
                                                            <path d="M32 8 L52 32 L32 56 L12 32 Z" fill={`url(#glossy-${i})`} />
                                                            <path d="M32 8 L52 32 L32 56 L12 32 Z" fill={`url(#shine-${i})`} />
                                                            <path d="M32 12 L48 32 L32 52 L16 32 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                                        </>
                                                    )}
                                                    {/* Heart */}
                                                    {suitType === 1 && (
                                                        <>
                                                            <path d="M32 54 C32 54 12 38 12 26 C12 18 18 12 24 12 C28 12 32 16 32 16 C32 16 36 12 40 12 C46 12 52 18 52 26 C52 38 32 54 32 54 Z" fill={`url(#glossy-${i})`} />
                                                            <path d="M32 54 C32 54 12 38 12 26 C12 18 18 12 24 12 C28 12 32 16 32 16 C32 16 36 12 40 12 C46 12 52 18 52 26 C52 38 32 54 32 54 Z" fill={`url(#shine-${i})`} />
                                                            <ellipse cx="24" cy="20" rx="6" ry="5" fill="rgba(255,255,255,0.25)" />
                                                        </>
                                                    )}
                                                    {/* Club */}
                                                    {suitType === 2 && (
                                                        <>
                                                            <circle cx="32" cy="20" r="10" fill={`url(#glossy-${i})`} />
                                                            <circle cx="22" cy="32" r="10" fill={`url(#glossy-${i})`} />
                                                            <circle cx="42" cy="32" r="10" fill={`url(#glossy-${i})`} />
                                                            <path d="M26 36 L38 36 L36 52 L28 52 Z" fill={`url(#glossy-${i})`} />
                                                            <circle cx="32" cy="20" r="10" fill={`url(#shine-${i})`} />
                                                            <circle cx="28" cy="17" r="3" fill="rgba(255,255,255,0.3)" />
                                                        </>
                                                    )}
                                                    {/* Spade */}
                                                    {suitType === 3 && (
                                                        <>
                                                            <path d="M32 12 C32 12 12 28 12 36 C12 44 18 48 24 48 C26 48 28 47 28 47 L28 54 L36 54 L36 47 C36 47 38 48 40 48 C46 48 52 44 52 36 C52 28 32 12 32 12 Z" fill={`url(#glossy-${i})`} />
                                                            <path d="M32 12 C32 12 12 28 12 36 C12 44 18 48 24 48 C26 48 28 47 28 47 L28 54 L36 54 L36 47 C36 47 38 48 40 48 C46 48 52 44 52 36 C52 28 32 12 32 12 Z" fill={`url(#shine-${i})`} />
                                                            <ellipse cx="26" cy="30" rx="5" ry="6" fill="rgba(255,255,255,0.2)" />
                                                        </>
                                                    )}
                                                </svg>
                                            </motion.div>
                                        );
                                    })}

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-3xl md:text-4xl font-black mb-4 text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
                                        >
                                            That's all about me!
                                        </motion.p>

                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-primary text-lg font-semibold mb-10"
                                        >
                                            Thank you for exploring
                                        </motion.p>

                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            onClick={resetCards}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold flex items-center gap-3 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 border border-primary/20"
                                        >
                                            <RotateCcw size={20} />
                                            <span>Start Over</span>
                                        </motion.button>

                                        {/* Decorative corner elements */}
                                        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
                                        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/30 rounded-br-2xl" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
