'use client';

import React from 'react';
import { ArrowRight, Smartphone, MapPin, Phone, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const CTAAndFooter = () => {
  return (
    <div className="relative">
      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-[#a9f877] via-[#c7f8a9] to-gray-200 rounded-tr-[150px] overflow-hidden min-h-screen flex items-center">
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          
          {/* Top section with curved card */}
          <div className="relative mb-16 sm:mb-24">
            {/* Large curved card */}
            <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-2xl sm:rounded-3xl lg:rounded-[60px] p-6 sm:p-8 lg:p-12 xl:p-16 shadow-2xl relative overflow-hidden">
              
              {/* Curved bottom right protrusion */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-full"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
                
                {/* Left content */}
                <div className="text-white text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                    Where will AgriTrade
                    <br />
                    <span className="text-green-200">take you?</span>
                  </h1>
                  
                  <p className="text-green-100 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                    Transform your agricultural business with Nigeria's most advanced commodity trading platform.
                  </p>
                  
                  <button className="bg-white hover:bg-gray-100 text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-colors inline-flex items-center space-x-2 shadow-lg">
                    <span>Join the waitlist</span>
                    <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
                  </button>
                </div>

                {/* Right content - Dashboard mockups */}
                <div className="relative order-first lg:order-last">
                  {/* Main dashboard card */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto lg:max-w-none">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex space-x-1 sm:space-x-2">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-100 rounded-lg flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-xs sm:text-sm truncate">Rice - Premium</div>
                          <div className="text-xs text-gray-600 truncate">Lagos • 1,240 MT</div>
                        </div>
                        <div className="text-xs font-semibold text-green-600 flex-shrink-0">+2.5%</div>
                      </div>
                      
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-100 rounded-lg flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-xs sm:text-sm truncate">Maize - Yellow</div>
                          <div className="text-xs text-gray-600 truncate">Kano • 890 MT</div>
                        </div>
                        <div className="text-xs font-semibold text-red-600 flex-shrink-0">-1.2%</div>
                      </div>
                      
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-100 rounded-lg flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-xs sm:text-sm truncate">Soybeans</div>
                          <div className="text-xs text-gray-600 truncate">Kaduna • 560 MT</div>
                        </div>
                        <div className="text-xs font-semibold text-green-600 flex-shrink-0">+4.1%</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating profile card - hidden on mobile */}
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-xl p-3 sm:p-4 shadow-lg transform -rotate-12 hover:rotate-0 transition-transform hidden md:block">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">AO</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">Adebayo Farms</p>
                        <div className="flex space-x-1">
                          {[1,2,3,4,5].map((star) => (
                            <div key={star} className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat bubble - hidden on mobile */}
                  <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-green-500 text-white px-3 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold shadow-lg hidden sm:block">
                    Buy Crypto to supply abroad
                    <br />
                    <span className="text-green-200 text-xs">Secure transactions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-xl mb-6">
              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
              </div>
              <span className="font-semibold">AgriTrade</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Discover your next
              <br />
              <span className="text-gray-700">move, onchain</span>
            </h2>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Ready to revolutionize your agricultural trading?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of Nigerian farmers and traders who are already benefiting from transparent pricing, 
                secure USDC payments, and direct market access.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center space-x-2 shadow-lg w-full sm:w-auto">
                  <span>Get Started Free</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2 w-full sm:w-auto">
                  <Smartphone className="h-5 w-5" />
                  <span>Download App</span>
                </button>
              </div>

              <p className="text-gray-500 text-sm">
                Trusted by 2,400+ farmers across Nigeria • No setup fees • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <span className="font-bold text-gray-900 text-xl">AgriTrade</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
                Nigeria's first decentralized commodity exchange platform. 
                Connecting farmers directly to buyers with transparent pricing and secure blockchain payments.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Platform links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Marketplace</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Trading Dashboard</a></li>
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
                  <span className="text-gray-600">hello@agritrade.ng</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Waitlist signup */}
          <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-200">
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
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
                <p>&copy; 2024 AgriTrade. All rights reserved.</p>
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
    </div>
  );
};

export default CTAAndFooter;