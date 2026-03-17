import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CheckCircledIcon,
  RocketIcon,
  LightningBoltIcon,
  StarFilledIcon,
} from '@radix-ui/react-icons';

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    name: 'Standard',
    price: '$$$',
    features: ['1 Thumbnails', '2 Revisions'],
    featured: false,
    btnStyle: 'btn-outline',
    message: encodeURIComponent(
      'Hello, I want to order the Standard Package (5 Thumbnails - $80)'
    ),
    icon: <LightningBoltIcon width={24} height={24} />,
  },
  {
    name: 'Premium',
    price: '$150',
    features: [
      '10 Thumbnails',
      'High Quality Design',
      'Source Files',
      'Fast Delivery',
      '3 Revisions',
    ],
    featured: true,
    btnStyle: 'btn-primary',
    badge: 'Most Popular',
    message: encodeURIComponent(
      'Hello, I want to order the Premium Package (10 Thumbnails - $150)'
    ),
    icon: <StarFilledIcon width={24} height={24} />,
  },
  {
    name: 'Premium Plus',
    price: '$200',
    features: [
      '10 Thumbnails',
      'Version A/B',
      'High Quality Design',
      'Source Files',
      'Fast Delivery',
      'Unlimited Revisions',
    ],
    featured: false,
    btnStyle: 'btn-outline',
    message: encodeURIComponent(
      'Hello, I want to order the Premium Plus Package (10 Thumbnails + A/B Version - $200)'
    ),
    icon: <RocketIcon width={24} height={24} />,
  },
];

export default function Pricing() {
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
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    });
  }, []);

  return (
    <section id="pricing" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(163,35,136,0.06), transparent)' }} />

      <div ref={headingRef} className="container" style={{ opacity: 0 }}>
        <h2 className="section-heading">
          Choose Your <span>Package</span>
        </h2>
        <div className="glow-line" />
        <p className="section-subtitle">
          Premium thumbnail packages tailored for content creators
        </p>
      </div>

      <div className="pricing-grid">
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`pricing-card ${pkg.featured ? 'featured' : ''}`}
            style={{ opacity: 0 }}
          >
            {pkg.badge && (
              <div className="pricing-badge">
                {pkg.badge}
              </div>
            )}

            <div className="pricing-icon">
              {pkg.icon}
            </div>

            <h3 className="pricing-title">{pkg.name}</h3>

            <div className="pricing-price">
              {pkg.price}
              <span>/package</span>
            </div>

            <div className="pricing-divider" />

            <ul className="pricing-features">
              {pkg.features.map((feat) => (
                <li key={feat} className="pricing-feature">
                  <CheckCircledIcon width={16} height={16} />
                  {feat}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/212777645270?text=${pkg.message}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`pricing-btn ${pkg.btnStyle}`}
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
