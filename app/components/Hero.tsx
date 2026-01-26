"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/app/lib/config";
import Image from "next/image";

export default function Hero() {
  const handleBookClick = (
    e: React.MouseEvent,
    location: "amsterdam" | "theHague",
  ) => {
    e.preventDefault();

    // 1. Dispatch event & Storage
    if (typeof window !== "undefined") {
      sessionStorage.setItem("selectedLocation", location);
      window.dispatchEvent(
        new CustomEvent("changeLocation", { detail: location }),
      );
    }

    // 2. Manual Smooth Scroll
    const section = document.getElementById("appointment");
    if (section) {
      // Offset for fixed header if needed (e.g. 100px)
      // If smooth scroll is set in CSS, scrollTo works.
      // We use a slight offset calculation just in case.
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    // Added pt-20 to account for the fixed header
    // Use min-h-screen for full viewport height on mobile, but allow growing content
    <section className="relative w-full min-h-[85dvh] sm:min-h-[85vh] lg:h-[95vh] flex flex-col justify-end lg:justify-center pb-8 sm:pb-20 lg:pb-0 pt-24 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0 bg-white">
        <Image
          src="/images/inside-salon.png"
          alt="LadyWax Salon Interieur"
          fill
          className="object-cover"
          style={{ objectPosition: "0% 100%" }}
          priority
          sizes="100vw"
        />

        {/* LIGHT OVERLAY STRATEGY */}
        {/* 1. White fade over the whole image to lighten it (making it "hygienic/bright") */}
        <div className="absolute inset-0 bg-white/20" />

        {/* 2. Strong gradient specifically for text readability */}
        {/* Using a dual-gradient approach: 
            - One from bottom to cover text area securely
            - Blending into secondary-50 for seamless transition 
            - Increased height on mobile to h-[85%] for extra safety on small screens
        */}
        <div className="absolute inset-x-0 bottom-0 h-[85%] lg:h-[75%] bg-gradient-to-t from-secondary-50 from-10% via-white/95 via-40% to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center lg:justify-center">
          {/* Badge - Adjusted for Light Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-full pl-3 pr-5 py-2 flex items-center gap-3 shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-primary-800 text-xs sm:text-sm font-bold tracking-widest uppercase">
                7 Dagen Open • 10:00 - 21:00
              </span>
            </div>
          </motion.div>

          {/* Heading - Corporate Blue / Brand Color */}
          <div className="relative">
            {/* Ambient Glow for Readability on Mobile - Modern Clean Approach */}
            {/* This creates a soft light cloud behind the text only when needed, invisible on white backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/60 blur-[60px] -z-10 rounded-full pointer-events-none lg:bg-transparent" />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary-900 mb-4 sm:mb-6 font-serif leading-[1.1]"
            >
              De Kunst van <br />
              <span className="text-primary-600">Gladde Huid.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-secondary-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Ervaar de toonaangevende waxing studio, exclusief voor vrouwen.{" "}
              <br className="hidden sm:block" />
              Professionele behandelingen in Amsterdam & Den Haag.
            </motion.p>
          </div>

          {/* Location CTAs - Light Theme Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-sm sm:max-w-lg"
          >
            {/* Amsterdam Card */}
            <div className="group relative block h-full bg-white rounded-2xl p-4 sm:p-6 border border-primary-100 shadow-lg hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 transform hover:-translate-y-1">
              {/* Directions Button - Top Right Absolute */}
              <a
                href={siteConfig.locations.amsterdam.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-2 -right-2 p-2 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 hover:scale-105 transition-all z-20"
                aria-label="Route naar Amsterdam"
                title="Routebeschrijving"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                </svg>
              </a>

              <div className="flex flex-col justify-between h-full pt-1">
                <a
                  href="#appointment"
                  onClick={(e) => handleBookClick(e, "amsterdam")}
                  className="block cursor-pointer"
                >
                  <div className="flex items-center justify-center gap-2 mb-2 pr-6 pl-6">
                    <h3 className="font-bold text-primary-900 text-lg sm:text-xl">
                      Amsterdam
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-600 truncate mb-4 font-medium text-center">
                    {siteConfig.locations.amsterdam.address}
                  </p>
                </a>

                <div className="w-full">
                  <a
                    href="#appointment"
                    onClick={(e) => handleBookClick(e, "amsterdam")}
                    className="block w-full bg-primary-50 text-primary-700 text-xs sm:text-sm py-3 rounded-lg text-center font-bold uppercase tracking-wider hover:bg-primary-600 hover:text-white transition-colors cursor-pointer"
                  >
                    Nu Boeken
                  </a>
                </div>
              </div>
            </div>

            {/* The Hague Card */}
            <div className="group relative block h-full bg-white rounded-2xl p-4 sm:p-6 border border-primary-100 shadow-lg hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 transform hover:-translate-y-1">
              {/* Directions Button - Top Right Absolute */}
              <a
                href={siteConfig.locations.theHague.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-2 -right-2 p-2 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 hover:scale-105 transition-all z-20"
                aria-label="Route naar Den Haag"
                title="Routebeschrijving"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                </svg>
              </a>

              <div className="flex flex-col justify-between h-full pt-1">
                <a
                  href="#appointment"
                  onClick={(e) => handleBookClick(e, "theHague")}
                  className="block cursor-pointer"
                >
                  <div className="flex items-center justify-center gap-2 mb-2 pr-6 pl-6">
                    <h3 className="font-bold text-primary-900 text-lg sm:text-xl">
                      Den Haag
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-600 truncate mb-4 font-medium text-center">
                    {siteConfig.locations.theHague.address}
                  </p>
                </a>

                <div className="w-full">
                  <a
                    href="#appointment"
                    onClick={(e) => handleBookClick(e, "theHague")}
                    className="block w-full bg-primary-50 text-primary-700 text-xs sm:text-sm py-3 rounded-lg text-center font-bold uppercase tracking-wider hover:bg-primary-600 hover:text-white transition-colors cursor-pointer"
                  >
                    Nu Boeken
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
