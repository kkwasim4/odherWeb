import React, { useState, useEffect } from 'react';

const ContractsPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solidityCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.31;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title Odher
 * @author ---
 * @notice Core ERC20-based Odher unit with an intrinsic deflation mechanism
 *
 * @dev
 * It is an ERC20-based accounting unit designed with a built-in
 * burn-on-transfer rule to enforce long-term supply reduction.
 *
 * Design characteristics:
 * - Fixed maximum supply, minted once at deployment
 * - No external minting capability
 * - Automatic burn applied to standard transfers
 * - Burn logic implemented by overriding OpenZeppelin's \`_update\` hook
 */
contract Odher is ERC20 {
    /// @notice Maximum supply of Odher units (fixed at deployment)
    uint256 public constant MAX_SUPPLY = 12_000_000 * 1e18;

    /// @notice Burn rate applied on transfers, expressed in basis points (21 = 0.21%)
    uint256 public constant BURN_BPS = 21;

    /// @notice Basis points denominator (10,000 = 100%)
    uint256 public constant BPS_DENOMINATOR = 10_000;

    /**
     * @notice Initializes the Odher system
     * @param vault Address that receives the full initial supply
     *
     * @dev
     * - The entire supply is created once and assigned to \`vault\`
     * - \`vault\` MUST NOT be the zero address
     * - No further supply expansion is possible
     */
    constructor(address vault) ERC20("Odher", "ODR") {
        require(vault != address(0), "ZERO_ADDRESS");
        _mint(vault, MAX_SUPPLY);
    }

    /**
     * @notice Internal state update hook for balance changes
     *
     * @dev
     * Overrides OpenZeppelin ERC20 \`_update\` to introduce
     * a deflationary rule on standard transfers.
     *
     * Rules:
     * - Minting (\`from == address(0)\`) bypasses burn logic
     * - Burning (\`to == address(0)\`) bypasses burn logic
     * - Regular transfers incur an automatic burn
     *
     * @param from Source address
     * @param to Destination address
     * @param amount Amount before burn calculation
     */
    function _update(
        address from,
        address to,
        uint256 amount
    ) internal override {
        // Bypass burn logic for minting and direct burning
        if (from == address(0) || to == address(0)) {
            super._update(from, to, amount);
            return;
        }

        // Calculate the portion to be permanently removed
        uint256 burnAmount = (amount * BURN_BPS) / BPS_DENOMINATOR;

        // Remaining amount delivered to the recipient
        uint256 sendAmount = amount - burnAmount;

        // Permanently remove units from circulation
        if (burnAmount > 0) {
            super._update(from, address(0), burnAmount);
        }

        // Apply the net transfer
        super._update(from, to, sendAmount);
    }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(solidityCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 selection:bg-blue-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-100 pb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-2" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
            Smart Contracts
          </h1>
          <p className="text-xl text-slate-500 italic">The immutable logic of Odher</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={handleCopy}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-lg flex items-center gap-2"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      COPY SOURCE
                    </>
                  )}
                </button>
              </div>
              <div className="bg-slate-950 rounded-2xl p-8 overflow-x-auto shadow-2xl">
                <pre className="text-blue-300 font-mono text-sm leading-relaxed">
                  <code>{solidityCode}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Contract Details</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Language</span>
                  <span className="font-mono font-bold text-slate-900">Solidity 0.8.31</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Framework</span>
                  <span className="font-bold text-slate-900">OpenZeppelin</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Logic</span>
                  <span className="font-bold text-slate-900">Burn-on-Transfer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Minting</span>
                  <span className="font-bold text-red-600">Disabled (Final)</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Key Mechanisms</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 shrink-0 font-bold">1.</span>
                  <p className="text-slate-600 text-sm">
                    <strong>Fixed Supply:</strong> 12 million units are minted at genesis. No additional minting functions exist.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 shrink-0 font-bold">2.</span>
                  <p className="text-slate-600 text-sm">
                    <strong>Intrinsic Burn:</strong> 0.21% of every transfer is automatically sent to the zero address.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 shrink-0 font-bold">3.</span>
                  <p className="text-slate-600 text-sm">
                    <strong>Hook Override:</strong> The code overrides the <code>_update</code> hook to ensure burn enforcement on all state changes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="bg-white border-t border-slate-100 pt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Verification</h2>
          <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed space-y-6">
            <p>
              The source code provided above is the complete definition of the Odher token. It leverages the industry-standard OpenZeppelin library for core ERC-20 functionality, ensuring compatibility with the broader Ethereum ecosystem.
            </p>
            <p>
              By inheriting from <code>ERC20</code> and overriding the <code>_update</code> function, Odher achieves a transparent and immutable deflationary model. The <code>burnAmount</code> is calculated as a fraction of each transaction and permanently removed from circulation before the remaining balance reaches the recipient.
            </p>
            <p className="italic text-slate-400 text-base">
              Disclaimer: Odher is a decentralized asset. Use of the smart contract is voluntary and at your own risk.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContractsPage;