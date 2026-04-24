"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Clock, Coffee, Sparkles, Moon, Monitor } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import { motion, useInView, animate } from 'framer-motion';

function AnimatedPercent() {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState("0.0");

  useEffect(() => {
    if (!isInView) return;
    
    const controls = animate(0, 99.8, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(value.toFixed(1));
      }
    });

    return () => controls.stop();
  }, [isInView]);

  return <span ref={ref} className="tabular-nums">{count}%</span>;
}

export function ExperienceGrid() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-off-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-charcoal mb-6 leading-tight tracking-tighter">
              The Five-Star <span className="text-gold-main">Differentiator</span>
            </h2>
            <p className="text-lg text-slate-grey font-outfit font-light">
              We've engineered a luxury environment that removes clinical anxiety, guaranteeing aesthetic excellence without compromising your time or comfort.
            </p>
          </div>
        </div>

        <div className={`relative transition-[max-height] duration-1000 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[3000px]' : 'max-h-[850px] md:max-h-[3000px]'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[260px]">
            {/* Tile 1 - Large (2x2): CEREC Same-Day Crowns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 row-span-2 bg-charcoal rounded-3xl border border-gold-light/10 shadow-sm flex flex-col justify-end relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src="/images/experience/cerec_tech.png" 
                alt="CEREC Technology" 
                fill 
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent"></div>
              
              <div className="absolute top-6 right-6 md:top-10 md:left-10 md:right-auto w-12 h-12 md:w-16 md:h-16 bg-gold-main/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform z-20">
                <Clock className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              <div className="relative z-10 p-6 md:p-12">
                <h3 className="text-2xl md:text-3xl font-jakarta font-bold text-white mb-4">CEREC Same-Day Crowns</h3>
                <p className="text-white/80 text-sm md:text-base font-outfit font-light leading-relaxed max-w-lg">
                  Replace the traditional 2-week waiting period with a single 2-hour session. Premium porcelain produced on-site while you relax in our spa-grade suite.
                </p>
              </div>
            </motion.div>

            {/* Tile 2 - Wide (2x1): Five-Star Spa Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-white rounded-3xl border border-gold-light/10 shadow-sm flex items-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src="/images/experience/spa_lounge.png" 
                alt="Spa Amenities" 
                fill 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
              
              <div className="relative z-10 flex items-center gap-8 p-8">
                <div className="min-w-[48px] h-12 md:min-w-[64px] md:h-16 bg-gold-main/10 rounded-2xl flex items-center justify-center text-gold-main">
                  <Coffee className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-jakarta font-bold text-charcoal mb-1">Five-Star Amenities</h3>
                  <p className="text-sm text-slate-grey font-outfit">Aromatherapy, noise-canceling headphones, and a signature spa menu.</p>
                </div>
              </div>
            </motion.div>

            {/* Tile 3 - Small (1x1): Needle-Free Laser Care */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 bg-white rounded-3xl border border-gold-light/10 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src="/images/experience/laser_dental_tech.png" 
                alt="Needle-Free Laser" 
                fill 
                className="object-cover opacity-20 md:opacity-10 group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/90"></div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
                <div className="absolute top-4 right-4 md:static text-gold-main bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 p-1.5 md:p-0 rounded-lg">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg font-jakarta font-bold text-charcoal">Needle-Free<br />Laser Excellence</h3>
              </div>
            </motion.div>

            {/* Tile 4 - Small (1x1): Sleep Dentistry (NEW) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="md:col-span-1 bg-white rounded-3xl border border-gold-light/10 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src="/images/experience/sleep_dentistry.png" 
                alt="Sleep Dentistry" 
                fill 
                className="object-cover opacity-20 md:opacity-10 group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/90"></div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
                <div className="absolute top-4 right-4 md:static text-gold-main bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 p-1.5 md:p-0 rounded-lg">
                  <Moon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-jakarta font-bold text-charcoal mb-1">Sleep Dentistry</h3>
                  <p className="text-xs text-slate-grey font-outfit">Anxiety-free care with IV sedation and sleep options.</p>
                </div>
              </div>
            </motion.div>

            {/* Tile 5 - Small (1x1): Digital Smile Design (NEW) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-1 bg-white rounded-3xl border border-gold-light/10 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src="/images/experience/digital_smile_design.png" 
                alt="Digital Smile Design" 
                fill 
                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/90"></div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
                <div className="absolute top-4 right-4 md:static text-gold-main bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 p-1.5 md:p-0 rounded-lg">
                  <Monitor className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-jakarta font-bold text-charcoal mb-1">Digital Smile Design</h3>
                  <p className="text-xs text-slate-grey font-outfit">See your new smile before treatment begins.</p>
                </div>
              </div>
            </motion.div>

            {/* Tile 6 - Decorative/CTA (1x1): 99.8% Success Rate (Animated) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="md:col-span-1 bg-gold-main p-8 rounded-3xl shadow-lg flex flex-col justify-between group hover:shadow-gold-main/20 transition-all duration-500"
            >
              <div className="text-white/80 text-xs font-jakarta tracking-widest uppercase mb-4">Precision</div>
              <div className="text-white text-3xl font-jakarta font-extrabold leading-none">
                <AnimatedPercent /><br />Success Rate
              </div>
            </motion.div>
          </div>
          
          {/* Mobile Fade Overlay when not expanded */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white to-transparent pointer-events-none md:hidden"></div>
          )}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
           <Button onClick={() => setIsExpanded(!isExpanded)} className="rounded-full px-8 py-6 font-jakarta font-semibold bg-charcoal text-white hover:bg-gold-main transition-colors shadow-lg active:scale-95">
              {isExpanded ? "Show Less" : "Explore All Differentiators"}
           </Button>
        </div>

      </div>
    </section>
  );
}
