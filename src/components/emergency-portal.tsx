"use client"
import React from 'react';
import { Button } from './ui/button';
import { PhoneCall, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmergencyPortal() {
  return (
    <section id="emergency" className="py-24 bg-rosewood/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rosewood/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Priority Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rosewood/10 border border-rosewood/20 text-rosewood font-medium text-sm tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-rosewood animate-pulse"></span>
                Priority Response
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-charcoal leading-tight tracking-tighter mb-4">
                Immediate Care <br /> When You Need It.
              </h2>
              <p className="text-lg text-slate-grey font-outfit font-light">
                Submit this priority form and our clinical concierge will contact you within 15 minutes during operating hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-rosewood/10 shadow-lg shadow-rosewood/5">
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-charcoal ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full h-12 px-4 rounded-xl border border-slate-grey/20 bg-off-white focus:outline-none focus:border-rosewood/50 font-outfit" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-charcoal ml-1">Phone Number</label>
                    <input type="tel" placeholder="0400 000 000" className="w-full h-12 px-4 rounded-xl border border-slate-grey/20 bg-off-white focus:outline-none focus:border-rosewood/50 font-outfit" />
                  </div>
                </div>
                <div className="space-y-1 mt-2">
                  <label className="text-sm font-medium text-charcoal ml-1">Briefly Describe Your Emergency</label>
                  <textarea rows={3} placeholder="E.g., Severe toothache, chipped veneer..." className="w-full py-3 px-4 rounded-xl border border-slate-grey/20 bg-off-white focus:outline-none focus:border-rosewood/50 font-outfit resize-none"></textarea>
                </div>
                <Button className="w-full h-14 mt-4 rounded-xl bg-rosewood hover:bg-rosewood/90 text-white font-heading font-semibold text-lg border-0 animate-calm-pulse">
                  Request Priority Contact
                </Button>
              </form>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center text-sm font-outfit font-medium text-charcoal">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-grey/10 shadow-sm">
                 <PhoneCall size={16} className="text-rosewood" />
                 <a href="tel:+61200000000">+61 2 0000 0000</a>
              </div>
              <div className="flex items-center gap-2">
                 <Clock size={16} className="text-rosewood" />
                 <span>Mon-Sun: 8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Map/Quick Nav Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full relative overflow-hidden rounded-[2.5rem] bg-white border border-rosewood/10 shadow-xl shadow-charcoal/5 min-h-[400px] lg:min-h-full"
          >
            {/* The Map */}
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center isolate">
                {/* Simulated Google Map for "Premium Aesthetic" */}
                {/* We use an iframe in production, here we make a stylized placeholder to match aesthetic requirements */}
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Sydney+CBD&zoom=14&size=600x600&maptype=roadmap&style=feature:all|element:geometry|color:0xf5f5f5&style=feature:water|element:geometry|color:0xc9c9c9&style=feature:water|element:labels.text.fill|color:0x9e9e9e')] bg-cover bg-center mix-blend-multiply opacity-50 block md:hidden"></div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.836855171732!2d151.20577907573617!3d-33.8680650732269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae412d8a0eb3%3A0xc6e4b8590ed8471c!2sPitt%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2s!4v1713401031306!5m2!1sen!2s" className="absolute inset-0 w-full h-full border-0 filter grayscale contrast-125 opacity-70" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="absolute inset-0 bg-rosewood/5 pointer-events-none mix-blend-multiply"></div>
            </div>

            {/* Floating Navigation Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-charcoal text-lg mb-1">Pitt Street Dental Centre</h4>
                <p className="font-outfit text-sm text-slate-grey flex items-center gap-1">
                  <MapPin size={14} /> Level 2, 100 Pitt St, Sydney CBD
                </p>
              </div>
              <Button onClick={() => window.open("https://maps.google.com/?q=Pitt+St,+Sydney", "_blank")} className="rounded-full bg-charcoal hover:bg-black text-white px-6 w-full sm:w-auto h-12 flex-shrink-0 border-0">
                Get Directions
              </Button>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
