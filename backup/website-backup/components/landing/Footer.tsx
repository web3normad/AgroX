'use client';

import React from 'react';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

const MinimalisticFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Top fade to blend with CTA */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-green-400">AgriTrade</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Nigeria's first decentralized commodity exchange platform. 
              Connecting farmers directly to buyers with transparent pricing and secure blockchain payments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Trading Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Price Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Quality Verification</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">USDC Wallet</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">+234 901 234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">hello@agritrade.ng</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>&copy; 2024 AgriTrade. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              </div>
            </div>

            {/* Back to top button */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Built with badge */}
      <div className="bg-gray-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
            <p>Built on Hedera Blockchain | Powered by USDC</p>
            <p className="mt-2 sm:mt-0">Hackathon Project 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinimalisticFooter;