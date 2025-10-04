'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ArrowRight, Eye, ShoppingCart, Users } from 'lucide-react';

const LiveMarketplace = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCurrentTime(new Date().toLocaleTimeString());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Mock live data that updates
  const [marketData] = useState([
    {
      commodity: 'Rice (Premium)',
      price: 380000,
      change: 2.5,
      volume: '1,240 MT',
      location: 'Lagos',
      trend: 'up',
      seller: 'Agrotech Farms',
      rating: 4.8
    },
    {
      commodity: 'Maize (Yellow)',
      price: 420000,
      change: -1.2,
      volume: '890 MT',
      location: 'Kano',
      trend: 'down',
      seller: 'Northern Grains',
      rating: 4.6
    },
    {
      commodity: 'Soybeans',
      price: 650000,
      change: 4.1,
      volume: '560 MT',
      location: 'Kaduna',
      trend: 'up',
      seller: 'Prime Agro Ltd',
      rating: 4.9
    },
    {
      commodity: 'Cassava (Dried)',
      price: 180000,
      change: 0.8,
      volume: '2,100 MT',
      location: 'Ogun',
      trend: 'up',
      seller: 'Cassava Connect',
      rating: 4.4
    }
  ]);

  return (
    <section className="relative bg-gradient-to-b from-[#a9f877] via-[#c7f8a9] to-gray-200 rounded-tl-[150px] overflow-hidden min-h-screen flex items-center">
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/15 rounded-full blur-2xl"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/30 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-green-300/50 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-white/25 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Top section with title and live indicator */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-gray-800 text-xs sm:text-sm font-medium">Live Market Data</span>
            {isClient && <span className="text-gray-700 text-xs">{currentTime}</span>}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Live Marketplace
            <br />
            <span className="text-gray-700">Real-time Trading</span>
          </h2>
          
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Watch commodity prices update in real-time. Connect directly with verified sellers 
            and make informed trading decisions with live market data.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          
          {/* Left side - Live market cards */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Active Markets</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-gray-600">4 active traders</span>
                </div>
              </div>
              
              {marketData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-colors mb-2 sm:mb-3 last:mb-0">
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                    <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {item.trend === 'up' ? (
                        <TrendingUp className="h-4 sm:h-6 w-4 sm:w-6 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 sm:h-6 w-4 sm:w-6 text-red-600" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.commodity}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">{item.location} • {item.volume}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <div className="font-bold text-gray-900 text-sm sm:text-base">₦{(item.price/1000).toFixed(0)}k/MT</div>
                    <div className={`text-xs sm:text-sm font-semibold ${
                      item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.trend === 'up' ? '+' : ''}{item.change}%
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base">
                View All Markets
              </button>
            </div>
          </div>

          {/* Right side - Interactive dashboard mockup */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main dashboard card */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 w-[700px] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:rotate-0 lg:rotate-2 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white">Trading Dashboard</h3>
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 sm:p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-xs sm:text-sm">USDC Balance</p>
                      <p className="text-xl sm:text-2xl font-bold">$12,847.50</p>
                    </div>
                    <div className="text-green-200">
                      <ShoppingCart className="h-6 sm:h-8 w-6 sm:w-8" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Eye className="h-3 sm:h-4 w-3 sm:w-4 text-white/70" />
                      <span className="text-xs sm:text-sm text-white/70">Watching</span>
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-white">8</p>
                    <p className="text-xs text-white/50">Markets</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-3 sm:h-4 w-3 sm:w-4 text-white/70" />
                      <span className="text-xs sm:text-sm text-white/70">Active</span>
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-white">24</p>
                    <p className="text-xs text-white/50">Traders</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-white/70">Recent Activity</span>
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-2 bg-green-500/20 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-white/90 truncate">Rice order placed - 50MT</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-blue-500/20 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-white/90 truncate">Maize price updated</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-orange-500/20 rounded-lg">
                      <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-white/90 truncate">New seller verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating seller card - hidden on mobile */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Prime Agro Ltd</p>
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <div key={star} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">4.9</span>
                  </div>
                </div>
              </div>
              <button className="mt-3 w-full bg-green-600 text-white text-sm py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Connect
              </button>
            </div>

            {/* Floating stats - repositioned for mobile */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white rounded-xl p-3 shadow-lg">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-green-600">24/7</p>
                <p className="text-xs text-gray-600">Market Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2 shadow-lg">
            <span>Join the marketplace</span>
            <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveMarketplace;