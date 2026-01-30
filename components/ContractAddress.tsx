import React, { useState } from 'react';

const ContractAddress: React.FC = () => {
  const address = "0xECC0883d7ED710BB6e0fD792a35329802194B433";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-12 flex flex-col items-center group">
      <div className="relative overflow-hidden bg-black border border-slate-800 p-2 md:p-3 pl-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-4 transition-all duration-300 hover:border-blue-500/50">
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex flex-col items-start">
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-1">Contract Address</span>
          <code 
            className="text-sm md:text-xl lg:text-2xl text-white tracking-tight break-all leading-none"
            style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }}
          >
            {address}
          </code>
        </div>
        
        <button 
          onClick={handleCopy}
          className={`relative ml-auto flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg ${
            copied 
              ? 'bg-green-600 text-white' 
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              COPIED
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              COPY
            </>
          )}
        </button>
      </div>
      
      <p className="mt-4 text-slate-400 text-xs font-medium tracking-wide uppercase opacity-60">
        Ethereum Mainnet • Standard ERC-20
      </p>
    </div>
  );
};

export default ContractAddress;