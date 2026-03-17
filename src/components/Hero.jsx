import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  ChatBubbleIcon,
  ArrowRightIcon,
} from '@radix-ui/react-icons';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);
  const imageRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.6 });

    // Animate orbs
    gsap.to(orb1Ref.current, {
      x: 60,
      y: -40,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to(orb2Ref.current, {
      x: -50,
      y: 30,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to(orb3Ref.current, {
      x: 40,
      y: 50,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    tl.fromTo(
      titleRef.current,
      { y: 60, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
      { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        socialRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.4)' },
        '-=0.5'
      );
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero overflow-hidden">
      {/* Animated Background Orbs */}
      <div
        ref={orb1Ref}
        className="hero-orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(163,35,136,0.3), transparent 70%)',
          top: '-10%',
          right: '-10%',
        }}
      />
      <div
        ref={orb2Ref}
        className="hero-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(163,35,136,0.2), transparent 70%)',
          bottom: '0%',
          left: '-5%',
        }}
      />
      <div
        ref={orb3Ref}
        className="hero-orb"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(163,35,136,0.15), transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.03,
          backgroundImage:
            'linear-gradient(rgba(163,35,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163,35,136,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 hero-grid">
        {/* Text Side */}
        <div>
          <div ref={titleRef} style={{ opacity: 0 }}>
            <p className="hero-tag">
              ✦ Creative Designer
            </p>
            <h1 className="hero-title">
              Hey, I&apos;m{' '}
              <span>Ali</span>
              <br />
              <span className="hero-subtitle-text">
                Thumbnail Designer
              </span>
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="hero-description"
            style={{ opacity: 0 }}
          >
            I craft high-converting YouTube thumbnails & social media visuals that
            grab attention, boost click-through rates, and transform viewers into loyal subscribers.
          </p>

          <div ref={ctaRef} className="hero-ctas" style={{ opacity: 0 }}>
            <a
              href="https://wa.me/212777645270"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-main"
            >
              Order Now <ArrowRightIcon width={18} height={18} />
            </a>
            <a
              href="#youtube"
              className="cta-secondary text-center"
            >
              View Portfolio
            </a>
          </div>

          <div ref={socialRef} className="social-icons" style={{ opacity: 0 }}>
            <a
              href="https://x.com/LUFFNHOPSD"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <TwitterLogoIcon width={20} height={20} />
            </a>
            <a
              href="https://www.instagram.com/luffnho.psd/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <InstagramLogoIcon width={20} height={20} />
            </a>
            <a
              href="https://wa.me/212777645270"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <ChatBubbleIcon width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div ref={imageRef} className="hero-img-wrapper" style={{ opacity: 0 }}>
          <div className="hero-img-glow" />
          <img
            src="/mypic/m-pfp.jpg"
            alt="Ali"
            className="hero-img"
          />
          <div className="hero-badge">
            200+ Projects
          </div>
        </div>
      </div>
    </section>
  );
}
