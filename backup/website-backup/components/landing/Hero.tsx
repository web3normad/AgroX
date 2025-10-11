'use client';

import React from 'react';
import Image from 'next/image';
import background from "../../public/images/Bg-img.png";

const Hero = () => {
  const partners = [
    "First Bank",
    "Flour Mills", 
    "AFEX",
    "CBN",
    "Hedera",
    "Circle",
    "Dangote",
    // Duplicate for seamless loop
    "First Bank",
    "Flour Mills", 
    "AFEX",
    "CBN",
    "Hedera",
    "Circle",
    "Dangote"
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Agricultural Landscape Background */}
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="Nigerian Agricultural Landscape"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Top Banner - Similar to Adaline's credit banner */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border border-white/50">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-800">
                🚀 Now generally available! Giving ₦1MM in credits.
              </span>
              <svg className="w-4 h-4 ml-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="text-white drop-shadow-lg">
                The single platform to{' '}
              </span>
              <span className="relative inline-block">
                <span className="text-white drop-shadow-lg">iterate,</span>
                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-yellow-400/80 -z-10 rounded"></div>
              </span>
              <br />
              <span className="relative inline-block">
                <span 
                  className="font-extrabold drop-shadow-2xl"
                  style={{
                    background: 'linear-gradient(45deg, #00ff88, #00cc66, #ffff00, #00ff88)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient-shift 3s ease infinite'
                  }}
                >
                  trade, finance, and monitor
                </span>
              </span>{' '}
              <span className="text-white drop-shadow-lg">commodities</span>
            </h1>
          </div>

          {/* Trust Indicators - Smooth Scrolling Carousel */}
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-white/90 mb-8 uppercase tracking-wider drop-shadow-md">
              TRUSTED BY
            </div>
            
            {/* Smooth Scrolling Carousel Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex animate-scroll-left"
                style={{
                  width: `${partners.length * 180}px`,
                  animationDuration: '30s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              >
                {partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: '180px' }}
                  >
                    <div className="text-white/80 font-bold text-lg text-center drop-shadow-lg hover:text-white transition-colors">
                      {partner}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Very subtle left fade overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none z-10"></div>
              
              {/* Very subtle right fade overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/60 via-black/30 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;