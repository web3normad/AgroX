'use client';

import React from 'react';
import { ArrowRight, Shield, Smartphone, Users, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="relative rounded-tr-[150px] rounded-tl-3xl bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden min-h-screen flex items-center">
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>

      {/* Light curved overlay elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-white/40 rounded-full blur-2xl"></div>

      {/* Decorative line at bottom */}
      <div className="absolute bottom-0 left-1/4 w-64 h-1">
        <svg viewBox="0 0 256 4" className="w-full h-full">
          <path d="M0,2 Q64,0 128,2 Q192,4 256,2" stroke="#22c55e" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
                Trade agricultural
                <br />
                <span className="text-green-700">commodities with</span>
                <br />
                <span className="text-green-700">blockchain security</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                Join Nigeria's first decentralized commodity exchange 
                platform. Trade rice, maize, soybeans and more with 
                transparent pricing and secure USDC settlements.
              </p>
              
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Start trading now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Trading features list */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Transparent commodity pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">USDC settlements on Hedera</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Quality verification system</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Direct farmer-buyer connections</span>
              </div>
            </div>
          </div>

          {/* Right side - Phone mockup and 3D elements */}
          <div className="relative">
            
            {/* Floating shield icon - top */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-30">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 hover:rotate-0 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Main phone mockup */}
            <div className="relative z-20 mx-auto max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Phone frame */}
              <div className="bg-black rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-3xl aspect-[9/19] overflow-hidden relative">
                  
                  {/* Phone screen content */}
                  <div className="h-full bg-gradient-to-b from-gray-50 to-white">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 pt-4 pb-2">
                      <div className="text-sm font-semibold">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-1 h-2 bg-gray-400 rounded-sm"></div>
                        <div className="w-6 h-2 bg-black rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App header with green gradient */}
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                      <h3 className="text-lg font-bold mb-2">Commodity Trading</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">Market open</span>
                      </div>
                    </div>
                    
                    {/* Trading features list */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">Rice - ₦380,000/MT</span>
                        </div>
                        <div className="text-xs text-green-600 font-semibold">+2.5%</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">Maize - ₦420,000/MT</span>
                        </div>
                        <div className="text-xs text-red-600 font-semibold">-1.2%</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">Soybeans - ₦650,000/MT</span>
                        </div>
                        <div className="text-xs text-green-600 font-semibold">+4.1%</div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-600">USDC Balance</span>
                          <span className="text-xs font-bold text-gray-900">$2,847.50</span>
                        </div>
                        <button className="w-full bg-green-600 text-white text-xs py-2 rounded-lg font-semibold">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating 3D cube icon - bottom right */}
            <div className="absolute bottom-8 -right-4 z-30">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-xl transform -rotate-12 hover:rotate-0 transition-transform">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-md"></div>
              </div>
            </div>

            {/* Background decorative shapes */}
            <div className="absolute top-1/2 -right-8 w-32 h-32 bg-green-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-green-200/40 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;