import React, { useEffect } from 'react';

const WhitePaper: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pdfUrl = "https://gateway.pinata.cloud/ipfs/bafkreic7gne5y3ax2drgtedihhdyaowtop6qjrm55bnn6qkb2lnnd6f4di";

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center selection:bg-blue-100">
      <div className="max-w-3xl w-full text-center">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
            White Paper
          </h1>
        </div>

        <div className="flex justify-center">
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95"
            style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
          >
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download White Paper
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;