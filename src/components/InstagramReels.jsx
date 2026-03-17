import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { InstagramLogoIcon } from '@radix-ui/react-icons';

gsap.registerPlugin(ScrollTrigger);

const base = import.meta.env.BASE_URL;

const allImages = [
  `${base}instagrame/prof-r1.jpg`,
  `${base}instagrame/prof-r2.jpg`,
  `${base}instagrame/prof-r3.jpg-v2.jpg`,
  `${base}instagrame/prof-r4.jpg-v2.jpg`,
  `${base}instagrame/prof-r5.jpg`,
  `${base}instagrame/prof-r6.jpg`,
  `${base}instagrame/prof-r7.jpg`,
  `${base}instagrame/prof-r8.jpg`,
  `${base}instagrame/prof-r9.jpg`,
  `${base}instagrame/prof-r10.jpg`,
  `${base}instagrame/prof-r11.jpg`,
  `${base}instagrame/prof-r12.jpg`,
  `${base}instagrame/prof-r13.jpg`,
  `${base}instagrame/prof-r14.jpg`,
  `${base}instagrame/prof-r15.jpg`,
  `${base}instagrame/prof-r16.jpg`,
  `${base}instagrame/prof-r17.jpg`,
  `${base}instagrame/prof-r19.jpg`,
  `${base}instagrame/prof-r20.jpg`,
  `${base}instagrame/prof-r22.jpg`,
  `${base}instagrame/prof-r23.jpg`,
  `${base}instagrame/prof-r24.jpg`,
  `${base}instagrame/prof-r25.jpg`,
  `${base}instagrame/prof-r26.jpg`,
  `${base}instagrame/prof-r27.jpg`,
  `${base}instagrame/prof-r28.jpg`,
  `${base}instagrame/prof-r29.jpg`,
  `${base}instagrame/prof-r30.jpg`,
  `${base}instagrame/prof-r31.jpg`,
  `${base}instagrame/prof-r32.jpg`,
];

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

  const doubled = [...images, ...images];

  return (
    <div className="insta-col-wrapper">
      <div ref={colRef} className="insta-column">
        {doubled.map((img, imgIdx) => (
          <div key={imgIdx} className="insta-card">
            <img src={img} alt={`Instagram reel ${imgIdx + 1}`} loading="lazy" />
            <div className="insta-overlay">
              <InstagramLogoIcon width={24} height={24} style={{ color: 'white' }} />
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
    <section id="instagram" ref={sectionRef} style={{ overflow: 'hidden' }}>
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(163,35,136,0.06), transparent)' }}
      />

      <div ref={headingRef} className="container" style={{ opacity: 0 }}>
        <h2 className="section-heading">
          Instagram <span>Reels</span>
        </h2>
        <div className="glow-line" />
        <p className="section-subtitle">
          Stunning reel covers & story designs that stop the scroll
        </p>
      </div>

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

        <div className="insta-fade-top" />
        <div className="insta-fade-bottom" />
      </div>
    </section>
  );
}
