import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhitePaper from './components/WhitePaper';
import Authors from './components/Authors';
import LegalDisclaimer from './components/LegalDisclaimer';
import GettingStarted from './components/GettingStarted';
import FAQ from './components/FAQ';
import ContractAddress from './components/ContractAddress';
import ContractsPage from './components/ContractsPage';
import ParticleNetwork from './components/ParticleNetwork';

type ViewState = 'home' | 'whitepaper' | 'authors' | 'legal' | 'getting-started' | 'contracts' | 'faq';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const renderView = () => {
    switch(view) {
      case 'whitepaper': return <WhitePaper />;
      case 'authors': return <Authors />;
      case 'legal': return <LegalDisclaimer />;
      case 'getting-started': return <GettingStarted />;
      case 'contracts': return <ContractsPage />;
      case 'faq': return <FAQ />;
      default: return (
        <main>
          <Hero />
          
          <section id="about" className="pt-8 md:pt-16 pb-12 w-full px-6 lg:px-20 text-left max-w-7xl mx-auto">
            {/* INTRODUCTORY SUMMARY - ELONGATED FULL WIDTH */}
            <div className="mb-10 w-full">
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                Odher (ODR) is an Ethereum-based value token used for holding and transferring value within an open blockchain economy.
              </p>
            </div>

            {/* DEFINITION SECTION - TIGHTER SPACING */}
            <div className="mb-16 w-full">
              <h2 
                className="text-2xl font-bold text-blue-600 mb-4 underline decoration-blue-600/30 underline-offset-4"
                style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }}
              >
                DEFINITION
              </h2>
              <div className="text-slate-700 leading-tight text-lg md:text-xl space-y-3 max-w-4xl">
                <p className="font-black text-slate-900 text-2xl">Odher is a simple ERC-20 token.</p>
                <div className="space-y-2">
                  <p>It is not backed by institutions, policies, or future plans.<br/>
                  Its behavior is fixed at deployment and enforced by immutable smart contract code.</p>
                  
                  <p>Odher does not claim utility.<br/>
                  It does not optimize adoption.<br/>
                  It does not evolve by governance.</p>
                </div>
                <p className="font-black text-slate-900 pt-1">What Odher is does not change over time.</p>
              </div>
            </div>

            {/* OPEN DIGITAL ECONOMY SECTION - CENTERED & BLUE CARDS WITH CONNECTORS */}
            <div className="mb-8 w-full flex flex-col items-center text-center">
              <h2 
                className="text-2xl font-bold text-blue-600 mb-8 underline decoration-blue-600/30 underline-offset-4"
                style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }}
              >
                OPEN DIGITAL ECONOMY
              </h2>
              <div className="text-slate-700 leading-tight text-lg md:text-xl space-y-8 w-full max-w-6xl">
                <p className="font-black text-slate-900 text-2xl md:text-3xl mb-4">Odher exists within an open digital economy.</p>
                
                {/* Flex container for cards and lines */}
                <div className="flex flex-col md:flex-row items-center justify-between py-2 w-full relative">
                  
                  {/* Card 1: ACCESS */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl border border-blue-400 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/40 cursor-pointer">
                      <p className="text-xs font-black text-blue-200 uppercase tracking-[0.25em] mb-2 group-hover:text-white transition-colors">Access</p>
                      <p className="font-black text-white text-2xl md:text-3xl" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Permissionless</p>
                    </div>
                  </div>

                  {/* Connector 1 - Bright Blue Line */}
                  <div className="flex items-center justify-center w-8 h-12 md:w-16 md:h-auto">
                    <div className="w-[2px] h-full md:w-full md:h-[2px] bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.4)] relative flex items-center justify-center transition-all duration-300">
                      <div className="absolute w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_rgba(96,165,250,1)] border border-blue-200"></div>
                    </div>
                  </div>

                  {/* Card 2: STANDARD */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl border border-blue-400 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/40 cursor-pointer">
                      <p className="text-xs font-black text-blue-200 uppercase tracking-[0.25em] mb-2 group-hover:text-white transition-colors">Standard</p>
                      <p className="font-black text-white text-2xl md:text-3xl" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Public Rules</p>
                    </div>
                  </div>

                  {/* Connector 2 - Bright Blue Line */}
                  <div className="flex items-center justify-center w-8 h-12 md:w-16 md:h-auto">
                    <div className="w-[2px] h-full md:w-full md:h-[2px] bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.4)] relative flex items-center justify-center transition-all duration-300">
                      <div className="absolute w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_rgba(96,165,250,1)] border border-blue-200"></div>
                    </div>
                  </div>

                  {/* Card 3: NATURE */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl border border-blue-400 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/40 cursor-pointer">
                      <p className="text-xs font-black text-blue-200 uppercase tracking-[0.25em] mb-2 group-hover:text-white transition-colors">Nature</p>
                      <p className="font-black text-white text-2xl md:text-3xl" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Deterministic</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-6">
                  <p>No entity assigns value.<br/>
                  No authority maintains relevance.</p>
                  <p className="text-blue-600 italic font-bold text-xl md:text-2xl mt-4">Value, if any, emerges only through voluntary use.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contracts-section" className="relative py-24 md:py-40 bg-gradient-to-b from-blue-600 to-blue-800 overflow-hidden flex flex-col items-center">
            {/* Networking Background Dots & Lines (Static) */}
            <ParticleNetwork />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center mb-32">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                <span style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }} className="font-black">Odher</span> exists. <span className="text-blue-200">It can be held and transferred.</span>
              </h2>
              <p className="mt-6 text-blue-100 text-lg md:text-xl font-light italic opacity-80">
                Use defines relevance.
              </p>
              <ContractAddress />
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full text-left">
              <div className="border-t border-white/20 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Column 1: TOKEN FACTS */}
                <div className="lg:col-span-4 space-y-12">
                  <div>
                    <h3 className="text-blue-200 text-sm font-bold tracking-[0.3em] uppercase mb-8">TOKEN FACTS</h3>
                    <div className="space-y-6">
                      <div>
                        <p className="text-blue-300/60 text-[10px] uppercase tracking-widest mb-1">Network</p>
                        <p className="text-white text-xl font-medium">Ethereum</p>
                      </div>
                      <div>
                        <p className="text-blue-300/60 text-[10px] uppercase tracking-widest mb-1">Standard</p>
                        <p className="text-white text-xl font-medium">ERC-20</p>
                      </div>
                      <div>
                        <p className="text-blue-300/60 text-[10px] uppercase tracking-widest mb-1">Total supply</p>
                        <p className="text-white text-xl font-medium">12,000,000 ODR</p>
                      </div>
                      <div>
                        <p className="text-blue-300/60 text-[10px] uppercase tracking-widest mb-1">Minting</p>
                        <p className="text-white text-xl font-medium">One-time, at deployment</p>
                      </div>
                      <div>
                        <p className="text-blue-300/60 text-[10px] uppercase tracking-widest mb-1">Additional issuance</p>
                        <p className="text-white text-xl font-medium">None</p>
                      </div>
                    </div>
                    <div className="mt-10 p-4 border border-white/10 rounded-xl bg-white/5">
                      <p className="text-blue-100 text-sm italic">Supply is enforced by code.</p>
                    </div>
                  </div>
                </div>

                {/* Column 2: BURN MECHANISM & GOVERNANCE */}
                <div className="lg:col-span-4 space-y-12">
                  <div>
                    <h3 className="text-blue-200 text-sm font-bold tracking-[0.3em] uppercase mb-8">BURN MECHANISM</h3>
                    <div className="space-y-4 text-blue-100 text-sm leading-relaxed">
                      <p className="font-bold text-white text-base">Each transfer applies a token-level burn.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-300 rounded-full"></span> Burn is automatic</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-300 rounded-full"></span> Burn is irreversible</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-300 rounded-full"></span> Burn cannot be disabled or modified</li>
                      </ul>
                      <div className="pt-4 space-y-2">
                        <p>Supply decreases only through use.</p>
                        <p className="text-blue-300/60">There is no schedule. No target. No management.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-blue-200 text-sm font-bold tracking-[0.3em] uppercase mb-8">GOVERNANCE</h3>
                    <div className="space-y-4 text-blue-100 text-sm leading-relaxed">
                      <p className="font-bold text-white text-base">There is no governance.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-300 rounded-full"></span> No voting.</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-300 rounded-full"></span> No monetary policy adjustments.</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-300 rounded-full"></span> No discretionary intervention.</li>
                      </ul>
                      <p className="pt-2 font-bold text-white uppercase tracking-wider text-xs">Token behavior is final.</p>
                    </div>
                  </div>
                </div>

                {/* Column 3: VALUE & STATUS */}
                <div className="lg:col-span-4 space-y-12">
                  <div>
                    <h3 className="text-blue-200 text-sm font-bold tracking-[0.3em] uppercase mb-8">VALUE</h3>
                    <div className="space-y-4 text-blue-100 text-sm leading-relaxed">
                      <p className="font-bold text-white text-base">Odher does not promise value.</p>
                      <ul className="space-y-2">
                        <li>Scarcity is enforced by fixed supply.</li>
                        <li>Predictability is enforced by deterministic execution.</li>
                        <li>Relevance is not enforced at all.</li>
                      </ul>
                      <div className="pt-4 border-t border-white/10 space-y-2">
                        <p>If Odher is used, it matters.</p>
                        <p className="text-blue-300/60">If it is not, nothing compensates for that.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                    <h3 className="text-blue-200 text-xs font-bold tracking-[0.3em] uppercase mb-6">STATUS</h3>
                    <div className="space-y-4 text-blue-50 text-sm leading-relaxed">
                      <p className="font-bold text-white">Odher is deployed code on Ethereum.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 bg-blue-200 rounded-full"></span> It can be held.</li>
                        <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 bg-blue-200 rounded-full"></span> It can be transferred.</li>
                      </ul>
                      <p className="text-xs text-blue-200/70 pt-2">
                        Nothing more is implied. Odher is software.<br/>
                        No guarantees are made.<br/>
                        Participation is voluntary and at your own risk.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onViewChange={(v) => { setView(v); window.scrollTo(0, 0); }} />
      {renderView()}
      <Footer onViewChange={(v) => { setView(v); window.scrollTo(0, 0); }} />
    </div>
  );
};

export default App;