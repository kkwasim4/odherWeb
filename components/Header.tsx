import React, { useState } from 'react';

interface HeaderProps {
  onViewChange: (view: 'home' | 'whitepaper' | 'authors' | 'legal' | 'getting-started' | 'contracts' | 'faq') => void;
}

const Header: React.FC<HeaderProps> = ({ onViewChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const UNISWAP_URL = "https://app.uniswap.org/#/swap?outputCurrency=0xECC0883d7ED710BB6e0fD792a35329802194B433&chain=mainnet";

  const navItems = [
    { label: 'White Paper', href: '#whitepaper', action: () => onViewChange('whitepaper') },
    { label: 'Etherscan', href: 'https://etherscan.io/address/0xECC0883d7ED710BB6e0fD792a35329802194B433', isExternal: true },
  ];

  const linkStyle = {
    fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif',
  };

  const logoUrl = "https://gold-raw-gecko-403.mypinata.cloud/ipfs/bafkreib3hxxtu7x2g54hwld2e5p5ft7j3vikxw7llzcksl2tdrdzt6lv6i";

  return (
    <header className="fixed w-full top-0 z-50 glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header dipertahankan tetap pipih h-14/h-16 */}
        <div className="flex justify-between items-center h-14 md:h-16 transition-all duration-300">
          <div 
            className="flex items-center gap-0 cursor-pointer group h-full"
            onClick={() => onViewChange('home')}
          >
            {/* Logo diperbesar sesuai permintaan user */}
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <img 
                src={logoUrl} 
                alt="Odher Logo" 
                className="w-full h-full object-contain contrast-[1.05] saturate-[1.1]"
              />
            </div>
            {/* Nama App ditarik mendekat dengan margin negatif agar hampir menyatu */}
            <span 
              className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 leading-none -ml-1.5 md:-ml-2"
              style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }}
            >
              Odher
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : ""}
                  style={linkStyle}
                  onClick={(e) => {
                    if (!item.isExternal) e.preventDefault();
                    if (item.action) item.action();
                    setIsOpen(false);
                  }}
                  className="text-blue-600 hover:text-blue-800 font-black transition-all duration-200 text-[10px] tracking-tight uppercase"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6 h-8">
              <a 
                href={UNISWAP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2 rounded-full font-bold text-[10px] shadow-lg shadow-blue-500/10 whitespace-nowrap"
              >
                Buy $ODR
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <a 
              href={UNISWAP_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-3 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-wider"
            >
              Buy
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 focus:outline-none p-1"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 shadow-xl overflow-hidden animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={linkStyle}
                className="block px-3 py-4 text-blue-600 hover:text-blue-800 font-black border-b border-slate-50 last:border-none text-sm uppercase tracking-wider"
                onClick={(e) => {
                  if (!item.isExternal) e.preventDefault();
                  if (item.action) item.action();
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;