"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const transformations = [
  { src: "/images/transformations/2 weeks apart.webp", procedure: "Porcelain Veneers", desc: "Complete Smile Redesign — 2 Weeks" },
  { src: "/images/transformations/2 weeks apart_2.webp", procedure: "Full Mouth Restoration", desc: "Full Arch Reconstruction — 2 Weeks" },
  { src: "/images/transformations/2 weeks apart_3.webp", procedure: "Porcelain Veneers", desc: "Alignment & Shade Perfection — 2 Weeks" },
  { src: "/images/transformations/2 weeks apart_4.webp", procedure: "Porcelain Veneers", desc: "Total Smile Transformation — 2 Weeks" },
  { src: "/images/transformations/2 weeks apart_5.webp", procedure: "Porcelain Veneers", desc: "Natural-Look Veneer Suite — 2 Weeks" },
  { src: "/images/transformations/2 weeks apart_6.webp", procedure: "Porcelain Veneers", desc: "Cosmetic Refinement — 2 Weeks" },
  { src: "/images/transformations/12 months apart.png", procedure: "Invisalign Aligners", desc: "Invisible Alignment Journey — 12 Months" },
  { src: "/images/transformations/12 months apart.webp", procedure: "Invisalign Aligners", desc: "Complete Orthodontic Correction — 12 Months" },
  { src: "/images/transformations/vineers 2 weeks and invisalign 12 months.webp", procedure: "Veneers + Invisalign", desc: "Combined Veneer & Alignment Makeover" },
];

export function TransformationGallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="transformations" className="py-24 bg-off-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-charcoal mb-4 tracking-tighter">
            Beyond the Smile: <span className="text-gold-main">Patient Journeys</span>
          </h2>
          <p className="text-lg text-slate-grey font-outfit font-light">
            Verified patient results from our Sydney CBD clinic. Every smile tells a story of precision and artistry.
          </p>
        </div>

        <div className={`relative transition-[max-height] duration-1000 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[5000px]' : 'max-h-[1350px] md:max-h-[850px]'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transformations.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.05 }}
                  className={`relative group rounded-2xl overflow-hidden bg-charcoal/5 aspect-square transition-all duration-500`}
                >
                  <Image
                    src={item.src}
                    alt={`${item.procedure} - ${item.desc}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  
                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-xs font-heading font-semibold text-gold-light tracking-wider uppercase mb-1">
                      {item.procedure}
                    </div>
                    <div className="text-sm text-white/90 font-outfit font-light">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Gradient reveal overlay + CTA */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-center pb-4 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, var(--color-off-white) 70%)'
                }}
              >
                <button
                  onClick={() => setIsExpanded(true)}
                  className="pointer-events-auto px-8 py-3 rounded-full bg-charcoal text-white font-heading font-semibold text-sm tracking-wide hover:bg-gold-main transition-colors duration-300 shadow-xl active:scale-[0.97]"
                >
                  Explore All Transformations
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
