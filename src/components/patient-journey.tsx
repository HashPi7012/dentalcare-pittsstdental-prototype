"use client"
import React from 'react';
import { motion } from 'framer-motion';

const journeySteps = [
  { id: "01", title: "Blueprint", desc: "In-depth clinical assessment and digital smile design integration." },
  { id: "02", title: "Comfort", desc: "Stress-free preparation using advanced, needle-free laser systems." },
  { id: "03", title: "Fabrication", desc: "Precision 3D milling of your bespoke, custom-crafted restorations." },
  { id: "04", title: "Integration", desc: "Final placement with zero compromise on aesthetic excellence." }
];

export function PatientJourney() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-charcoal mb-4 tracking-tighter">
            Your Seamless <span className="text-gold-main">Experience</span>
          </h2>
          <p className="text-lg text-slate-grey font-outfit font-light max-w-2xl mx-auto">
            Our streamlined workflow is designed for high-performance professionals who demand excellence without compromise.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Line SVG */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 z-0">
             <svg width="100%" height="4" viewBox="0 0 1000 4" preserveAspectRatio="none" className="overflow-visible px-[12%]">
                <line x1="0" y1="2" x2="100%" y2="2" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-gold-light/30" />
                <motion.line 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  x1="0" y1="2" x2="100%" y2="2" stroke="currentColor" strokeWidth="3" className="text-gold-main" 
                />
             </svg>
          </div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-16 md:gap-4 md:px-10">
            {journeySteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 + (idx * 0.2) }}
                  className={`flex flex-col items-center text-center w-full md:w-1/4 ${!isEven ? 'ml-auto md:ml-0 w-3/4 md:w-1/4' : 'mr-auto md:mr-0 w-3/4 md:w-1/4'}`}
                >
                  <div className="w-24 h-24 rounded-full bg-off-white border-2 border-gold-main shadow-lg shadow-gold-main/20 flex items-center justify-center text-3xl font-heading font-bold text-gold-main mb-6 relative group bg-gold-glow">
                    <span className="relative z-10">{step.id}</span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{step.title}</h3>
                  <p className="text-slate-grey font-outfit font-light px-2">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Snake SVG Line - Behind items */}
          <div className="block md:hidden absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
              <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M 50%, 10% C 120%, 30% 120%, 40% 50%, 55% C -20%, 70% -20%, 80% 50%, 95%"
                  fill="none"
                  strokeWidth="3"
                  className="text-gold-main stroke-current"
                  strokeDasharray="8 8"
               />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
