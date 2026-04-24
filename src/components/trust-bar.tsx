"use client"
import React from 'react';
import Image from 'next/image';

const accreditations = Array.from({ length: 12 }).map((_, i) => ({
  src: `/images/Acreditations/acred-v2-${i + 1}.png`,
  alt: `Accreditation ${i + 1}`,
}));

export function TrustBar() {
  return (
    <section className="py-6 bg-off-white border-y border-gold-main/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-center text-xs font-heading font-semibold text-slate-grey/60 tracking-[0.2em] uppercase">
          Accredited & Recognised By
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-off-white to-transparent z-10 pointer-events-none"></div>
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-off-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee-scroll w-max">
          {/* First set */}
          {accreditations.map((acc, idx) => (
            <div
              key={`a-${idx}`}
              className="flex-shrink-0 mx-6 md:mx-12 flex items-center justify-center h-20 md:h-[136px]"
            >
              <Image
                src={acc.src}
                alt={acc.alt}
                width={400}
                height={160}
                className="object-contain h-16 md:h-32 w-auto"
                priority={idx < 4}
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {accreditations.map((acc, idx) => (
            <div
              key={`b-${idx}`}
              className="flex-shrink-0 mx-6 md:mx-12 flex items-center justify-center h-20 md:h-[136px]"
            >
              <Image
                src={acc.src}
                alt={acc.alt}
                width={400}
                height={160}
                className="object-contain h-16 md:h-32 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
