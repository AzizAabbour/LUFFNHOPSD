import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#youtube' },
  { label: 'Reels', href: '#instagram' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 2.5 }
    );
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(menuRef.current, {
        height: '100vh',
        opacity: 1,
        duration: 0.6,
        ease: 'expo.out',
      });
      gsap.fromTo(
        '.mobile-link',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );
    } else {
      document.body.style.overflow = 'unset';
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'expo.in',
      });
    }
  }, [mobileOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{ opacity: 0 }}
    >
      <div className="nav-container">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 relative z-110">
          <img
            src={`${import.meta.env.BASE_URL}logo/m-logo-whaite.png`}
            alt="Ali Logo"
            style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/212777645270"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <Cross1Icon width={24} height={24} />
          ) : (
            <HamburgerMenuIcon width={24} height={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="mobile-menu"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="mobile-link"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/212777645270"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn"
          style={{ fontSize: '1.25rem', padding: '16px 48px' }}
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
