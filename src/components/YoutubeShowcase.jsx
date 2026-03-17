import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const row1Images = [
  '/Youtube/redesigne-1.jpg',
  '/Youtube/redesigne-2.jpg',
  '/Youtube/redesigne-3.jpg',
  '/Youtube/redesigne-4.jpg',
  '/Youtube/redesigne-5.jpg',
  '/Youtube/redesigne-6.jpg',
  '/Youtube/redesigne-8.jpg',
  '/Youtube/redesigne-9.jpg',
  '/Youtube/challenge.jpg',
  '/Youtube/hansi.jpg',
  '/Youtube/trump.jpg',
  '/Youtube/thumbnail-gts.jpg',
];

const row2Images = [
  '/Youtube/redesigne-10-v1.jpg',
  '/Youtube/redesigne-10-v2.jpg',
  '/Youtube/redesigne-12.jpg',
  '/Youtube/redesigne-13-.jpg',
  '/Youtube/redesigne-14.jpg',
  '/Youtube/redesigne-basket.jpg',
  '/Youtube/redesigne-blayer.jpg',
  '/Youtube/redesigne-dollar.jpg',
  '/Youtube/redesinge-fort.jpg',
  '/Youtube/the-last-day.jpg',
  '/Youtube/thumbn-trad.jpg',
  '/Youtube/redesigne-7.png',
];

export default function YoutubeShowcase() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const isPaused1 = useRef(false);
  const isPaused2 = useRef(false);
  const anim1 = useRef(null);
  const anim2 = useRef(null);

  useEffect(() => {
    // Section heading reveal
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    // Carousel 1: Right to Left
    const track1 = row1Ref.current;
    if (track1) {
      const totalWidth1 = track1.scrollWidth / 2;
      gsap.set(track1, { x: 0 });
      anim1.current = gsap.to(track1, {
        x: -totalWidth1,
        duration: 50,
        ease: 'none',
        repeat: -1,
      });
    }

    // Carousel 2: Left to Right
    const track2 = row2Ref.current;
    if (track2) {
      const totalWidth2 = track2.scrollWidth / 2;
      gsap.set(track2, { x: -totalWidth2 });
      anim2.current = gsap.to(track2, {
        x: 0,
        duration: 55,
        ease: 'none',
        repeat: -1,
      });
    }

    return () => {
      anim1.current?.kill();
      anim2.current?.kill();
    };
  }, []);

  const handleMouseEnter1 = () => {
    if (!isPaused1.current) {
      isPaused1.current = true;
      gsap.to(anim1.current, { timeScale: 0, duration: 0.5 });
    }
  };
  const handleMouseLeave1 = () => {
    if (isPaused1.current) {
      isPaused1.current = false;
      gsap.to(anim1.current, { timeScale: 1, duration: 0.5 });
    }
  };

  const handleMouseEnter2 = () => {
    if (!isPaused2.current) {
      isPaused2.current = true;
      gsap.to(anim2.current, { timeScale: 0, duration: 0.5 });
    }
  };
  const handleMouseLeave2 = () => {
    if (isPaused2.current) {
      isPaused2.current = false;
      gsap.to(anim2.current, { timeScale: 1, duration: 0.5 });
    }
  };

  const doubledRow1 = [...row1Images, ...row1Images];
  const doubledRow2 = [...row2Images, ...row2Images];

  return (
    <section id="youtube" ref={sectionRef} style={{ overflow: 'hidden' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '600px', height: '600px', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(163,35,136,0.06), transparent)', transform: 'translate(-50%, -50%)' }} />

      <div ref={headingRef} className="container" style={{ opacity: 0 }}>
        <h2 className="section-heading">
          YouTube <span>Thumbnails</span>
        </h2>
        <div className="glow-line" />
        <p className="section-subtitle">
          Eye-catching thumbnails designed to maximize clicks and views
        </p>
      </div>

      <div
        className="carousel-container"
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <div ref={row1Ref} className="carousel-track">
          {doubledRow1.map((img, i) => (
            <div key={i} className="carousel-item">
              <img src={img} alt={`YouTube thumbnail ${i + 1}`} loading="lazy" />
              <div className="carousel-overlay" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="carousel-container"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <div ref={row2Ref} className="carousel-track">
          {doubledRow2.map((img, i) => (
            <div key={i} className="carousel-item">
              <img src={img} alt={`YouTube thumbnail ${i + 1}`} loading="lazy" />
              <div className="carousel-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
