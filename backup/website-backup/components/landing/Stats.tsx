'use client';

import React from 'react';
import { TrendingUp, Users, Building, CheckCircle, ArrowRight, DollarSign, Globe, Zap } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: 'Total Trade Volume', value: '₦2.5B+', description: 'Processed through our platform' },
    { label: 'Active Farmers', value: '15K+', description: 'Across 36 states' },
    { label: 'Buyer Companies', value: '300+', description: 'Local and international' },
    { label: 'Success Rate', value: '98.5%', description: 'Successful transactions' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Large background shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-100/40 rounded-full blur-3xl"></div>
        
        {/* Geometric background lines */}
        <div className="absolute top-32 left-1/4 w-64 h-0.5 bg-gradient-to-r from-blue-200 to-transparent rotate-12"></div>
        <div className="absolute bottom-40 right-1/3 w-48 h-0.5 bg-gradient-to-l from-green-200 to-transparent -rotate-12"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-blue-300/50 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-8 h-8 bg-green-300/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Discover opportunities
                <br />
                <span className="text-green-700">right from your</span>
                <br />
                <span className="text-green-700">commodity wallet</span>
              </h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Explore the possibilities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Browse personalized recommendations based on your trading interests and discover 
                your next favorite commodity opportunity.
              </p>
              
              {/* Mini feature list */}
                              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-green-700" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Crop Market Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-4 w-4 text-yellow-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Global Trading Network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Smart Contracts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Floating UI mockups and stats */}
          <div className="relative">
            {/* Main floating card - Mobile app mockup */}
            <div className="relative z-20 bg-white rounded-2xl shadow-2xl p-6 mb-8 ml-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Today's picks</h4>
                <button className="text-green-700 text-sm font-medium">View all →</button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CR</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Crop Reports</div>
                    <div className="text-xs text-gray-500">Market analysis</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PT</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Price Tracking</div>
                    <div className="text-xs text-gray-500">Live commodity prices</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SF</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Smart Farming</div>
                    <div className="text-xs text-gray-500">IoT & blockchain tools</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating dashboard card */}
            <div className="absolute top-8 -right-4 z-10 bg-white rounded-xl shadow-lg p-4 w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="text-xs text-gray-500 mb-3">COMMODITY TRACKING</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">White Corn</span>
                  <span className="text-sm font-bold text-green-600">+5.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Soya Beans</span>
                  <span className="text-sm font-bold text-green-600">+2.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Cashew Nuts</span>
                  <span className="text-sm font-bold text-red-500">-1.2%</span>
                </div>
              </div>
            </div>

            {/* Floating magnifying glass icon */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <div className="w-8 h-8 border-2 border-white rounded-full relative">
                <div className="absolute -bottom-2 -right-2 w-1 h-4 bg-white rounded transform rotate-45"></div>
              </div>
            </div>

            {/* Floating arrow */}
            <div className="absolute bottom-4 right-8 transform rotate-12">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center shadow-lg">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white/80 transition-colors">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;