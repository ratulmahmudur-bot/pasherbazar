
import React from 'react';
import { TESTIMONIALS } from '../services/mockData';
import { Icons } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => <Icons.Star key={i} />)}
            </div>
          </div>
          <h2 className="text-3xl font-serif font-bold text-oak-900 sm:text-4xl mb-4">
            Loved by Health Enthusiasts
          </h2>
          <p className="text-oak-600">Join over 10,000+ customers who chose purity over convenience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-oak-50 p-8 rounded-3xl relative">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <svg className="w-12 h-12 text-honey-600" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zm-12 10h4l-2 6h-4l2-6zm12 0h4l-2 6h-4l2-6z" />
                </svg>
              </div>
              <p className="text-oak-700 italic mb-8 relative z-10">"{t.comment}"</p>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-honey-400 mr-4" />
                <div>
                  <h4 className="font-bold text-oak-900">{t.name}</h4>
                  <p className="text-oak-500 text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
