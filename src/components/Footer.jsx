import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  ChatBubbleIcon,
  ArrowUpIcon,
} from '@radix-ui/react-icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-[rgba(163,35,136,0.1)]">
      <div className="footer-glow" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src="/logo/m-logo-whaite.png"
              alt="Ali Logo"
              className="h-10"
            />
            <p className="text-sm text-[#a0a0a0] max-w-xs text-center md:text-left">
              Crafting thumbnails that convert viewers into subscribers.
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-3">
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

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(163,35,136,0.15)] to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666]">
            © {new Date().getFullYear()} Ali — All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[rgba(163,35,136,0.3)] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#A32388] hover:bg-[rgba(163,35,136,0.1)] transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowUpIcon width={16} height={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
