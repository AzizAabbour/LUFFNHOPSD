import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          {/* Logo & tagline */}
          <div className="footer-logo-area">
            <img
              src={`${import.meta.env.BASE_URL}logo/m-logo-whaite.png`}
              alt="Ali Logo"
              style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
            />
            <p className="footer-description">
              Crafting thumbnails that convert viewers into subscribers.
            </p>
          </div>

          {/* Social */}
          <div className="social-icons">
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

        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} LUFFNHOPSD - All rights reserved -{' '}By{' '}{' '}  
            <a
              href="https://www.instagram.com/creolabweb?igsh=MXF4eXV3Nmg2NnRweA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#a32388',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
            <InstagramLogoIcon width={16} height={16} /> CréoLab-Web 
            </a>
            
          </p>
        </div>
      </div>
    </footer>
  );
}
