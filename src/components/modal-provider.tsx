"use client"
import React, { createContext, useContext, useState } from 'react';
import { Modal } from './ui/modal';
import { Button } from './ui/button';

interface ModalContextType {
  openBooking: () => void;
  openEmailCapture: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModals must be used within ModalProvider");
  return context;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Forms submit simulation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setBookingOpen(false);
      setEmailOpen(false);
    }, 2500);
  };

  return (
    <ModalContext.Provider value={{
      openBooking: () => setBookingOpen(true),
      openEmailCapture: () => setEmailOpen(true)
    }}>
      {children}
      
      {/* Booking Modal */}
      <Modal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} title="Request a Consultation">
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-teal-muted text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Request Received</h3>
            <p className="text-slate-grey">Our concierge team will contact you shortly to confirm your luxurious appointment.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-grey mb-1">Full Name</label>
              <input required type="text" className="w-full h-11 px-4 rounded-md border border-teal-light/30 focus:border-gold-main focus:ring-1 focus:ring-gold-main outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-grey mb-1">Email Address</label>
              <input required type="email" className="w-full h-11 px-4 rounded-md border border-teal-light/30 focus:border-gold-main focus:ring-1 focus:ring-gold-main outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-grey mb-1">Service of Interest</label>
              <select className="w-full h-11 px-4 rounded-md border border-teal-light/30 focus:border-gold-main focus:ring-1 focus:ring-gold-main outline-none transition-all bg-white">
                <option>Ceramic Veneers</option>
                <option>Invisalign Aligners</option>
                <option>CEREC Same-Day Crowns</option>
                <option>General Consultation</option>
              </select>
            </div>
            <Button type="submit" className="w-full mt-2" size="lg">Secure Appointment</Button>
          </form>
        )}
      </Modal>

      {/* PDF Email Capture Modal */}
      <Modal isOpen={emailOpen} onClose={() => setEmailOpen(false)} title="Download 2026 Price List">
        {isSubmitted ? (
          <div className="text-center py-8">
             <div className="w-16 h-16 bg-teal-muted text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Sent Successfully</h3>
            <p className="text-slate-grey">The 2026 Price List PDF has been sent to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="text-slate-grey mb-2">Please enter your email to receive our transparent pricing catalog.</p>
            <div>
              <label className="block text-sm font-medium text-slate-grey mb-1">Email Address</label>
              <input required type="email" className="w-full h-11 px-4 rounded-md border border-teal-light/30 focus:border-gold-main focus:ring-1 focus:ring-gold-main outline-none transition-all" placeholder="john@example.com" />
            </div>
            <Button type="submit" className="w-full mt-2" size="lg">Send to Email</Button>
          </form>
        )}
      </Modal>

    </ModalContext.Provider>
  );
}
