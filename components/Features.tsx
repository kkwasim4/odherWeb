import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all bg-white group hover:-translate-y-1">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Fast Global Payments",
      desc: "Instant peer-to-peer settlements across borders. No waiting for bank processing cycles or middleman approvals.",
      icon: "⚡"
    },
    {
      title: "Optimized Efficiency",
      desc: "Built on ultra-low-fee infrastructure designed to make digital micro-payments sustainable and accessible.",
      icon: "💎"
    },
    {
      title: "Military-Grade Security",
      desc: "Leveraging cutting-edge cryptographic proofs to ensure your assets are protected by the laws of mathematics.",
      icon: "🛡️"
    },
    {
      title: "Fair Governance",
      desc: "A system governed by its users. $ODR holders decide the future roadmap through transparent on-chain voting.",
      icon: "🏛️"
    },
    {
      title: "Inclusion First",
      desc: "Designed to provide financial infrastructure for the unbanked, requiring nothing but a smartphone to participate.",
      icon: "🌍"
    },
    {
      title: "Eco-Conscious Build",
      desc: "Our sustainable consensus mechanism ensures minimal environmental impact compared to legacy blockchains.",
      icon: "🌱"
    }
  ];

  return (
    <section id="innovation" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Ecosystem Highlights</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-4">Innovation in every block</h2>
          <p className="text-slate-500 max-w-2xl leading-relaxed">Odher combines classic financial principles with modern decentralized technology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} desc={f.desc} icon={f.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;