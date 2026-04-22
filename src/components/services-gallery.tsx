"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useModals } from './modal-provider';
import { Clock, Shield, Sparkles, Timer, Heart, Leaf } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: "Porcelain Veneers",
    description: "Achieve a flawless, natural-looking smile. Custom-crafted to align with your facial aesthetics.",
    imageSrc: "/images/veneers.png",
    stats: [
      { icon: <Clock size={16} />, text: "2-3 Sessions" },
      { icon: <Shield size={16} />, text: "15+ Years" }
    ]
  },
  {
    title: "Invisalign Aligners",
    description: "Discreet and sophisticated teeth straightening. Digital 3D scanning ensures precision fit.",
    imageSrc: "/images/invisalign.png",
    stats: [
      { icon: <Clock size={16} />, text: "6-18 Months" },
      { icon: <Sparkles size={16} />, text: "Invisible" }
    ]
  },
  {
    title: "Teeth Whitening",
    description: "Up to 8 shades lighter in just one session. The most effective way to brighten your smile.",
    imageSrc: "/images/whitening.png",
    stats: [
      { icon: <Timer size={16} />, text: "45 Minutes" },
      { icon: <Sparkles size={16} />, text: "Up to 8 Shades" }
    ]
  },
  {
    title: "Orthodontic Braces",
    description: "Precision-engineered bracket systems for complex alignment. Modern, low-profile options available.",
    imageSrc: "/images/braces.png",
    stats: [
      { icon: <Clock size={16} />, text: "12-24 Months" },
      { icon: <Shield size={16} />, text: "Certified" }
    ]
  },
  {
    title: "Gum Contouring",
    description: "Sculpt a symmetrical, balanced gum line for a more harmonious smile frame.",
    imageSrc: "/images/gum_contouring.png",
    stats: [
      { icon: <Timer size={16} />, text: "1 Session" },
      { icon: <Heart size={16} />, text: "Minimally Invasive" }
    ]
  },
  {
    title: "Gum Grafting",
    description: "Restore receding gums with precision tissue grafting for long-term periodontal health.",
    imageSrc: "/images/gum_grafting.png",
    stats: [
      { icon: <Clock size={16} />, text: "1-2 Sessions" },
      { icon: <Leaf size={16} />, text: "Natural Healing" }
    ]
  }
];

export function ServicesGallery() {
  const { openEmailCapture } = useModals();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="services" className="py-24 bg-off-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-charcoal mb-4 tracking-tighter">
              Curated Cosmetic <span className="text-gold-main">Suite</span>
            </h2>
            <p className="text-lg text-slate-grey font-outfit font-light">
              Explore our boutique treatments designed for high-performance professionals who demand perfection.
            </p>
          </div>
          <Button onClick={openEmailCapture} variant="outline" size="lg" className="hidden md:flex rounded-full px-8 py-6 font-heading font-semibold border-gold-main/20 hover:bg-gold-main/5 text-gold-main">
            Download 2026 Price List
          </Button>
        </div>

        <div className={`relative transition-[max-height] duration-1000 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[5000px]' : 'max-h-[1850px] md:max-h-[5000px]'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 + (idx % 3) * 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white rounded-3xl p-6 border border-gold-light/10 shadow-sm group hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col bg-gold-glow"
              >
                {/* Image */}
                <div className="aspect-[4/3] rounded-2xl bg-charcoal/5 overflow-hidden relative mb-6">
                  <Image 
                    src={service.imageSrc} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx < 2}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">{service.title}</h3>
                  <p className="text-slate-grey leading-relaxed font-outfit font-light mb-6 flex-1">{service.description}</p>
                  
                  <div className="flex items-center gap-4 border-t border-slate-grey/10 pt-4 mb-6">
                    {service.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-slate-grey uppercase tracking-wider">
                        <span className="text-gold-main">{stat.icon}</span>
                        {stat.text}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full rounded-full border-charcoal/10 hover:bg-charcoal hover:text-white transition-colors duration-300 active:scale-[0.97]">
                    Explore Treatment
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Fade Overlay when not expanded */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white to-transparent pointer-events-none md:hidden"></div>
          )}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 md:hidden">
           <Button onClick={() => setIsExpanded(!isExpanded)} className="rounded-full px-8 py-6 font-heading font-semibold bg-charcoal text-white hover:bg-gold-main transition-colors shadow-lg w-full max-w-sm active:scale-95">
              {isExpanded ? "Show Less" : "Explore Full Suite"}
           </Button>
           <Button onClick={openEmailCapture} variant="outline" className="rounded-full px-8 py-6 font-heading font-semibold border-gold-main/20 text-gold-main w-full max-w-sm">
             Download 2026 Price List
           </Button>
        </div>

      </div>
    </section>
  );
}
