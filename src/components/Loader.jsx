import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete,
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
    ).to({}, { duration: 1.5 });
  }, [onComplete]);

  return (
    <div ref={containerRef} className="loader-container">
      <img
        ref={logoRef}
        src="/logo/m-logo-whaite.png"
        alt="Logo"
        className="loader-logo"
      />
      <div className="loader-bar-container">
        <div className="loader-bar" />
      </div>
    </div>
  );
}
