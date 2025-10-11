'use client';

import React from 'react';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              <span className="font-bold text-gray-900 text-xl">AgriVault</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
              Nigeria's first decentralized commodity exchange platform. 
              Connecting farmers directly to buyers with transparent pricing and secure blockchain payments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="/marketplace" 
                  className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a 
                  href="/trading" 
                  className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
                >
                  Trading Dashboard
                </a>
              </li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Price Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Quality Verification</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">USDC Wallet</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">+234 901 234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">hello@agrivault.ng</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Waitlist signup */}
        <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-300">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Waitlist signup</h3>
              <p className="text-gray-600">Be the first to know when we launch</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent w-full sm:w-64"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors whitespace-nowrap">
                Sign up
              </button>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            By signing up you are confirming your agreement to our Terms of Service and Privacy Policy
          </p>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
              <p>&copy; 2024 AgriVault. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-green-600 transition-colors">Terms of Service</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex space-x-1">
                <Twitter className="h-4 w-4 text-gray-400" />
                <Linkedin className="h-4 w-4 text-gray-400" />
                <Github className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">Built on Hedera Blockchain | Powered by USDC</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;