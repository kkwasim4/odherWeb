import React, { useEffect } from 'react';

const LegalDisclaimer: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 selection:bg-blue-100">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 border-b border-slate-100 pb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-2 uppercase" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
            LEGAL DISCLAIMER
          </h1>
        </div>

        <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
          {/* Software Status */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Software Status
            </h2>
            <div className="space-y-4">
              <p>Odher is software deployed as smart contract code on the Ethereum network.</p>
              <p>It is not a financial product, investment vehicle, security, or legal agreement.</p>
              <p>Interaction with the code is voluntary and performed at the user’s own risk.</p>
            </div>
          </section>

          {/* No Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              No Warranties
            </h2>
            <div className="space-y-4">
              <p>The code is provided “as is” and without warranties of any kind, express or implied.</p>
              <p>No guarantees are made regarding correctness, security, availability, or value.</p>
            </div>
          </section>

          {/* Assumption of Risk */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Assumption of Risk
            </h2>
            <div className="space-y-4">
              <p>Use of blockchain systems involves inherent risks, including but not limited to:</p>
              <ul className="list-none space-y-2 pl-2">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> smart contract bugs</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> network congestion or failure</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> transaction irreversibility</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> loss of private keys</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> market volatility</li>
              </ul>
              <p className="pt-4 font-bold text-slate-900">Users are solely responsible for managing their own keys and assets.</p>
              <p>No author, contributor, or associated party accepts liability for any loss or damage arising from interaction with the code.</p>
            </div>
          </section>

          {/* No Advice */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              No Advice
            </h2>
            <div className="space-y-4">
              <p>Nothing presented on this website or in related documentation constitutes financial, legal, or tax advice.</p>
              <p>Users act independently and bear full responsibility for their decisions.</p>
            </div>
          </section>

          {/* Final Statement */}
          <section className="pt-8 mt-12 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Final Statement
            </h2>
            <div className="space-y-3">
              <p className="text-slate-900 font-bold">Odher defines rules, not outcomes.</p>
              <p className="text-slate-900 font-bold">The code executes.</p>
              <p className="text-blue-600 font-black text-2xl mt-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
                Use defines relevance.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer;