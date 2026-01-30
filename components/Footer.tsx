import React, { useState, useEffect } from 'react';

interface FooterProps {
  onViewChange?: (view: 'home' | 'whitepaper' | 'authors' | 'legal' | 'getting-started' | 'faq') => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen: ${e.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const footerLinks = [
    { label: 'Getting started', action: () => onViewChange?.('getting-started') },
    { label: 'Legal disclaimer', action: () => onViewChange?.('legal') },
    { label: 'Authors', action: () => onViewChange?.('authors') },
    { label: 'FAQ — Odher', action: () => onViewChange?.('faq') }
  ];

  const etherLogoUrl = "https://gold-raw-gecko-403.mypinata.cloud/ipfs/bafkreid26dhrj4oqunpcirvrvwg3j7ccjrttlrgkfxwriehy2owwsrljcm";

  return (
    <footer id="community" className="bg-white border-t border-slate-100 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Balanced Navigation Row */}
        <div className="mb-16">
          <nav className="flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-x-12 w-full border-b border-slate-50 pb-12">
            {footerLinks.map((link) => (
              <button 
                key={link.label} 
                onClick={link.action}
                className="text-base text-black font-bold hover:text-blue-600 transition-colors whitespace-nowrap"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Bottom Bar - Social Links and Copyright */}
        <div className="flex flex-col justify-center items-center gap-4 relative">
          <div className="flex items-center gap-6">
            <a 
              href="https://x.com/odher_xyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-blue-600 transition-colors"
              aria-label="Follow Odher on X"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/OdherXyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-blue-600 transition-colors"
              aria-label="View Odher on GitHub"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.103.79 2.222v3.293c0 .317.22.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            {/* Logo Ether - Non-clickable / Static decoration */}
            <div className="flex items-center justify-center h-6 w-6 grayscale opacity-40 select-none">
              <img 
                src={etherLogoUrl} 
                alt="Ether Logo" 
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="text-sm text-slate-400 font-medium">
            © 2025 <span className="font-black text-slate-900" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Odher</span>
          </div>

          {/* Fullscreen Toggle at bottom right */}
          <div className="md:absolute right-0 bottom-0 mt-4 md:mt-0">
            <button 
              onClick={toggleFullscreen}
              className="text-2xl hover:scale-125 transition-transform p-2 focus:outline-none"
              title="Toggle Fullscreen"
            >
              🟦
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;