import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Stats from '@/components/landing/Stats';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowitWorks';
import LiveMarketplace from '@/components/landing/Marketplace';
import Testimonal from '@/components/landing/Testimonial';
import CTA from '@/components/landing/CTA';
// import Footer from "@/components/landing/Footer"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      
      <Hero />

      {/* Stats Section */}
      
      <Stats />
      

      {/* Features Section */}
      <div className='bg-100'>
      <Features />
      </div>

      {/* How It Works Section */}
      <div className='bg-green-700 '>
      <HowItWorks />
      </div>

      {/* Live Marketplace Section */}
      <div className='bg-gray-300'>
      <LiveMarketplace />
      </div>

      {/* Testimonial Section */}
      <Testimonal />

      {/* Call to Action Section */}
      <div className='bg-[#e0e8e7]'>
      <CTA />
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;