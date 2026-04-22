"use client";

import React from 'react';
import { Button } from './ui/button';
import { FileText } from 'lucide-react';
import { useModals } from './modal-provider';

export function PricingBanner() {
  const { openEmailCapture } = useModals();

  return (
    <section className="py-28 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-3xl bg-charcoal/95 backdrop-blur-xl border border-gold-main/20 shadow-[0_0_60px_rgba(197,160,89,0.08)] p-10 md:p-14 relative overflow-hidden">
          {/* Decorative Shimmer */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-main/10 to-transparent -skew-x-12 translate-x-1/4"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-off-white mb-4">
                Transparent Pricing. <span className="text-gold-light">No Hidden Costs.</span>
              </h2>
              <p className="text-lg text-slate-300 font-outfit font-light">
                We believe in complete transparency. Review our detailed quotes, 0% interest payment plans, and on-the-spot health fund claims.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Button onClick={openEmailCapture} size="lg" className="bg-white text-charcoal hover:bg-off-white border-none shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 rounded-full active:scale-[0.97]">
                <FileText size={18} /> Get Transparent Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
