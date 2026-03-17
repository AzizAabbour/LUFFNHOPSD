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
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Animated Background Orbs */}
      <div
        ref={orb1Ref}
        className="hero-gradient-orb"
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
        className="hero-gradient-orb"
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
        className="hero-gradient-orb"
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
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(163,35,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163,35,136,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Side */}
        <div className="flex flex-col gap-6">
          <div ref={titleRef} style={{ opacity: 0 }} className="max-w-xl">
            <p className="text-sm font-medium text-[#A32388] tracking-widest uppercase mb-4">
              ✦ Creative Designer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Hey, I&apos;m{' '}
              <span className="hero-title-gradient">Ali</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-[#a0a0a0]">
                Thumbnail Designer
              </span>
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="text-base sm:text-lg text-[#a0a0a0] max-w-lg leading-relaxed"
            style={{ opacity: 0 }}
          >
            I craft high-converting YouTube thumbnails & social media visuals that
            grab attention, boost click-through rates, and transform viewers into loyal subscribers.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 items-center" style={{ opacity: 0 }}>
            <a
              href="https://wa.me/212777645270"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn flex items-center gap-2"
            >
              Order Now <ArrowRightIcon width={18} height={18} />
            </a>
            <a
              href="#youtube"
              className="px-8 py-4 rounded-full border border-[rgba(163,35,136,0.3)] text-[#a0a0a0] hover:text-white hover:border-[#A32388] transition-all duration-300 text-sm font-medium"
            >
              View Portfolio
            </a>
          </div>

          <div ref={socialRef} className="flex gap-3 pt-2" style={{ opacity: 0 }}>
            <a
              href="https://x.com/LUFFNHOPSD"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <TwitterLogoIcon width={18} height={18} />
            </a>
            <a
              href="https://www.instagram.com/luffnho.psd/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <InstagramLogoIcon width={18} height={18} />
            </a>
            <a
              href="https://wa.me/212777645270"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <ChatBubbleIcon width={18} height={18} />
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div ref={imageRef} className="flex justify-center lg:justify-end" style={{ opacity: 0 }}>
          <div className="relative">
            {/* Glow ring behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A32388] to-[#c94ab0] opacity-20 blur-3xl scale-110" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[rgba(163,35,136,0.3)] shadow-[0_0_60px_rgba(163,35,136,0.2)]">
              <img
                src="/mypic/m-pfp.jpg"
                alt="Ali - Thumbnail Designer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#A32388] to-[#c94ab0] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              200+ Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
