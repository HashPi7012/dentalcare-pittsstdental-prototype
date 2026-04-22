"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Pitt St Dental is by far the most friendliest, professional and caring dentistry I have been to. Kim is a true professional with a fine eye to detail and will always make sure you are comfortable during any procedure. I had 10 veneers...",
    name: "D. David Oswin",
    date: "March 2026",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    quote: "Dr Michael Cai is a very talented dentist who has exemplary knowledge and skills to provide first class dentistry. Val, the practice manager, and her team provide professional, caring service. I highly recommend Pitt Street dental.",
    name: "Joe J.",
    date: "March 2026",
    avatar: "https://i.pravatar.cc/150?u=joe"
  },
  {
    quote: "Highly recommend Pitt St Dental! It's been a few years since we have been going here regularly for our dental care and can say without a doubt that this practice is exceptional.",
    name: "Myura Arora",
    date: "March 2026",
    avatar: "https://i.pravatar.cc/150?u=myura"
  },
  {
    quote: "The team at Pitt Street Dental always provide the highest levels of service. Special thanks to my dental health therapist Angela Alcala. She takes care to ensure that any procedure is thorough and painless.",
    name: "Alan Spindel",
    date: "March 2026",
    avatar: "https://i.pravatar.cc/150?u=alan"
  },
  {
    quote: "I have had the pleasure of being a patient at Pitt St Dental Centre for some time now, and I can wholeheartedly say that this practice is outstanding in every aspect. They are very popular and frequented by everyone from celebrities to...",
    name: "Lil D.",
    date: "March 2026",
    avatar: "https://i.pravatar.cc/150?u=lil"
  },
  {
    quote: "Best dentists I have ever been to. I even travelled to Pitt Street Dental when we lived interstate to see them.",
    name: "Nikki J.",
    date: "March 2026",
    avatar: "https://i.pravatar.cc/150?u=nikki"
  },
  {
    quote: "Pitt Street Dental provides a great service and are always pleasant and honest. All staff are super friendly.",
    name: "Damien M.",
    date: "March 2026",
    avatar: "https://i.pravatar.cc/150?u=damien"
  },
  {
    quote: "Dr Michael Cai is the best dentist I've had ever and he's very friendly and gentle with excellent skills.",
    name: "Hayden W.",
    date: "March 2026",
    avatar: "https://i.pravatar.cc/150?u=hayden"
  }
];

const GoogleVerified = () => (
  <div className="flex items-center gap-1.5 bg-off-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.72 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
      <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.72 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.71 16.69 5.84 14.12H2.17V16.97C3.99 20.59 7.69 23 12 23Z" fill="#34A853"/>
      <path d="M5.84 14.12C5.62 13.46 5.5 12.75 5.5 12C5.5 11.25 5.62 10.54 5.84 9.88V7.03H2.17C1.43 8.5 1 10.2 1 12C1 13.8 1.43 15.5 2.17 16.97L5.84 14.12Z" fill="#FBBC05"/>
      <path d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.03L19.35 3.89C17.45 2.13 14.97 1 12 1C7.69 1 3.99 3.41 2.17 7.03L5.84 9.88C6.71 7.31 9.13 5.38 12 5.38Z" fill="#EA4335"/>
    </svg>
    <span className="text-[10px] font-heading font-bold text-charcoal tracking-wide">VERIFIED</span>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
    </svg>
  </div>
);

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds per review
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-off-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <p className="text-xs font-heading font-semibold text-gold-main tracking-[0.2em] uppercase mb-4">
            Patient Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold text-charcoal mb-4">
            Don't just take our word for it
          </h2>
        </div>

        {/* Center-Stage Carousel */}
        <div className="relative h-[450px] md:h-[350px] flex items-center justify-center max-w-6xl mx-auto w-full">
          {testimonials.map((testimonial, idx) => {
            const offset = (idx - activeIndex + testimonials.length) % testimonials.length;
            
            let position = 'hidden';
            if (offset === 0) position = 'center';
            else if (offset === 1) position = 'right';
            else if (offset === testimonials.length - 1) position = 'left';

            let xOffset = 200;
            if (position === 'center') xOffset = 0;
            else if (position === 'left') xOffset = -105;
            else if (position === 'right') xOffset = 105;
            else if (offset > testimonials.length / 2) xOffset = -200;

            return (
              <motion.div
                key={testimonial.name}
                initial={false}
                animate={{
                  x: `${xOffset}%`,
                  scale: position === 'center' ? 1 : position === 'hidden' ? 0.8 : 0.85,
                  opacity: position === 'center' ? 1 : position === 'hidden' ? 0 : 0.4,
                  zIndex: position === 'center' ? 20 : position === 'hidden' ? 0 : 10,
                  filter: position === 'center' ? 'blur(0px)' : 'blur(3px)'
                }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute w-[90%] md:w-full max-w-lg bg-white rounded-3xl p-8 md:p-10 border border-gold-main/20 shadow-xl flex flex-col justify-between"
                style={{ originX: 0.5, originY: 0.5, height: '100%' }}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1 text-gold-main">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <GoogleVerified />
                  </div>
                  
                  <p className="text-base md:text-lg font-outfit font-light text-charcoal mb-8 italic line-clamp-4">
                    "{testimonial.quote.replace(/"/g, '')}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-light/30 flex-shrink-0">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-charcoal">{testimonial.name}</h4>
                    <p className="text-xs font-outfit text-slate-grey">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                idx === activeIndex
                  ? 'bg-gold-main w-6'
                  : 'bg-gold-light/40 hover:bg-gold-main/60'
              }`}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
