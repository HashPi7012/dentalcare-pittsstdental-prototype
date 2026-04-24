"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { useModals } from './modal-provider';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileActionBar() {
  const { openBooking } = useModals();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden fixed bottom-0 left-0 right-0 bg-off-white/90 backdrop-blur-md border-t border-teal-light/20 p-4 z-50 flex gap-4 pb-safe"
        >
          <a 
            href="tel:+61200000000" 
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md border border-teal-muted text-teal-dark font-medium bg-off-white"
            style={{ minHeight: '44px' }}
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <button 
            onClick={openBooking}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-gold-shimmer text-white font-medium shadow-lg shadow-gold-main/20"
            style={{ minHeight: '44px' }}
          >
            <Calendar size={18} />
            <span>Book Online</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
