import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { CanvasBackground } from './components/CanvasBackground';

function App() {
  return (
    <main className="relative z-0">
      <CanvasBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="container px-6">
          <p>&copy; {new Date().getFullYear()} K. M. Fathum Mubin Sachcha. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
