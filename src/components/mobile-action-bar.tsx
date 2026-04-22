"use client";

import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { useModals } from './modal-provider';

export function MobileActionBar() {
  const { openBooking } = useModals();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-off-white/90 backdrop-blur-md border-t border-teal-light/20 p-4 z-50 flex gap-4 pb-safe">
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
    </div>
  );
}
