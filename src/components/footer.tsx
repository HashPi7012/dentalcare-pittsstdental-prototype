"use client";

import React from 'react';
import { Button } from './ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useModals } from './modal-provider';

// Custom Social Icons as Lucide 1.8.0 removed brand icons
const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Footer() {
  const { openBooking } = useModals();

  return (
    <footer className="bg-charcoal text-off-white pt-20 pb-10 border-t-4 border-gold-main">
      <div className="container mx-auto px-4">
        
        {/* Contact Strip (The Final Push) */}
        <div className="bg-teal-dark p-8 rounded-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-teal-light/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-main/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-2">Secure Your Appointment</h3>
            <p className="text-teal-light">Take the first step towards your premium dental experience.</p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button onClick={openBooking} size="lg" className="w-full sm:w-auto bg-white text-teal-dark hover:bg-off-white shadow-none">
              Book Online
            </Button>
            <a href="tel:+61200000000" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-teal-light text-off-white hover:bg-teal-light/20 hover:text-white">
                Call Now
              </Button>
            </a>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div>
            <div className="font-serif text-2xl font-bold text-white mb-6">
              <span className="text-gold-main">Pitt Street</span><br/>Dental Centre
            </div>
            <div className="flex items-start gap-3 text-slate-300 mb-4">
              <MapPin size={20} className="text-gold-light mt-1 flex-shrink-0" />
              <span>Level 2, 70 Pitt Street<br/>Sydney NSW 2000</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-light">Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Ceramic Veneers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Invisalign Aligners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CEREC Same-Day Crowns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laser Dentistry</a></li>
              <li><a href="#emergency" className="hover:text-white transition-colors text-rosewood">Emergency Dental</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Surcharge */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-light">Information</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
            <div className="mt-6 p-4 bg-black/20 rounded border border-white/5 text-xs text-slate-400">
              <span className="block font-bold text-slate-300 mb-1">Payment Surcharge Notice:</span>
              0% surcharge on Visa/Mastercard. 2% surcharge applies to American Express & Diners Club transactions.
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-light">Connect</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <a href="tel:+61200000000" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} /> (02) 0000 0000
                </a>
              </li>
              <li>
                <a href="mailto:booking@pittstreetdental.com.au" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={18} /> booking@pittstreetdental.com.au
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-gold-main transition-colors text-white"><Facebook size={20} /></a>
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-gold-main transition-colors text-white"><Instagram size={20} /></a>
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-gold-main transition-colors text-white"><Linkedin size={20} /></a>
            </div>
          </div>

        </div>

        {/* Map Embed Section */}
        <div className="mb-16 rounded-2xl overflow-hidden border-2 border-gold-main/20 h-[300px] relative group transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.91039!2d151.2081!3d-33.8675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae40!2zNzAgUGl0dCBTdCwgU3lkbmV5IE5TVyAyMDAwLCBBdXN0cmFsaWE!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Dark overlay that fades on hover */}
          <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/20 transition-all duration-700 pointer-events-none rounded-2xl"></div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10 text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Pitt Street Dental Centre. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
