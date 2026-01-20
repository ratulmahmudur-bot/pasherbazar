
import React from 'react';
import { Product } from '../types';
import { Icons } from '../constants';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBack }) => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={onBack}
          className="flex items-center text-oak-500 hover:text-honey-600 transition-colors mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Shop
        </button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Gallery */}
          <div className="relative mb-12 lg:mb-0">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-oak-50 border-8 border-white">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.isBestSeller && (
              <span className="absolute top-8 left-8 bg-honey-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                Customer Favorite
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-oak-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <p className="text-3xl font-bold text-honey-600">${product.price}</p>
                <div className="flex items-center border-l border-oak-200 pl-4">
                  <div className="flex space-x-1 mr-2">
                    {[...Array(5)].map((_, i) => <Icons.Star key={i} />)}
                  </div>
                  <span className="text-oak-400 text-sm">(4.9/5 Rating)</span>
                </div>
              </div>
              <p className="text-xl text-oak-600 leading-relaxed mb-8">{product.benefit}</p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3">
                  <span className="bg-oak-100 text-oak-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Weight: {product.weight}</span>
                  <span className="bg-oak-100 text-oak-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Honey: {product.honeyType}</span>
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-honey-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-honey-700 transition-all shadow-xl hover:shadow-2xl active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="border-t border-oak-100 pt-8 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-oak-900 uppercase tracking-widest mb-4">Description</h3>
                <p className="text-oak-600 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-oak-900 uppercase tracking-widest mb-4">Ingredients</h3>
                <ul className="list-disc list-inside text-oak-600 space-y-2">
                  {product.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-oak-900 uppercase tracking-widest mb-4">How to Enjoy</h3>
                <p className="text-oak-600 italic">"{product.usage}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
