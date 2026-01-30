import React, { useEffect } from 'react';

const Authors: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 selection:bg-blue-100">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 border-b border-slate-100 pb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-2 uppercase" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
            AUTHORS
          </h1>
        </div>

        <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
          {/* Origin Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Origin
            </h2>
            <div className="space-y-4">
              <p>
                Odher was authored and deployed by a pseudonymous contributor.
              </p>
              <p>
                No real-world identity, legal entity, or centralized organization is associated with the deployment of the contract.
              </p>
            </div>
          </section>

          {/* Authorship Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Authorship
            </h2>
            <div className="space-y-4">
              <p>
                The author does not act as an operator, maintainer, or governing party.
              </p>
              <p>
                There is no administrative role, upgrade authority, or privileged access embedded in the deployed code.
              </p>
              <p>
                After deployment, the author holds no special control beyond that of any other participant.
              </p>
            </div>
          </section>

          {/* Independence Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Independence
            </h2>
            <div className="space-y-4">
              <p>
                Odher exists independently of its author.
              </p>
              <p>
                Its behavior is defined entirely by immutable smart contract execution on Ethereum.
              </p>
              <p>
                No ongoing stewardship is implied.
              </p>
            </div>
          </section>
          
          <div className="pt-8 mt-8 border-t border-slate-50 text-center">
            <p className="text-slate-900 font-black text-2xl italic" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Use defines relevance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;