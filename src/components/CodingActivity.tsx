import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

export const CodingActivity = () => {
    // Theme matching the deep burgundy colors from index.css
    const explicitTheme = {
        light: ['#e5e5e5', '#fca5a5', '#ef4444', '#b91c1c', '#80011f'],
        dark: ['#2a2a2a', '#5c0016', '#80011f', '#b3002b', '#e60037'],
    };

    return (
        <section id="activity" className="snap-section px-6 relative flex-col justify-center">
            <div className="container max-w-5xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 w-full"
                >
                    <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">
                        Coding <span className="text-gradient">Activity</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 md:p-10 relative overflow-hidden flex justify-center items-center w-full max-w-4xl"
                >
                    {/* Decorative Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-primary/10 blur-[100px] -z-10 rounded-full"></div>

                    <div className="overflow-x-auto text-slate-400 w-full flex justify-center">
                        <GitHubCalendar
                            username="mubin25s"
                            colorScheme="dark"
                            theme={explicitTheme}
                            blockSize={14}
                            blockMargin={4}
                            fontSize={12}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
