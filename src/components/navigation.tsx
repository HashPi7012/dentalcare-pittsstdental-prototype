"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, MapPin } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useModals } from './modal-provider';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { openBooking } = useModals();
  const { scrollY } = useScroll();
  const [isMerged, setIsMerged] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Trigger the final merge once the user scrolls past the Hero (approx 80vh)
    const threshold = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800;
    if (latest > threshold) {
      setIsMerged(true);
    } else {
      setIsMerged(false);
    }
  });

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Smiles", href: "#transformations" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Doctors", href: "#", disabled: true },
  ];

  return (
    <>
      <div className={`fixed left-0 right-0 z-50 px-4 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isMerged ? 'top-4' : 'top-6'}`}>
        <div className="container mx-auto flex justify-center w-full relative">
          {/* Continuous Unified Background Layer */}
          <div 
            className={`absolute top-0 left-1/2 -translate-x-1/2 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 transition-all duration-[800ms] ease-out shadow-lg pointer-events-auto
              ${isMerged ? 'opacity-100 scale-100 w-full max-w-5xl' : 'opacity-0 scale-95 w-0'}`}
          ></div>

          <motion.div 
            layout 
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className={`flex items-center relative z-10 ${isMerged ? 'gap-12 w-full max-w-5xl justify-center' : 'w-full max-w-6xl justify-between'}`}
          >
            {/* Left Capsule / Logo */}
            <motion.div 
              layout
              className={`flex items-center h-16 px-6 pointer-events-auto transition-all duration-500
                ${isMerged ? 'rounded-2xl border-transparent bg-transparent text-charcoal backdrop-blur-0 shadow-none' : 'rounded-2xl bg-black/20 border border-white/10 text-white backdrop-blur-xl shadow-sm'}`}
            >
              <div className="font-heading text-xl font-bold flex items-center gap-2">
                <span className="text-gold-main whitespace-nowrap">Pitt's</span> Clinic
              </div>
            </motion.div>

            {/* Right Capsule / Links & CTAs */}
            <motion.div 
              layout
              className={`hidden md:flex items-center h-16 px-2 pointer-events-auto transition-all duration-500
                ${isMerged ? 'rounded-2xl border-transparent bg-transparent backdrop-blur-0 shadow-none pl-6' : 'rounded-2xl bg-black/20 border border-white/10 backdrop-blur-xl shadow-sm pl-8'}`}
            >
              {/* Links */}
              <div className="flex items-center gap-6 mr-6">
                {navLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    className={`text-sm font-medium transition-colors ${link.disabled ? (isMerged ? 'text-charcoal/40 cursor-not-allowed' : 'text-white/40 cursor-not-allowed') : (isMerged ? 'text-charcoal hover:text-gold-main' : 'text-white/90 hover:text-gold-main')}`}
                    onClick={(e) => link.disabled && e.preventDefault()}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-2">
                <a href="#emergency" className={`flex items-center gap-2 px-5 h-12 rounded-2xl border text-sm font-medium transition-all duration-700 animate-calm-pulse ${isMerged ? 'border-rosewood/20 text-rosewood hover:bg-rosewood/5' : 'border-rosewood/40 text-rosewood hover:bg-rosewood/10'}`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rosewood opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rosewood"></span>
                  </span>
                  Emergency
                </a>
                <Button 
                  onClick={openBooking} 
                  className="rounded-2xl h-12 px-6 bg-gold-main hover:bg-gold-dark text-white font-medium border-0 transition-all bg-gold-glow"
                >
                  Appointment
                </Button>
              </div>
            </motion.div>

            <motion.div 
              layout
              className={`md:hidden flex items-center justify-center w-16 h-16 pointer-events-auto transition-all duration-500
                ${isMerged ? 'rounded-2xl border-transparent bg-transparent backdrop-blur-0 shadow-none' : 'rounded-2xl bg-black/20 border border-white/10 backdrop-blur-xl shadow-sm'}`}
            >
              <button
                className={`p-2 rounded-2xl ${isMerged ? 'text-charcoal' : 'text-white'}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-32 px-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 mb-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`text-2xl font-heading transition-colors ${link.disabled ? 'text-slate-grey/40 cursor-not-allowed' : 'text-charcoal hover:text-gold-main'}`}
                  onClick={(e) => {
                    if (link.disabled) e.preventDefault();
                    else setIsOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Button className="w-full rounded-2xl h-14 bg-gold-main text-white" size="lg" onClick={() => { setIsOpen(false); openBooking(); }}>Appointment</Button>
            <a
              href="#emergency"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-4 h-14 text-rosewood border border-rosewood/20 rounded-2xl bg-rosewood/5"
            >
              <MapPin size={18} /> Emergency Portal
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
