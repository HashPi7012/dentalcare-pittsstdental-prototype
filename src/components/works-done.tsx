"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// Custom branded SVG dental icons
const ImplantIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4C22.2 4 24 5.8 24 8V10H16V8C16 5.8 17.8 4 20 4Z" fill="currentColor"/>
    <rect x="17" y="10" width="6" height="3" rx="0.5" fill="currentColor"/>
    <path d="M17.5 13H22.5L22 17H18L17.5 13Z" fill="currentColor"/>
    <path d="M18 17H22L21.5 21H18.5L18 17Z" fill="currentColor"/>
    <path d="M18.5 21H21.5L21 25H19L18.5 21Z" fill="currentColor"/>
    <path d="M19 25H21L20.5 30H19.5L19 25Z" fill="currentColor"/>
    <path d="M19.5 30H20.5L20 36L19.5 30Z" fill="currentColor"/>
  </svg>
);

const InvisalignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18C6 18 10 12 20 12C30 12 34 18 34 18V20C34 20 30 24 20 24C10 24 6 20 6 20V18Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="12" y="15" width="3" height="5" rx="1" fill="currentColor" opacity="0.6"/>
    <rect x="16" y="14.5" width="3" height="6" rx="1" fill="currentColor" opacity="0.6"/>
    <rect x="20" y="14.5" width="3" height="6" rx="1" fill="currentColor" opacity="0.6"/>
    <rect x="24" y="15" width="3" height="5" rx="1" fill="currentColor" opacity="0.6"/>
  </svg>
);

const CrownIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16L14 8L20 14L26 8L32 16V20C32 20 28 26 20 26C12 26 8 20 8 20V16Z" fill="currentColor"/>
    <path d="M10 26C10 26 13 32 20 32C27 32 30 26 30 26" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="14" cy="8" r="2" fill="currentColor"/>
    <circle cx="20" cy="14" r="2" fill="currentColor"/>
    <circle cx="26" cy="8" r="2" fill="currentColor"/>
  </svg>
);

const VeneerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10C14 10 16 8 20 8C24 8 26 10 26 10V28C26 28 24 32 20 32C16 32 14 28 14 28V10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 12C16 12 17.5 10 20 10C22.5 10 24 12 24 12V26C24 26 22.5 30 20 30C17.5 30 16 26 16 26V12Z" fill="currentColor" opacity="0.3"/>
    <path d="M10 18L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 22L14 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="18" r="1.5" fill="currentColor"/>
    <circle cx="8" cy="22" r="1.5" fill="currentColor"/>
  </svg>
);

const RehabIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 20C6 20 10 14 20 14C30 14 34 20 34 20C34 20 30 26 20 26C10 26 6 20 6 20Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="10" y="17" width="3" height="5" rx="1" fill="currentColor"/>
    <rect x="14" y="16" width="3" height="7" rx="1" fill="currentColor"/>
    <rect x="18" y="16" width="3" height="7" rx="1" fill="currentColor"/>
    <rect x="22" y="16" width="3" height="7" rx="1" fill="currentColor"/>
    <rect x="26" y="17" width="3" height="5" rx="1" fill="currentColor"/>
    <path d="M30 10L33 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M33 10L36 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="33" cy="7" r="1" fill="currentColor"/>
    <circle cx="36" cy="7" r="1" fill="currentColor"/>
  </svg>
);

const stats = [
  { icon: <ImplantIcon />, target: 5200, label: "IMPLANTS" },
  { icon: <InvisalignIcon />, target: 2500, label: "INVISALIGNS" },
  { icon: <CrownIcon />, target: 21200, label: "DENTAL CROWNS" },
  { icon: <VeneerIcon />, target: 18600, label: "DENTAL VENEERS" },
  { icon: <RehabIcon />, target: 6800, label: "FULL MOUTH REHAB" },
];

function AnimatedCount({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const startValue = Math.floor(target * 0.7);
    
    const controls = animate(startValue, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value).toLocaleString());
      }
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}+
    </span>
  );
}

export function WorksDone() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-center gap-4 justify-center md:justify-start ${idx < stats.length - 1 ? 'md:border-r md:border-gold-light/20' : ''} md:px-6 ${idx === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className="text-gold-main flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-charcoal leading-none">
                  <AnimatedCount target={stat.target} />
                </div>
                <div className="text-[10px] font-heading font-semibold text-slate-grey/70 tracking-[0.15em] uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
