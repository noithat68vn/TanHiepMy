import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import News from './components/News';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 selection:bg-[#C09F7A] selection:text-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Projects />
      <Process />
      <News />
      <Footer />
    </div>
  );
}
