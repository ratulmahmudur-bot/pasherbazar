
import React from 'react';
import { Icons } from '../constants';

const TrustSignals: React.FC = () => {
  const signals = [
    {
      icon: <Icons.Natural />,
      title: '100% Raw & Natural',
      desc: 'Never heated, never processed. All nutritional enzymes intact.'
    },
    {
      icon: <Icons.Shield />,
      title: 'Lab Tested Quality',
      desc: 'Each batch is tested for purity, pollen count, and moisture levels.'
    },
    {
      icon: <Icons.Heart />,
      title: 'No Added Sugar',
      desc: 'Pure nature without preservatives, fillers, or artificial sweeteners.'
    },
    {
      icon: <Icons.Truck />,
      title: 'Ethically Sourced',
      desc: 'Direct partnerships with artisan beekeepers and organic farmers.'
    }
  ];

  return (
    <section className="bg-oak-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {signals.map((signal, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-honey-400">
                {signal.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{signal.title}</h3>
              <p className="text-oak-300 text-sm leading-relaxed">{signal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
