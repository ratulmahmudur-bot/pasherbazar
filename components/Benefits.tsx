
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Natural Energy Boost',
      desc: 'Our raw honey provides an immediate and sustained energy source, perfect for active mornings or pre-workout fuel.',
      icon: '⚡'
    },
    {
      title: 'Immune System Support',
      desc: 'Rich in antioxidants, pollen, and antimicrobial properties that help your body fight off seasonal illnesses naturally.',
      icon: '🛡️'
    },
    {
      title: 'Digestive Wellness',
      desc: 'Natural enzymes in unpasteurized honey act as a prebiotic, promoting healthy gut flora and smooth digestion.',
      icon: '🍃'
    },
    {
      title: 'Heart & Brain Health',
      desc: 'Premium nuts provide essential fatty acids (Omega-3) and Vitamin E, which are crucial for cardiovascular and cognitive function.',
      icon: '🧠'
    },
    {
      title: 'Antioxidant Powerhouse',
      desc: 'A double-dose of antioxidants from both honey and nuts helps neutralize free radicals and combat oxidative stress.',
      icon: '💎'
    },
    {
      title: 'Metabolic Support',
      desc: 'Honey is a better alternative to refined sugar, helping maintain healthier blood glucose levels when consumed in moderation.',
      icon: '📈'
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-oak-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-oak-900 mb-4">Why Pasherbazar?</h2>
          <p className="text-oak-600 max-w-2xl mx-auto text-lg">
            We combine the ancient wisdom of nature with modern nutritional needs to create functional foods that actually taste incredible.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {benefits.map((b, i) => (
              <div key={i} className="flex flex-col items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-honey-100 w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {b.icon}
                </div>
                <h4 className="font-bold text-oak-900 mb-2 text-lg">{b.title}</h4>
                <p className="text-oak-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 lg:mt-0 relative group">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1974&auto=format&fit=crop" 
                alt="Honey dripping over nuts"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oak-900/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white text-2xl font-serif italic mb-2">"Pure goodness in every spoonful."</p>
                <p className="text-honey-300 font-bold uppercase tracking-widest text-xs">Since 2018</p>
              </div>
            </div>
            {/* Floating Trust Badge */}
            <div className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border-2 border-honey-200 hidden xl:block">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-oak-900">Lab Certified</p>
                  <p className="text-xs text-oak-500">100% Traceable Sourcing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
