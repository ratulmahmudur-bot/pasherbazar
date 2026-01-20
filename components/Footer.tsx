
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-oak-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-oak-900 mb-6">PASHER<span className="text-honey-600">BAZAR</span></h2>
            <p className="text-oak-500 mb-8">
              Pure goodness from our neighborhood to yours. Bringing the world's most nutritious honey blends to your kitchen table.
            </p>
            <div className="flex space-x-4">
              {['FB', 'IG', 'TW', 'YT'].map(s => (
                <a key={s} href="#" className="w-10 h-10 rounded-full bg-oak-100 flex items-center justify-center text-oak-600 hover:bg-honey-600 hover:text-white transition-colors">
                  <span className="text-xs font-bold">{s}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-oak-900 mb-6 uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-4 text-oak-500">
              <li><a href="#products" className="hover:text-honey-600 transition-colors">Our Shop</a></li>
              <li><a href="#about" className="hover:text-honey-600 transition-colors">The Pasherbazar Story</a></li>
              <li><a href="#benefits" className="hover:text-honey-600 transition-colors">Health Benefits</a></li>
              <li><a href="#" className="hover:text-honey-600 transition-colors">Farmer Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-oak-900 mb-6 uppercase tracking-widest text-sm">Customer Support</h4>
            <ul className="space-y-4 text-oak-500">
              <li><a href="#" className="hover:text-honey-600 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-honey-600 transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-honey-600 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-honey-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-oak-900 mb-6 uppercase tracking-widest text-sm">Join the Community</h4>
            <p className="text-oak-500 mb-4 text-sm">Subscribe for health tips and neighborhood news.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="bg-oak-50 border border-oak-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-honey-400"
              />
              <button className="bg-honey-600 text-white font-bold py-3 rounded-xl hover:bg-honey-700 transition-colors">
                Join Now
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-oak-100 pt-8 flex flex-col md:flex-row justify-between items-center text-oak-400 text-xs">
          <p>© 2024 Pasherbazar Authentic Honey & Nuts. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-oak-600">Privacy Policy</a>
            <a href="#" className="hover:text-oak-600">Terms of Service</a>
            <a href="#" className="hover:text-oak-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
