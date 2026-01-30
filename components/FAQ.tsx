import React, { useEffect } from 'react';

const FAQ: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 selection:bg-blue-100">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 border-b border-slate-100 pb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-2 uppercase" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
            FAQ — Odher
          </h1>
          <p className="text-slate-500 mt-4 leading-relaxed">
            This document addresses common questions about Odher. Not all questions are answered exhaustively, and this is intentional. Odher is defined by what exists on-chain, not by narratives outside the deployed code.
          </p>
        </div>

        <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>What is Odher?</h2>
            <div className="space-y-4">
              <p>Odher is an ERC-20 token deployed on the Ethereum network. Its function is limited to holding value (store of value) and transferring value peer-to-peer. No additional utility, yield mechanism, or governance system is attached to the token at this time.</p>
              <p className="font-bold text-slate-900">Odher is an on-chain object with fixed behavior.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>What is the purpose of Odher?</h2>
            <div className="space-y-4">
              <p>Odher has no explicitly promised future purpose. There are no claims that Odher will become a specific solution, platform, or ecosystem.</p>
              <p>If Odher is used, relevance emerges from that use. If it is not used, no internal mechanism enforces relevance.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Does Odher have a roadmap?</h2>
            <div className="space-y-4">
              <p className="text-slate-900 font-black text-2xl">No.</p>
              <p>Odher has no development roadmap, technical milestones, or ecosystem expansion commitments. This document describes the current state of Odher, not future plans.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Will Odher have governance?</h2>
            <p>There is currently no governance of any kind. There are no voting mechanisms, proposals, or token-based control systems. Any potential future changes are not defined in the contract and are not promised in this document.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>What does the ODR token do?</h2>
            <div className="space-y-3">
              <p>The ODR token can:</p>
              <ul className="list-none space-y-2 pl-2">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> be held as on-chain value</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> be transferred directly between Ethereum addresses</li>
              </ul>
              <p>No other functions are guaranteed or programmed.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Why does Odher use the ERC-20 standard?</h2>
            <p>ERC-20 is used for its simplicity and broad compatibility with existing Ethereum infrastructure. Odher does not attempt to introduce new standards or complex token behavior.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>How does Odher’s supply work?</h2>
            <p>The total supply of ODR is fixed and defined at contract deployment. There is no additional minting function after deployment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>What is the 0.21% burn on transfer?</h2>
            <div className="space-y-4">
              <p>Each ODR transfer automatically burns 0.21% of the transferred amount.</p>
              <p>Burned tokens are sent to an irrecoverable address, permanently reducing the circulating supply.</p>
              <p>No party can modify, disable, or bypass this mechanism.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Why does Odher include a burn mechanism?</h2>
            <p>The burn mechanism is implemented as a behavioral property of the token, not as an economic incentive or price appreciation promise. Deflation occurs only through usage. There is no burn schedule, supply target, or active control.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Is Odher intended to replace Bitcoin?</h2>
            <div className="space-y-4">
              <p className="text-slate-900 font-black text-2xl">No.</p>
              <p>Odher does not compete with Bitcoin and does not claim an equivalent role. Bitcoin is unique in its scale and history. Odher exists as an alternative value object within the context of Ethereum.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Why is Odher on Ethereum instead of its own chain?</h2>
            <p>Odher relies on Ethereum for execution and finality. It does not build its own network, validators, or consensus mechanism. All such properties are inherited directly from Ethereum.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Who controls Odher?</h2>
            <div className="space-y-4">
              <p>No entity can alter Odher’s behavior after deployment. The contract is immutable and contains no admin keys, pause functions, or upgrade authorities.</p>
              <p>Control over tokens is determined solely by possession of the corresponding private keys.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Is there a team or treasury allocation?</h2>
            <p>Some on-chain addresses function as multisig and timelock structures for operational and token management purposes. All addresses and transactions can be verified directly on the blockchain. This document does not define or promise future use of those addresses.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Is Odher secure?</h2>
            <p>Odher’s security depends on the security of Ethereum, the correctness of the smart contract code, and user practices in managing private keys. No system is risk-free.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Is Odher an investment?</h2>
            <div className="space-y-4">
              <p className="text-slate-900 font-black text-2xl">No.</p>
              <p>Odher is software deployed as a smart contract. There are no promises of profit, value appreciation, or economic rights. All interactions are voluntary and involve risk.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Is Odher legal?</h2>
            <p>The legal status of Odher depends on the user’s jurisdiction. Odher does not represent equity, debt, or any legal claim against an entity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Why are the whitepaper and FAQ minimal?</h2>
            <p>Because Odher’s behavior is defined by code, not by text. These documents provide context, not an authoritative source of truth.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Where can I verify these claims?</h2>
            <ul className="list-none space-y-2 pl-2">
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> the smart contract on Etherscan</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> on-chain transaction history</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> publicly verifiable burn and multisig addresses</li>
            </ul>
            <p className="mt-4">No material information is hidden outside the blockchain.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>What happens if Odher is not used?</h2>
            <p>Nothing happens. There is no internal mechanism that forces adoption or relevance.</p>
          </section>

          <section className="pt-8 mt-12 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>Summary</h2>
            <div className="space-y-3">
              <p className="text-slate-900 font-bold">Odher exists as code running on Ethereum.</p>
              <p className="text-slate-900">It can be held.</p>
              <p className="text-slate-900">It can be transferred.</p>
              <p className="text-slate-900 font-bold mt-4">Nothing more.</p>
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

export default FAQ;