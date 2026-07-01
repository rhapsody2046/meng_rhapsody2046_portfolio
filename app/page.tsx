import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Approach from '@/components/Approach';
import Companies from '@/components/Companies';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <Nav />
      <Hero />
      <Intro />
      <Projects />
      <Approach />
      <Companies />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
