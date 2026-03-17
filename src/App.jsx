import { useState, useCallback, useEffect } from 'react';
import Lenis from 'lenis';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import YoutubeShowcase from './components/YoutubeShowcase';
import InstagramReels from './components/InstagramReels';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

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
      <ScrollToTop />
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <div
        className={`app-container ${loading ? 'loading' : 'loaded'}`}
      >
        <Navbar />
        <Hero />
        <YoutubeShowcase />
        <InstagramReels />
        <Features />
        <Pricing />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}
