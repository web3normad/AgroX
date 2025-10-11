import React from 'react';
import Navbar from '../app/(website)/components/Navbar';
import Hero from '../app/(website)/components/Hero';
import Stats from '../app/(website)/components/Stats';
import Features from '../app/(website)/components/Features';
import HowItWorks from '../app/(website)/components/HowItWorks';
import LiveMarketplace from '../app/(website)/components/Marketplace';
import Testimonal from '../app/(website)/components/Testimonial';
import CTA from '../app/(website)/components/CTA';
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