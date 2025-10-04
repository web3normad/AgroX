'use client';

import React, { useState } from 'react';
import { Leaf, Menu, X, Play } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Side - Navigation Items */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-white hover:text-green-300 font-semibold transition-colors flex items-center space-x-1 drop-shadow-md">
                <span>MARKETPLACE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a 
              href="#pricing" 
              className="text-white hover:text-green-300 font-semibold transition-colors drop-shadow-md"
            >
              PRICING
            </a>
            <a 
              href="#blog" 
              className="text-white hover:text-green-300 font-semibold transition-colors drop-shadow-md"
            >
              BLOG
            </a>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-green-600 p-2 rounded-lg shadow-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white drop-shadow-lg">AgriVault</span>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white hover:text-green-300 font-semibold transition-colors flex items-center space-x-2 drop-shadow-md">
              <Play className="h-4 w-4" />
              <span>WATCH DEMO</span>
            </button>
            
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg hover:shadow-xl border border-green-500">
              GET STARTED
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm relative z-10"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white drop-shadow-md" />
            ) : (
              <Menu className="h-6 w-6 text-white drop-shadow-md" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/20">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#marketplace" 
              className="block text-white hover:text-green-300 font-semibold py-2 transition-colors"
            >
              MARKETPLACE
            </a>
            <a 
              href="#pricing" 
              className="block text-white hover:text-green-300 font-semibold py-2 transition-colors"
            >
              PRICING
            </a>
            <a 
              href="#blog" 
              className="block text-white hover:text-green-300 font-semibold py-2 transition-colors"
            >
              BLOG
            </a>
            <hr className="my-4 border-white/20" />
            <button className="flex items-center space-x-2 text-white hover:text-green-300 font-semibold py-2 transition-colors">
              <Play className="h-4 w-4" />
              <span>WATCH DEMO</span>
            </button>
            <button className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-bold text-left shadow-lg">
              GET STARTED
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;