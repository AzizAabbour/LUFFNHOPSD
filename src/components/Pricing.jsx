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
    price: '$80',
    features: ['5 Thumbnails', 'High Quality Design', 'Source Files', '2 Revisions'],
    featured: false,
    btnStyle: 'pricing-btn-outline',
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
    btnStyle: 'pricing-btn-primary',
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
    btnStyle: 'pricing-btn-outline',
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
    <section id="pricing" ref={sectionRef} className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(163,35,136,0.06), transparent)' }} />

      <div ref={headingRef} className="text-center mb-16 px-6" style={{ opacity: 0 }}>
        <h2 className="section-heading">
          Choose Your <span>Package</span>
        </h2>
        <div className="glow-line" />
        <p className="section-subtitle">
          Premium thumbnail packages tailored for content creators
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`pricing-card flex flex-col ${pkg.featured ? 'featured' : ''}`}
            style={{ opacity: 0 }}
          >
            {/* Badge */}
            {pkg.badge && (
              <div className="absolute top-0 right-6 -translate-y-1/2">
                <div className="bg-gradient-to-r from-[#A32388] to-[#c94ab0] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  {pkg.badge}
                </div>
              </div>
            )}

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(163,35,136,0.2)] to-[rgba(163,35,136,0.05)] flex items-center justify-center text-[#A32388] mb-6">
              {pkg.icon}
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold bg-gradient-to-r from-white to-[#a0a0a0] bg-clip-text text-transparent">
                {pkg.price}
              </span>
              <span className="text-sm text-[#a0a0a0]">/package</span>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[rgba(163,35,136,0.2)] to-transparent mb-6" />

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {pkg.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-[#a0a0a0]">
                  <CheckCircledIcon width={16} height={16} className="text-[#A32388] flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            {/* Button */}
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
