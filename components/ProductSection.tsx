
import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../services/mockData';

interface ProductSectionProps {
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  searchTerm: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ onAddToCart, onProductClick, searchTerm }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Premium', 'Health', 'Artisan', 'Gifting'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            p.nutType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            p.honeyType.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeFilter === 'All' || p.category === activeFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeFilter]);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-oak-900 sm:text-4xl mb-4">
            Our Signature Blends
          </h2>
          <p className="text-oak-600 max-w-2xl mx-auto">
            Discover our meticulously crafted combinations of raw honey and nutrient-dense premium nuts. 
            Pure, natural, and never pasteurized.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === cat 
                ? 'bg-honey-600 text-white shadow-md' 
                : 'bg-oak-100 text-oak-600 hover:bg-oak-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="group bg-white border border-oak-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div 
                  className="relative aspect-square overflow-hidden bg-oak-50 cursor-pointer"
                  onClick={() => onProductClick(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isBestSeller && (
                    <span className="absolute top-4 left-4 bg-honey-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Best Seller
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <button className="bg-white/95 text-oak-900 px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 
                      className="text-lg font-serif font-bold text-oak-900 cursor-pointer hover:text-honey-700 transition-colors"
                      onClick={() => onProductClick(product)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-honey-600">${product.price}</p>
                  </div>
                  <p className="text-oak-500 text-sm mb-6 line-clamp-2">
                    {product.benefit}
                  </p>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-oak-800 text-white py-3 rounded-xl font-bold hover:bg-honey-600 transition-all active:scale-95 shadow-md hover:shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-oak-400 text-lg">No products found matching your search.</p>
              <button 
                onClick={() => {setActiveFilter('All');}}
                className="mt-4 text-honey-600 font-bold underline"
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
