import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Outer ring follows with delay
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out',
      });

      // Inner dot follows instantly
      gsap.to(dot, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });
    };

    const onMouseDown = () => gsap.to(cursor, { scale: 0.8, duration: 0.2 });
    const onMouseUp = () => gsap.to(cursor, { scale: 1, duration: 0.2 });

    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: 'rgba(163, 35, 136, 0.1)',
        borderColor: '#A32388',
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(163, 35, 136, 0.4)',
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const links = document.querySelectorAll('a, button, .insta-card, .carousel-item');
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[rgba(163,35,136,0.4)] pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ mixBlendMode: 'difference' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-[#A32388] rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
