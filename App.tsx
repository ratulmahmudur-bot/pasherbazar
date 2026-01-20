
import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import TrustSignals from './components/TrustSignals';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import { Product, CartItem, View } from './types';
import { Icons } from './constants';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = useCallback((view: View) => {
    setCurrentView(view);
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <TrustSignals />
            <ProductSection onAddToCart={handleAddToCart} onProductClick={handleProductClick} searchTerm={searchTerm} />
            <Benefits />
            <Testimonials />
            <BrandStory />
          </>
        );
      case 'shop':
        return (
          <div className="pt-8">
            <ProductSection onAddToCart={handleAddToCart} onProductClick={handleProductClick} searchTerm={searchTerm} />
          </div>
        );
      case 'story':
        return (
          <div className="pt-8">
            <BrandStory />
            <div className="max-w-7xl mx-auto px-4 py-24 text-center">
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-oak-900 mb-8">Our Sourcing Standards</h3>
              <p className="max-w-4xl mx-auto text-oak-500 text-lg lg:text-xl leading-relaxed mb-16 px-4">
                We believe in full transparency. Every jar of Pasherbazar is traceable back to its source. 
                We visit our beekeepers quarterly to ensure they maintain hive health without chemical interventions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {/* Purity First Card */}
                <div className="bg-oak-100/50 p-6 rounded-[2.5rem] transition-all hover:translate-y-[-4px]">
                  <div className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col items-center h-full">
                    <div className="text-5xl mb-6">🍯</div>
                    <h4 className="text-xl font-bold text-oak-900 mb-3">Purity First</h4>
                    <p className="text-oak-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                      Unfiltered, unheated, and never mixed with syrups or fillers.
                    </p>
                  </div>
                </div>

                {/* Direct Trade Card */}
                <div className="bg-oak-100/50 p-6 rounded-[2.5rem] transition-all hover:translate-y-[-4px]">
                  <div className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col items-center h-full">
                    <div className="text-5xl mb-6">🌰</div>
                    <h4 className="text-xl font-bold text-oak-900 mb-3">Direct Trade</h4>
                    <p className="text-oak-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                      Working directly with farmers to ensure fair wages and sustainable harvests.
                    </p>
                  </div>
                </div>

                {/* Triple-Tested Card */}
                <div className="bg-oak-100/50 p-6 rounded-[2.5rem] transition-all hover:translate-y-[-4px]">
                  <div className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col items-center h-full">
                    <div className="text-5xl mb-6">🛡️</div>
                    <h4 className="text-xl font-bold text-oak-900 mb-3">Triple-Tested</h4>
                    <p className="text-oak-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                      Every batch is tested for moisture, pollen, and chemical residues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'benefits':
        return (
          <div className="pt-8">
            <Benefits />
            <div className="bg-oak-900 py-20 text-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h3 className="text-3xl font-serif font-bold mb-4">Why unpasteurized honey?</h3>
                  <p className="text-oak-300">The heat used in commercial honey kills the very thing that makes honey a superfood.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <h4 className="text-honey-400 font-bold mb-4 uppercase tracking-widest">Enzyme Integrity</h4>
                    <p className="text-lg text-oak-100 leading-relaxed mb-6">
                      Heating honey above 45°C destroys delicate enzymes like diastase and glucose oxidase. These enzymes are vital for honey's antimicrobial and digestive benefits.
                    </p>
                    <h4 className="text-honey-400 font-bold mb-4 uppercase tracking-widest">Natural Pollen</h4>
                    <p className="text-lg text-oak-100 leading-relaxed">
                      Commercial filtering removes local pollen. Keeping it in helps your body build natural seasonal resilience.
                    </p>
                  </div>
                  <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
                    <h4 className="text-2xl font-serif font-bold mb-6">Nutritional Comparison</h4>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="text-oak-300">Antioxidant Level</span>
                        <span className="font-bold text-honey-400">High (100%)</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="text-oak-300">Live Enzymes</span>
                        <span className="font-bold text-honey-400">Active</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="text-oak-300">Mineral Density</span>
                        <span className="font-bold text-honey-400">Full Spectrum</span>
                      </div>
                      <div className="flex justify-center pt-4">
                        <button 
                          onClick={() => handleNavigate('shop')}
                          className="px-8 py-3 bg-honey-600 rounded-full font-bold hover:bg-honey-700 transition-colors"
                        >
                          Shop the Superfood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={handleAddToCart} 
            onBack={() => handleNavigate('shop')} 
          />
        ) : (
          <div className="h-screen flex items-center justify-center">
            <button onClick={() => handleNavigate('shop')} className="text-honey-600 font-bold">Return to shop</button>
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        cartCount={cartCount} 
        currentView={currentView}
        onNavigate={handleNavigate}
        onSearch={setSearchTerm} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        {renderView()}
        
        {/* Promotion Banner - only show on certain pages or at bottom */}
        <div className="bg-honey-500 py-4 text-white font-bold text-center px-4">
          <p className="flex items-center justify-center space-x-2">
            <span className="text-lg">🐝</span>
            <span>Neighborhood Special: Free Shipping on orders over $50! Use code <strong>PASHERBAZAR50</strong></span>
          </p>
        </div>
      </main>

      <Footer />

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
            <div className="p-6 border-b border-oak-100 flex justify-between items-center">
              <h3 className="text-2xl font-serif font-bold text-oak-900">Your Basket</h3>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-oak-100 rounded-full text-oak-400 hover:text-oak-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length > 0 ? (
                cart.map(item => (
                  <div key={item.id} className="flex space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover bg-oak-50" />
                    <div className="flex-grow">
                      <h4 className="font-bold text-oak-900 text-sm">{item.name}</h4>
                      <p className="text-oak-400 text-xs mb-2">Qty: {item.quantity}</p>
                      <p className="font-bold text-honey-600">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => setCart(prev => prev.filter(i => i.id !== item.id))}
                      className="text-oak-300 hover:text-red-500"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-oak-50 rounded-full flex items-center justify-center mb-4">
                    <Icons.Cart />
                  </div>
                  <h4 className="text-oak-900 font-bold mb-2">Basket is empty</h4>
                  <p className="text-oak-400 text-sm mb-6">Start adding neighborhood goodness to your basket.</p>
                  <button 
                    onClick={() => {setIsCartOpen(false); handleNavigate('shop');}}
                    className="bg-honey-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-honey-700 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-oak-100 bg-oak-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-oak-600">Subtotal</span>
                  <span className="text-2xl font-serif font-bold text-oak-900">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-oak-400 mb-6">Shipping calculated at checkout. Trusted delivery across the neighborhood.</p>
                <button className="w-full bg-honey-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-honey-700 transition-all shadow-lg hover:shadow-xl">
                  Proceed to Checkout
                </button>
                <div className="flex justify-center mt-4 space-x-2 grayscale opacity-50">
                   <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6" alt="Visa" />
                   <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-6" alt="Mastercard" />
                   <img src="https://img.icons8.com/color/48/000000/paypal.png" className="h-6" alt="Paypal" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
