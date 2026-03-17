import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CursorArrowIcon,
  BarChartIcon,
  LayersIcon,
  TimerIcon,
  TargetIcon,
  ReloadIcon,
} from '@radix-ui/react-icons';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'CTR-Driven Concepts',
    subtitle: 'Increase Profits',
    desc: 'Every design is crafted to grab attention and drive more clicks not just look pretty.',
    icon: <CursorArrowIcon width={24} height={24} />,
  },
  {
    title: 'Performance Analytics',
    subtitle: 'Editable Designs',
    desc: "Track your thumbnail's success with detailed CTR reports and optimization recommendations.",
    icon: <BarChartIcon width={24} height={24} />,
  },
  {
    title: 'A/B Variations',
    subtitle: 'Optimized Versions',
    desc: 'Experiment with multiple variations to discover what truly drives clicks.',
    icon: <LayersIcon width={24} height={24} />,
  },
  {
    title: 'Fast Turnaround',
    subtitle: 'Recognized Design',
    desc: 'Your custom thumbnail, ready within 24 hours. Consistently fast, always reliable.',
    icon: <TimerIcon width={24} height={24} />,
  },
  {
    title: 'Premium Quality Standards',
    subtitle: 'Quick Turnaround',
    desc: 'High resolution, perfect colors, crisp text. Professional quality that scales to any platform.',
    icon: <TargetIcon width={24} height={24} />,
  },
  {
    title: 'Style Consistency',
    subtitle: 'Responsive Identity',
    desc: 'A cohesive visual identity across all thumbnails while keeping every design fresh, distinctive, and engaging.',
    icon: <ReloadIcon width={24} height={24} />,
  },
];

export default function Features() {
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
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    });
  }, []);

  return (
    <section id="features" ref={sectionRef} className="features-section">
      {/* Background decoration matching the image layout */}
      <div className="features-top-bg">
        <div className="features-glow" />
      </div>

      <div ref={headingRef} className="container" style={{ opacity: 0 }}>
        <h2 className="section-heading">
          Fast-Track Your <span>Channel's Success</span>
        </h2>
        <div className="glow-line" />
        <p className="features-subtitle-main">
          You're putting in the work make sure it gets seen. Upgrade your content with thumbnails that attract clicks, grow engagement, and stand out visually.
        </p>
      </div>

      <div className="container features-grid">
        {features.map((feat, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="feature-card"
            style={{ opacity: 0 }}
          >
            <div className="feature-icon-wrapper">
              {feat.icon}
            </div>
            
            <div className="feature-content">
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-subtitle">{feat.subtitle}</p>
              <p className="feature-desc">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
