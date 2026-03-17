import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StarFilledIcon, QuoteIcon } from '@radix-ui/react-icons';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Aziz Aabbour',
    role: 'Full Stack Dev',
    content: "Working with Ali was an absolute pleasure. His design eye is incredible, and the quality of the assets he produced for my projects exceeded all expectations. Highly recommended!",
    stars: 5,
  },
  {
    name: 'Sarah Miller',
    role: 'Lifestyle Vlogger',
    content: "The attention to detail and professional communication is top-notch. He captures my brand's vibe perfectly every single time.",
    stars: 5,
  },
  {
    name: 'David Klein',
    role: 'Business Educator',
    content: "Absolute game changer. Ali knows exactly what makes people click without being clickbaity. A true professional and artist.",
    stars: 5,
  },
];

export default function Reviews() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    });
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="reviews-section">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(163,35,136,0.05), transparent)' }} />

      <div ref={headingRef} className="container" style={{ opacity: 0 }}>
        <h2 className="section-heading">
          Client <span>Reviews</span>
        </h2>
        <div className="glow-line" />
        <p className="section-subtitle">
          Don't just take my word for it—hear what fellow creators have to say
        </p>
      </div>

      <div className="container reviews-grid">
        {reviews.map((review, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="review-card"
            style={{ opacity: 0 }}
          >
            <div className="quote-icon">
              <QuoteIcon width={30} height={30} />
            </div>
            
            <div className="stars">
              {[...Array(review.stars)].map((_, idx) => (
                <StarFilledIcon key={idx} width={18} height={18} />
              ))}
            </div>

            <p className="review-content">"{review.content}"</p>

            <div className="review-footer">
              <div className="review-info">
                <h4 className="review-name">{review.name}</h4>
                <p className="review-role">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
