import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="snap-section px-6 relative">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                            Let&apos;s Build <br />
                            <span className="text-gradient">Something Iconic</span>
                        </h2>
                        <p className="text-slate-400 text-sm mb-8 max-w-sm">
                            I&apos;m currently open for new projects and collaborations. If you have any idea, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                                    <a href="mailto:fathummubin26@gmail.com" className="text-base font-semibold hover:text-primary transition-colors">fathummubin26@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">WhatsApp</p>
                                    <a href="https://wa.me/8801302910017" className="text-base font-semibold hover:text-secondary transition-colors">+880 1302 910017</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                                    <p className="text-base font-semibold">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Sub-section */}
                        <div className="mt-8 pt-4">
                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">Social Connect</p>
                            <div className="flex flex-wrap gap-2.5">
                                <a href="https://github.com/mubin25s" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300"><i className="fa-brands fa-github text-lg"></i></a>
                                <a href="https://linkedin.com/in/fathum-mubin-090937280" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300"><i className="fa-brands fa-linkedin text-lg"></i></a>
                                <a href="https://www.reddit.com/u/mubin25s/s/HFGmFrHUkV" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300"><i className="fa-brands fa-reddit text-lg"></i></a>
                                <a href="https://x.com/FathumMubin26" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300"><i className="fa-brands fa-x-twitter text-lg"></i></a>
                                <a href="https://discord.com/users/mubin.26" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300"><i className="fa-brands fa-discord text-lg"></i></a>
                                <a href="https://www.instagram.com/fathum.mubin.26" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300"><i className="fa-brands fa-instagram text-lg"></i></a>
                                <a href="https://www.facebook.com/share/14RTXWtMn8Y/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300"><i className="fa-brands fa-facebook text-lg"></i></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Your Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase">Message</label>
                                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button className="btn-primary w-full flex items-center justify-center gap-2 py-2.5 text-sm">
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="absolute bottom-4 left-0 w-full text-center text-slate-500 text-[10px]">
                <div className="container px-6">
                    <p>&copy; {new Date().getFullYear()} K. M. Fathum Mubin Sachcha. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};
