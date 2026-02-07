import { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
    {
        title: "Grade Calculator",
        description: "A dynamic calculator for computing university course grades and GPAs.",
        link: "https://mubin25s.github.io/Course-Grade-Calculator/X_Calculator/Grade_Calculator/index.html",
        github: "https://github.com/mubin25s/Course-Grade-Calculator",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    },
    {
        title: "Pet Shelter",
        description: "A web application for managing pet adoptions and shelter inventory.",
        link: "https://mfathumsachcha-netizen.github.io/petshelter-Demo/",
        github: "https://github.com/mubin25s/Pet_Shelter",
        image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e"
    },
    {
        title: "Pet Shop",
        description: "A full-featured MERN stack application with real-time chat and order management.",
        link: "https://mfathumsachcha-netizen.github.io/petshop-Demo/",
        github: "https://github.com/mubin25s/Pet_Shop-3",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
    },
    {
        title: "Portfolio",
        description: "Stunning personal portfolio with dark theme, glassmorphism, and interactive animations.",
        link: "https://portfolio-five-silk-97.vercel.app/",
        github: "https://github.com/mubin25s/Portfolio",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
    },
    {
        title: "Library Manager",
        description: "A system for managing library resources efficiently.",
        link: "https://mfathumsachcha-netizen.github.io/library_management-Demo/",
        github: "https://github.com/mubin25s/Library_Management",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
    },
    {
        title: "Sneakers Shop",
        description: "A modern e-commerce platform for premium footwear.",
        link: "https://mubin25s.github.io/Sneakers/",
        github: "https://github.com/mubin25s/Sneakers",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }
];

// Duplicate projects to ensure smooth looping
const displayProjects = [...projects, ...projects, ...projects];

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isWheeling, setIsWheeling] = useState(false);
    const wheelTimeout = useRef<number | null>(null);
    const x = useMotionValue(0);
    const totalWidthRef = useRef<number>(0);

    // Measure width to avoid layout thrashing in animation loop
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                totalWidthRef.current = containerRef.current.scrollWidth;
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Auto-scroll speed
    const speed = -0.5; // Negative for leftward movement

    useAnimationFrame((_, delta) => {
        if (!isDragging && !isWheeling) {
            // Update x based on time delta for consistent speed across refresh rates
            const moveBy = speed * (delta / 16);
            const newX = x.get() + moveBy;
            wrapX(newX);
        }
    });

    const wrapX = (currentX: number) => {
        if (totalWidthRef.current === 0) return;

        const totalWidth = totalWidthRef.current;
        const setWidth = totalWidth / 3;

        // Wrap logic
        if (currentX <= -setWidth) {
            x.set(currentX + setWidth);
        } else if (currentX > 0) {
            x.set(currentX - setWidth);
        } else {
            x.set(currentX);
        }
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            setIsWheeling(true);
            const newX = x.get() - e.deltaX;
            wrapX(newX);

            if (wheelTimeout.current) window.clearTimeout(wheelTimeout.current);
            wheelTimeout.current = window.setTimeout(() => {
                setIsWheeling(false);
            }, 50); // Faster reset
        }
    };

    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => setIsDragging(false);

    return (
        <section id="projects" className="snap-section py-8 overflow-hidden flex flex-col justify-center">
            <div className="container mx-auto mb-8 px-6">
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 tracking-[0.4em] uppercase text-white">
                        SELECTED WORKS
                    </h2>
                </div>
            </div>

            <div
                className="relative flex overflow-hidden cursor-grab active:cursor-grabbing"
                onWheel={handleWheel}
            >
                <motion.div
                    ref={containerRef}
                    className="flex gap-4 md:gap-6 py-4 select-none"
                    style={{ x, willChange: 'transform' }}
                    drag="x"
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    dragElastic={0.02}
                    dragMomentum={true}
                    onUpdate={(latest) => {
                        if (isDragging) {
                            wrapX(latest.x as number);
                        }
                    }}
                >
                    {displayProjects.map((project, index) => (
                        <div
                            key={index}
                            className="relative w-[210px] md:w-[280px] lg:w-[320px] flex-shrink-0 group/card"
                        >
                            <div className="glass-card aspect-[11/16] rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 relative bg-white/[0.08]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-2.5 bg-primary text-black rounded-full font-bold text-xs tracking-wider shadow-2xl opacity-0 scale-90 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300 delay-75"
                                    >
                                        LIVE DEMO
                                    </motion.a>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 scale-90 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300 delay-150"
                                    >
                                        <Github size={18} />
                                    </motion.a>
                                </div>

                                {/* Bottom Info */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>

                                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 pointer-events-none transition-transform duration-500 group-hover/card:-translate-y-2">
                                    <h3 className="text-sm md:text-lg font-black text-white leading-tight mb-1 drop-shadow-lg">
                                        {project.title.toUpperCase()}
                                    </h3>

                                    <p className="text-slate-200 text-xs md:text-sm font-medium h-12 md:h-14 overflow-hidden">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>


        </section>
    );
};
