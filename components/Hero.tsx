
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-oak-50 pt-16 pb-20 overflow-hidden lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-honey-100 text-honey-800 text-sm font-semibold tracking-wide uppercase mb-6">
              Pure. Authentic. Local.
            </span>
            <h2 className="text-4xl tracking-tight font-serif font-bold text-oak-900 sm:text-5xl md:text-6xl leading-tight">
              The Best of Nature <br />
              <span className="text-honey-600 italic">From Pasherbazar.</span> <br />
              Raw Honey & Nuts.
            </h2>
            <p className="mt-6 text-base text-oak-600 sm:text-lg lg:text-xl max-w-lg">
              Pasherbazar brings you the most authentic honey-nut infusions, sourced directly from the finest local apiaries and farmers. Taste the purity of home.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#products"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-honey-600 hover:bg-honey-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Shop Our Collection
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-oak-200 text-base font-bold rounded-full text-oak-700 bg-white hover:bg-oak-50 transition-all shadow-sm"
              >
                Our Pure Sourcing
              </a>
            </div>
            
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src={`https://i.pravatar.cc/100?u=${i + 10}`}
                    alt="Customer"
                  />
                ))}
              </div>
              <p className="text-sm text-oak-500 font-medium">
                <span className="text-oak-900 font-bold">12,000+</span> neighborhood families
              </p>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <div className="relative mx-auto w-full lg:max-w-md">
              <div className="relative block w-full bg-white rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <img
                  className="w-full h-auto object-cover"
                  src="https://static-01.daraz.com.bd/p/bb29a2e7cd4e8ea2253cec6cf2a34461.jpg"
                  alt="Pasherbazar Signature Honey Nuts"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-honey-100">
                  <p className="text-xs font-bold text-honey-800 uppercase tracking-widest">Neighborhood Favorite</p>
                  <p className="text-lg font-serif font-bold text-oak-900">Pasherbazar Premium</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-honey-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-oak-800/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
