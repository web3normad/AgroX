'use client';

import React from 'react';
import { Zap, RefreshCw, Shield, Coins, Globe, TrendingUp } from 'lucide-react';

const Features = () => {
  return (
    <section className="relative rounded-tl-[150px] bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden min-h-screen flex items-center">
      
      {/* Curved top-left element - PROPER ORGANIC CURVE */}
      <div className="absolute top-0 left-0 w-96 h-96">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M0,0 Q200,50 350,200 Q380,250 400,300 L400,0 Z" fill="rgba(34, 197, 94, 0.15)" />
        </svg>
      </div>
      
      {/* Vertical line decorative elements */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-green-400/60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-green-400/60"></div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Main headline */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Transact with a platform
            <br />
            <span className="text-green-200">that won't slow you down</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Feature 1 - Pay network fees */}
          <div className="relative group">
            <div className="bg-green-800/60 backdrop-blur-sm p-8 rounded-t-2xl border border-green-600/30 hover:border-green-500/50 transition-all duration-300 hover:bg-green-800/70 relative">
              {/* Curved bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-800/60 rounded-b-3xl"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <Coins className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                Pay network fees with
                <br />
                any token
              </h3>
              
              <p className="text-green-100 text-sm leading-relaxed relative z-10 pb-4">
                Use non-native tokens on any network to pay 
                for your transactions. Never get stuck 
                without gas again.
              </p>
            </div>
          </div>

          {/* Feature 2 - Swap tokens */}
          <div className="relative group lg:mt-12">
            <div className="bg-green-800/60 backdrop-blur-sm p-8 rounded-t-2xl border border-green-600/30 hover:border-green-500/50 transition-all duration-300 hover:bg-green-800/70 relative">
              {/* Curved bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-800/60 rounded-b-3xl"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                Trade commodities across
                <br />
                chains in one swipe
              </h3>
              
              <p className="text-green-100 text-sm leading-relaxed relative z-10 pb-4">
                Now you can swap any token faster than you 
                can say AgriVault, with custom settings for 
                cost-effectiveness or speed.
              </p>
            </div>
          </div>

          {/* Feature 3 - Buy crypto hassle-free */}
          <div className="relative group lg:mt-24">
            <div className="bg-green-800/60 backdrop-blur-sm p-8 rounded-t-2xl border border-green-600/30 hover:border-green-500/50 transition-all duration-300 hover:bg-green-800/70 relative">
              {/* Curved bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-800/60 rounded-b-3xl"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                Buy commodities hassle-free
              </h3>
              
              <p className="text-green-100 text-sm leading-relaxed relative z-10 pb-4">
                Choose from 130+ payment methods in 100+ 
                countries with purchases optimized for high 
                completion rates and low fees.
              </p>
            </div>
          </div>

          {/* Feature 4 - Secure trading */}
          <div className="relative group lg:-mt-12">
            <div className="bg-green-800/60 backdrop-blur-sm p-8 rounded-t-2xl border border-green-600/30 hover:border-green-500/50 transition-all duration-300 hover:bg-green-800/70 relative">
              {/* Curved bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-800/60 rounded-b-3xl"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <Shield className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                Forget about seed
                <br />
                phrases
              </h3>
              
              <p className="text-green-100 text-sm leading-relaxed relative z-10 pb-4">
                Stay in full control with passkeys so you 
                never have to worry about losing access to 
                your wallet.
              </p>
            </div>
          </div>

          {/* Feature 5 - Global access */}
          <div className="relative group">
            <div className="bg-green-800/60 backdrop-blur-sm p-8 rounded-t-2xl border border-green-600/30 hover:border-green-500/50 transition-all duration-300 hover:bg-green-800/70 relative">
              {/* Curved bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-800/60 rounded-b-3xl"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <Globe className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                Global commodity
                <br />
                marketplace
              </h3>
              
              <p className="text-green-100 text-sm leading-relaxed relative z-10 pb-4">
                Connect with buyers and sellers worldwide. 
                Access premium agricultural commodities 
                from verified suppliers across Africa.
              </p>
            </div>
          </div>

          {/* Feature 6 - Smart contracts */}
          <div className="relative group lg:mt-12">
            <div className="bg-green-800/60 backdrop-blur-sm p-8 rounded-t-2xl border border-green-600/30 hover:border-green-500/50 transition-all duration-300 hover:bg-green-800/70 relative">
              {/* Curved bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-800/60 rounded-b-3xl"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                Automated smart
                <br />
                contracts
              </h3>
              
              <p className="text-green-100 text-sm leading-relaxed relative z-10 pb-4">
                Execute trades automatically with blockchain 
                smart contracts. Ensure fair pricing and 
                instant settlement with USDC payments.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-32 right-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"></div>
      
      {/* Additional curved elements */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,60 Q300,0 600,40 Q900,80 1200,20 L1200,120 L0,120 Z" fill="rgba(34, 197, 94, 0.1)" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-full h-32">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          <path d="M1200,60 Q900,0 600,40 Q300,80 0,20 L0,0 L1200,0 Z" fill="rgba(34, 197, 94, 0.1)" />
        </svg>
      </div>
    </section>
  );
};

export default Features;