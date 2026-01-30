import React, { useEffect } from 'react';

const GettingStarted: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 selection:bg-blue-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-100 pb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-2 uppercase" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
            GETTING STARTED
          </h1>
        </div>

        <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
          {/* Basic Interaction Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Basic Interaction
            </h2>
            <div className="space-y-4">
              <p>Odher exists as an ERC-20 token on the Ethereum network.</p>
              <p>
                Interacting with Odher requires a basic understanding of Ethereum wallets, transactions, and private key management. 
                No abstractions or custodial services are provided by the system itself.
              </p>
            </div>
          </section>

          {/* Numbered Steps */}
          <section className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Wallet</h3>
              <div className="space-y-3">
                <p>Use any Ethereum-compatible wallet that supports ERC-20 tokens.</p>
                <p>Control of Odher balances is determined solely by possession of the corresponding private keys.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Acquisition</h3>
              <div className="space-y-3">
                <p>Odher may be acquired through:</p>
                <ul className="list-none space-y-2 pl-2">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> direct peer-to-peer transfer</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> decentralized exchanges operating on Ethereum</li>
                </ul>
                <p>No issuance, rewards, or distribution mechanisms exist beyond what occurs on-chain.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Holding and Transfer</h3>
              <div className="space-y-3">
                <p>Odher can be held in an Ethereum wallet and transferred directly between addresses.</p>
                <p>All transfers are final once confirmed by the network.</p>
              </div>
            </div>
          </section>

          {/* DEX Interaction Section */}
          <section className="pt-12 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              DEX INTERACTION (REFERENCE)
            </h2>
            <p className="mb-8 italic text-slate-500">
              The following outlines a common method for interacting with Odher via a decentralized exchange. This is provided for reference only.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wider text-sm">Requirements</h3>
                <ul className="list-none space-y-2 pl-2">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> an Ethereum-compatible wallet</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> sufficient ETH for transaction fees</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> connection to Ethereum mainnet</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wider text-sm">Example</h3>
                <ul className="list-none space-y-3 pl-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2.5"></span> 
                    <span>access a decentralized exchange interface (e.g. Uniswap)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2.5"></span> 
                    <span>select ETH as input asset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2.5"></span> 
                    <div>
                      <span>specify the Odher contract address:</span>
                      <div className="mt-2 p-3 bg-slate-50 border border-slate-100 rounded-lg font-mono text-sm break-all text-blue-600">
                        0xECC0883d7ED710BB6e0fD792a35329802194B433
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2.5"></span> 
                    <span>submit and confirm the transaction via the wallet</span>
                  </li>
                </ul>
              </div>

              <p className="font-medium text-slate-900">
                Execution and settlement are handled entirely by the Ethereum network.
              </p>
            </div>
          </section>

          {/* Technical Notes Section */}
          <section className="pt-12 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              TECHNICAL NOTES
            </h2>
            <ul className="list-none space-y-3 pl-2 mb-8">
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Blockchain transactions are irreversible</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Always verify contract addresses and network</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Confirmation time depends on network conditions</li>
            </ul>
            <p className="font-black text-slate-900 text-xl border-l-4 border-blue-600 pl-4">
              No guarantees are provided.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;