
import React, { useState } from 'react';
import { Icons } from '../constants';
import { View } from '../types';

interface HeaderProps {
  cartCount: number;
  currentView: View;
  onNavigate: (view: View) => void;
  onSearch: (term: string) => void;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, currentView, onNavigate, onSearch, onOpenCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    onNavigate('shop');
  };

  const navLinks: { label: string; view: View }[] = [
    { label: 'Shop', view: 'shop' },
    { label: 'Our Story', view: 'story' },
    { label: 'Benefits', view: 'benefits' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-oak-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-serif font-bold text-oak-900 tracking-tight flex items-center hover:opacity-80 transition-opacity"
            >
              PASHER<span className="text-honey-600">BAZAR</span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <button
                key={link.view}
                onClick={() => onNavigate(link.view)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  currentView === link.view ? 'text-honey-600' : 'text-oak-700 hover:text-honey-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative hidden sm:block">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="bg-oak-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-honey-400 w-48 md:w-64 transition-all"
              />
              <div className="absolute left-3 top-2.5 text-oak-400">
                <Icons.Search />
              </div>
            </form>

            <button 
              onClick={onOpenCart}
              className="relative p-2 text-oak-700 hover:text-honey-700 transition-colors"
            >
              <Icons.Cart />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-honey-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="md:hidden p-2 text-oak-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
