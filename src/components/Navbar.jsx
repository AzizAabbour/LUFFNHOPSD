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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 2.5 }
    );
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass py-3' : 'py-5'
      }`}
      style={{ opacity: 0 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/logo/m-logo-whaite.png"
            alt="Ali Logo"
            className="h-9 transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm text-[#a0a0a0] hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#A32388] to-[#c94ab0] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://wa.me/212777645270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-6 py-2.5 rounded-full bg-gradient-to-r from-[#A32388] to-[#c94ab0] text-white hover:shadow-[0_5px_25px_rgba(163,35,136,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <Cross1Icon width={22} height={22} /> : <HamburgerMenuIcon width={22} height={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 nav-glass overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm text-[#a0a0a0] hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/212777645270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[#A32388] to-[#c94ab0] text-white text-center"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
