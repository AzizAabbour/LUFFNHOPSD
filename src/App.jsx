import { useState, useCallback, useEffect } from 'react';
import Lenis from 'lenis';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import YoutubeShowcase from './components/YoutubeShowcase';
import InstagramReels from './components/InstagramReels';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <div
        className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Navbar />
        <Hero />
        <YoutubeShowcase />
        <InstagramReels />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
