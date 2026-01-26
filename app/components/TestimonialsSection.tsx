"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Siyanah C.",
    text: "Vanmiddag hier gewaxt, de dame was erg professioneel en vriendelijk, en zowel haar techniek als haar ruimte waren hygiënisch. Ik had binnen de kortings uren geboekt dus het was ook nog eens erg voordelig. Al met al een heel goede ervaring gehad en ik kom in 4 weken terug",
    initial: "S",
    bg: "bg-blue-100",
    stars: 5,
  },
  {
    name: "Ellen B.",
    text: "ik was heel zenuwachtig want het was de eerste keer. maar de dame die mij hielp was erg vriendelijk en super grappig. zij heeft de ervaring echt minder pijnlijk gemaakt! 5 sterren!!",
    initial: "S",
    bg: "bg-orange-100",
    stars: 5,
  },
  {
    name: "Ralu",
    text: "Ik ben het afgelopen jaar van salon veranderd en ben zeer tevreden over de service. De behandelingen zijn altijd goed uitgevoerd en ik heb een fijne ervaring gehad.",
    initial: "R",
    bg: "bg-pink-100",
    stars: 5,
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index on scroll for mobile dots
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      // Calculate which card is mostly visible
      const index = Math.round(scrollPosition / width);
      setActiveIndex(Math.min(reviews.length - 1, Math.max(0, index)));
    }
  };

  return (
    <section className="relative w-full py-14 pb-22 overflow-hidden bg-white/50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-40 translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Hand-drawn scribble */}
      <div className="absolute left-[10%] top-[10%] opacity-10 pointer-events-none">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          className="text-primary-600"
        >
          <path
            d="M10,50 Q25,25 50,50 T90,50"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6"
          >
            Client <span className="text-primary-600 italic">Love</span>
          </motion.h2>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-primary-100 transition-colors duration-300 relative group"
            >
              <div className="absolute top-6 right-6 opacity-50 group-hover:opacity-100 transition-opacity">
                <GoogleIcon />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${review.bg} flex items-center justify-center text-secondary-900 font-bold font-serif text-lg`}
                >
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 text-sm">
                    {review.name}
                  </h4>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(review.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-secondary-600 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider (Hidden on Desktop) */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 px-1 hide-scrollbar -mx-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Spacer for left peek */}
            <div className="w-[1px] shrink-0 snap-start" />

            {reviews.map((review, i) => (
              <div
                key={`mobile-${i}`}
                className="w-[85vw] shrink-0 snap-center first:pl-4 last:pr-4"
              >
                <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 h-full flex flex-col relative">
                  <div className="absolute top-6 right-6">
                    <GoogleIcon />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full ${review.bg} flex items-center justify-center text-secondary-900 font-bold font-serif`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 text-sm">
                        {review.name}
                      </h4>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-secondary-600 text-sm leading-relaxed mb-1">
                    "{review.text}"
                  </p>
                </div>
              </div>
            ))}

            {/* Spacer for right peek */}
            <div className="w-[1px] shrink-0 snap-center" />
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 absolute bottom-0 left-0 right-0">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (scrollRef.current) {
                    const width = scrollRef.current.offsetWidth;
                    scrollRef.current.scrollTo({
                      left: width * i,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-8 h-2 bg-primary-600"
                    : "w-2 h-2 bg-primary-200"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
