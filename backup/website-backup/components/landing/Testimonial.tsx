'use client';

import React, { useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Adebayo Okonkwo',
      role: 'Rice Farmer',
      location: 'Lagos State',
      rating: 5,
      image: 'AO',
      testimonial: 'This platform revolutionized how I sell my rice. Direct access to buyers, transparent pricing, and USDC payments have increased my profits by 40%. No more middlemen taking huge cuts!',
      stats: {
        volume: '2,400 MT sold',
        savings: '₦2.8M saved',
        period: '6 months'
      }
    },
    {
      name: 'Fatima Abdullahi',
      role: 'Commodity Trader',
      location: 'Kano State',
      rating: 5,
      image: 'FA',
      testimonial: 'The quality verification system gives me confidence in every purchase. Real-time market data helps me make informed decisions. Best agricultural trading platform in Nigeria.',
      stats: {
        volume: '5,200 MT traded',
        savings: '₦4.2M saved',
        period: '8 months'
      }
    },
    {
      name: 'James Okechukwu',
      role: 'Agro Processor',
      location: 'Ogun State',
      rating: 5,
      image: 'JO',
      testimonial: 'Sourcing quality cassava and maize for my processing plant has never been easier. The blockchain security and smart contracts ensure every transaction is safe and transparent.',
      stats: {
        volume: '3,800 MT processed',
        savings: '₦3.5M saved',
        period: '10 months'
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" style={{backgroundColor: '#e0e8e7'}}>
      
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
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-300/50 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-white/25 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Top section with title and stats indicator */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 text-xs sm:text-sm font-medium">Verified Reviews</span>
            <span className="text-gray-600 text-xs">500+ farmers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            What Farmers Say
            <br />
            <span className="text-gray-700">About Our Platform</span>
          </h2>
          
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Real stories from farmers, traders, and agro-processors who have transformed 
            their businesses using our decentralized commodity exchange platform.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          
          {/* Left side - Testimonial stats */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Platform Impact</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-gray-600">Growing daily</span>
                </div>
              </div>
              
              {/* Impact stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="h-4 sm:h-6 w-4 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Active Users</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Verified farmers & traders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-lg sm:text-xl">2,400+</div>
                    <div className="text-xs sm:text-sm font-semibold text-green-600">+25% monthly</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-4 sm:h-6 w-4 sm:w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Volume Traded</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Total commodities</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-lg sm:text-xl">45,000 MT</div>
                    <div className="text-xs sm:text-sm font-semibold text-green-600">Last 12 months</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-yellow-50 rounded-lg sm:rounded-xl">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Award className="h-4 sm:h-6 w-4 sm:w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Satisfaction Rate</h4>
                      <p className="text-xs sm:text-sm text-gray-600">User feedback</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-lg sm:text-xl">4.9/5</div>
                    <div className="text-xs sm:text-sm font-semibold text-yellow-600">500+ reviews</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base">
                View All Reviews
              </button>
            </div>
          </div>

          {/* Right side - Testimonial card */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main testimonial card */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:rotate-0 lg:rotate-2 transition-transform duration-500 relative overflow-hidden">
              
              {/* Curved protruding bottom left */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-full"></div>
              
              <div className="relative z-10">
                {/* Quote icon and navigation */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <Quote className="h-8 sm:h-10 w-8 sm:w-10 text-blue-300" />
                  <div className="flex space-x-2 sm:space-x-3">
                    <button 
                      onClick={prevTestimonial}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/20"
                    >
                      <ArrowLeft className="h-5 w-5 text-white" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/20"
                    >
                      <ArrowRight className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Testimonial content */}
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    "{testimonials[currentTestimonial].testimonial}"
                  </p>

                  {/* Rating stars */}
                  <div className="flex items-center  space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* User info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonials[currentTestimonial].image}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base sm:text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-blue-200 text-xs sm:text-sm">
                        {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <p className="text-white font-bold text-sm sm:text-base">
                        {testimonials[currentTestimonial].stats.volume}
                      </p>
                      <p className="text-blue-200 text-xs">Volume</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-sm sm:text-base">
                        {testimonials[currentTestimonial].stats.savings}
                      </p>
                      <p className="text-blue-200 text-xs">Saved</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-sm sm:text-base">
                        {testimonials[currentTestimonial].stats.period}
                      </p>
                      <p className="text-blue-200 text-xs">Period</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating rating card - repositioned and hidden on mobile */}
            <div className="absolute -top-[67px] -right-8 sm:-right-12 bg-white rounded-2xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform hidden lg:block">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-bold text-gray-900 text-lg">4.9</p>
                <p className="text-xs text-gray-600">Average Rating</p>
              </div>
            </div>

            {/* Floating indicator */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white rounded-xl p-3 shadow-lg">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-blue-600">{currentTestimonial + 1}/{testimonials.length}</p>
                <p className="text-xs text-gray-600">Stories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2 shadow-lg">
            <span>Share your story</span>
            <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;