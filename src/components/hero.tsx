"use client"
import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useModals } from './modal-provider';
import Image from 'next/image';

export function Hero() {
  const { openBooking } = useModals();

  return (
    <section className="relative pt-32 pb-40 z-10 w-full min-h-screen flex items-center overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}>
      {/* Sanctuary Absolute Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero.webp" 
          alt="Luxury Dental Spa Sanctuary" 
          fill 
          className="object-cover object-right" 
          priority 
        />
        {/* Global Left-to-Right Fade (Desktop) */}
        <div className="absolute inset-0 bg-gradient-to-r from-off-white/80 via-off-white/30 to-transparent pointer-events-none hidden md:block"></div>
        {/* Mobile Radial Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,249,249,0.8)_0%,transparent_70%)] pointer-events-none md:hidden z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 lg:col-span-6 flex flex-col items-center text-center sm:items-start sm:text-left gap-6 pt-10 relative z-10"
          >
            <h1 style={{textShadow: "0 4px 40px rgba(0,0,0,0.15)"}} className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-extrabold text-charcoal leading-[0.95] tracking-tighter">
              Sydney CBD's <br />
              <span className="text-gold-main bg-gold-shimmer -webkit-background-clip-text text-transparent bg-clip-text inline-block mt-2">Premier Dental Spa</span>
            </h1>
            
            <p style={{textShadow: "0 2px 20px rgba(0,0,0,0.15)"}} className="text-lg text-charcoal font-outfit md:text-xl max-w-lg leading-relaxed font-medium mt-2">
              Luxury cosmetic and general dentistry designed for the urban professional. Same-day transformations, spa amenities, and needle-free excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full bg-gold-main hover:bg-gold-dark text-white bg-gold-glow border-0 shadow-xl shadow-gold-main/20" onClick={openBooking}>
                Book Your Five-Star Experience
              </Button>
            </div>
          </motion.div>
          {/* We naturally leave the right side empty so the background image lifestyle shot is fully visible */}
          <div className="md:col-span-4 lg:col-span-6 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
