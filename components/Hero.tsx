import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  
  const texts = [
    "On-chain value. Defined by code.",
    "Hold and transfer value directly on Ethereum.",
    "No intermediaries. No promises.",
    "Digital value, reduced to code.",
    "Odher is held and transferred.",
    "Use defines relevance.",
    "A neutral on-chain value token.",
    "Designed for storing and transferring value peer-to-peer on Ethereum.",
    "Odher exists as on-chain value."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 6000); // 6 seconds for optimal readability
    
    return () => clearInterval(timer);
  }, [currentIndex, texts.length]);

  return (
    <section className="pt-24 md:pt-36 pb-32 hero-gradient relative">
      <div className="max-w-7xl mx-auto text-left relative z-10 px-4 md:px-8">
        {/* Fixed height container for main animated headline */}
        <div className="relative h-[160px] md:h-[200px] lg:h-[240px] overflow-hidden">
          {texts.map((text, index) => {
            const isActive = index === currentIndex;
            const isExiting = index === prevIndex;
            
            let transformClass = "translate-y-[-100%] opacity-0";
            if (isActive) transformClass = "translate-y-0 opacity-100";
            if (isExiting) transformClass = "translate-y-[100%] opacity-0";

            return (
              <div 
                key={index} 
                className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)] flex items-start ${transformClass}`}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-blue-600 tracking-tight leading-[1.1] max-w-4xl" style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }}>
                  {text}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Width Subheadline - Stretches from left to right */}
      <div className="mt-16 md:mt-24 w-full px-6 md:px-12 lg:px-20 relative z-10">
        <div className="border-t border-slate-200/60 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 text-sm md:text-base lg:text-lg font-bold text-slate-500 tracking-tight">
            <span className="whitespace-nowrap">Fixed supply</span>
            <span className="hidden md:inline text-slate-300 text-2xl font-light">•</span>
            <span className="whitespace-nowrap">Deterministic behavior</span>
            <span className="hidden md:inline text-slate-300 text-2xl font-light">•</span>
            <span className="whitespace-nowrap">No governance</span>
            <span className="hidden md:inline text-slate-300 text-2xl font-light">•</span>
            <span className="whitespace-nowrap">No roadmap</span>
          </div>
        </div>
      </div>

      {/* SVG Waves Background */}
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" />
          <use xlinkHref="#gentle-wave" x="48" y="3" />
          <use xlinkHref="#gentle-wave" x="48" y="5" />
          <use xlinkHref="#gentle-wave" x="48" y="7" />
        </g>
      </svg>
    </section>
  );
};

export default Hero;