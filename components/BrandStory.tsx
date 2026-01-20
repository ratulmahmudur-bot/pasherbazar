
import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover shadow-lg" alt="Beekeeping" />
                <img src="https://images.unsplash.com/photo-1534346589587-9b51347da779?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl h-64 w-full object-cover shadow-lg" alt="Honey jars" />
              </div>
              <div className="pt-8 space-y-4">
                <img src="https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=2071&auto=format&fit=crop" className="rounded-2xl h-64 w-full object-cover shadow-lg" alt="Farmer hands" />
                <img src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?q=80&w=1974&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover shadow-lg" alt="Nuts" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-honey-600 font-bold uppercase tracking-widest text-sm mb-4">Our Heritage</h2>
            <h3 className="text-4xl font-serif font-bold text-oak-900 mb-8 leading-tight">
              From the "Neighborhood Market" <br />To Your Family Table.
            </h3>
            <div className="space-y-6 text-oak-600 text-lg">
              <p>
                <span className="font-bold text-oak-900">Pasherbazar</span> (meaning 'The Neighborhood Market') was born out of a simple necessity: the search for real, unadulterated food. Our founder, tired of processed syrups masquerading as honey, began visiting local apiaries in search of the real thing.
              </p>
              <p>
                What started as a small community initiative in 2018 quickly grew into a mission. We realized that by combining local, raw honey with carefully roasted premium nuts, we could create a powerhouse of nutrition that bridges the gap between traditional goodness and modern convenience.
              </p>
              <p>
                Today, Pasherbazar stands as a bridge between the farmer and the urban family. Every jar is hand-poured, every nut is inspected, and every batch is a testament to our commitment to <span className="text-honey-700 italic font-serif">Purity Without Compromise.</span>
              </p>
            </div>
            
            <div className="mt-10 flex items-center space-x-8 border-t border-oak-100 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-oak-900">25+</p>
                <p className="text-xs text-oak-400 uppercase tracking-widest font-bold">Local Farms</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-oak-900">100%</p>
                <p className="text-xs text-oak-400 uppercase tracking-widest font-bold">Raw Products</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-oak-900">5yr</p>
                <p className="text-xs text-oak-400 uppercase tracking-widest font-bold">Craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Break */}
      <div className="mt-24 w-full h-[400px] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558583055-d7ac00b1adca?q=80&w=1974&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-80"
          alt="Honey farm landscape" 
        />
        <div className="absolute inset-0 bg-oak-900/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h4 className="text-3xl md:text-5xl font-serif font-bold mb-4 italic">Sustainably Harvested. Ethically Shared.</h4>
            <a href="#products" className="inline-block px-10 py-4 bg-honey-500 hover:bg-honey-600 text-white font-bold rounded-full transition-all shadow-xl">
              Taste the Truth
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
