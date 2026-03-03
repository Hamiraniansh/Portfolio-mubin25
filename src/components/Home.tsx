import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { CodingActivity } from './CodingActivity';
import { Contact } from './Contact';
import { CanvasBackground } from './CanvasBackground';

export const Home = () => {
    return (
        <main className="relative z-0">
            <CanvasBackground />
            <Navbar />
            <Hero />
            <Projects />
            <CodingActivity />
            <Skills />
            <Contact />
        </main>
    );
};
