import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { InstagramLogoIcon } from '@radix-ui/react-icons';

gsap.registerPlugin(ScrollTrigger);

const allImages = [
  '/instagrame/prof-r1.jpg',
  '/instagrame/prof-r2.jpg',
  '/instagrame/prof-r3.jpg-v2.jpg',
  '/instagrame/prof-r4.jpg-v2.jpg',
  '/instagrame/prof-r5.jpg',
  '/instagrame/prof-r6.jpg',
  '/instagrame/prof-r7.jpg',
  '/instagrame/prof-r8.jpg',
  '/instagrame/prof-r9.jpg',
  '/instagrame/prof-r10.jpg',
  '/instagrame/prof-r11.jpg',
  '/instagrame/prof-r12.jpg',
  '/instagrame/prof-r13.jpg',
  '/instagrame/prof-r14.jpg',
  '/instagrame/prof-r15.jpg',
  '/instagrame/prof-r16.jpg',
  '/instagrame/prof-r17.jpg',
  '/instagrame/prof-r19.jpg',
  '/instagrame/prof-r20.jpg',
  '/instagrame/prof-r22.jpg',
  '/instagrame/prof-r23.jpg',
  '/instagrame/prof-r24.jpg',
  '/instagrame/prof-r25.jpg',
  '/instagrame/prof-r26.jpg',
  '/instagrame/prof-r27.jpg',
  '/instagrame/prof-r28.jpg',
  '/instagrame/prof-r29.jpg',
  '/instagrame/prof-r30.jpg',
  '/instagrame/prof-r31.jpg',
  '/instagrame/prof-r32.jpg',
];

// Distribute images into columns evenly
function splitIntoColumns(images, numCols) {
  const cols = Array.from({ length: numCols }, () => []);
  images.forEach((img, i) => {
    cols[i % numCols].push(img);
  });
  return cols;
}

function InstaColumn({ images, index, registerRef }) {
  const colRef = useRef(null);

  useEffect(() => {
    registerRef(index, colRef.current);
  }, [index, registerRef]);

  // Duplicate images for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="insta-col-wrapper">
      <div ref={colRef} className="insta-column">
        {doubled.map((img, imgIdx) => (
          <div key={imgIdx} className="insta-card">
            <img src={img} alt={`Instagram reel ${imgIdx + 1}`} loading="lazy" />
            <div className="insta-overlay">
              <InstagramLogoIcon width={22} height={22} className="text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InstagramReels() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const columnRefs = useRef({});
  const animations = useRef([]);

  const columns = splitIntoColumns(allImages, 6);

  const registerRef = (index, el) => {
    if (el) columnRefs.current[index] = el;
  };

  useEffect(() => {
    // Heading reveal
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

    // Small delay to let images load and measure heights
    const timer = setTimeout(() => {
      Object.entries(columnRefs.current).forEach(([idx, col]) => {
        if (!col) return;
        const index = parseInt(idx);
        const direction = index % 2 === 0 ? -1 : 1;
        const totalScroll = col.scrollHeight / 2;

        if (totalScroll <= 0) return;

        gsap.set(col, { y: direction === -1 ? 0 : -totalScroll });

        const anim = gsap.to(col, {
          y: direction === -1 ? -totalScroll : 0,
          duration: 25 + index * 4,
          ease: 'none',
          repeat: -1,
        });
        animations.current.push(anim);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      animations.current.forEach((a) => a.kill());
    };
  }, []);

  return (
    <section id="instagram" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(163,35,136,0.06), transparent)' }}
      />

      <div ref={headingRef} className="text-center mb-14 px-6" style={{ opacity: 0 }}>
        <h2 className="section-heading">
          Instagram <span>Reels</span>
        </h2>
        <div className="glow-line" />
        <p className="section-subtitle">
          Stunning reel covers & story designs that stop the scroll
        </p>
      </div>

      {/* Grid Container */}
      <div className="insta-grid-container">
        <div className="insta-grid">
          {columns.map((colImages, colIdx) => (
            <InstaColumn
              key={colIdx}
              images={colImages}
              index={colIdx}
              registerRef={registerRef}
            />
          ))}
        </div>

        {/* Top/Bottom gradient fades */}
        <div className="insta-fade-top" />
        <div className="insta-fade-bottom" />
      </div>
    </section>
  );
}
