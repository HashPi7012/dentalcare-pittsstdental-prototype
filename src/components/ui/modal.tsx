"use client"
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-lg bg-off-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gold-light/20 z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-grey hover:text-charcoal rounded-full hover:bg-black/5 transition-colors"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 border-b border-gold-light/20 pb-4">
              {title}
            </h2>
            
            {children}
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
