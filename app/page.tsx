import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
// import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <main id="main-content" className="min-h-screen" role="main">
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
