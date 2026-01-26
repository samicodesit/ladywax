"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/app/lib/config";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  // Removed opacity fade as requested

  const handleBookClick = (
    e: React.MouseEvent,
    location: "amsterdam" | "theHague",
  ) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      sessionStorage.setItem("selectedLocation", location);
      window.dispatchEvent(
        new CustomEvent("changeLocation", { detail: location }),
      );
    }

    const section = document.getElementById("appointment");
    if (section) {
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
    <>
      {/* 
        --------------------------------------------------
        TABLET & MOBILE HERO (Original Design)
        Visible on screens SMALLER than XL (includes tablets, iPad Pro Portrait)
        --------------------------------------------------
      */}
      <section className="relative w-full min-h-[85dvh] sm:min-h-[85vh] xl:hidden flex flex-col justify-end pb-8 sm:pb-20 pt-24 overflow-hidden sm:portrait:mt-[-200px]">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0 bg-white">
          <Image
            src="/images/inside-salon.png"
            alt="LadyWax Salon Interieur"
            fill
            className="object-cover object-[0%_100%] !top-[-50px]"
            priority
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-secondary-50 from-10% via-white/95 via-40% to-transparent" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center h-full justify-center">
            {/* Badge */}
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

            {/* Heading */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/60 blur-[60px] -z-10 rounded-full pointer-events-none" />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-bold text-primary-900 mb-4 sm:mb-6 font-serif leading-[1.1]"
              >
                <span className="text-3xl sm:text-5xl italic">
                  Speciaal voor Vrouwen
                </span>
                <br />
                <span className="text-primary-600">Professioneel Waxen.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl text-secondary-600 mb-10 max-w-sm sm:max-w-xl mx-auto leading-relaxed font-medium"
              >
                Ervaar de toonaangevende waxing studio, exclusief voor vrouwen.{" "}
                <br className="hidden sm:block" />
                <span className="hidden sm:inline">

                Professionele behandelingen in Amsterdam & Den Haag.
                </span>
              </motion.p>
            </div>

            {/* Location CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-sm sm:max-w-lg"
            >
              {/* Amsterdam Card */}
              <div className="group relative block h-full bg-white rounded-2xl p-4 sm:p-6 border border-primary-100 shadow-lg hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 transform hover:-translate-y-1">
                <a
                  href={siteConfig.locations.amsterdam.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -top-2 -right-2 p-2 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 hover:scale-105 transition-all z-20"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                  </svg>
                </a>
                <div className="flex flex-col justify-between h-full pt-1">
                  <div
                    onClick={(e) => handleBookClick(e, "amsterdam")}
                    className="block cursor-pointer"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="font-bold text-primary-900 text-lg sm:text-xl">
                        Amsterdam
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary-600 truncate mb-4 font-medium text-center">
                      {siteConfig.locations.amsterdam.address}
                    </p>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={(e) => handleBookClick(e, "amsterdam")}
                      className="block w-full bg-primary-50 text-primary-700 text-xs sm:text-sm py-3 rounded-lg text-center font-bold uppercase tracking-wider hover:bg-primary-600 hover:text-white transition-colors cursor-pointer"
                    >
                      Nu Boeken
                    </button>
                  </div>
                </div>
              </div>

              {/* The Hague Card */}
              <div className="group relative block h-full bg-white rounded-2xl p-4 sm:p-6 border border-primary-100 shadow-lg hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 transform hover:-translate-y-1">
                <a
                  href={siteConfig.locations.theHague.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -top-2 -right-2 p-2 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 hover:scale-105 transition-all z-20"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                  </svg>
                </a>
                <div className="flex flex-col justify-between h-full pt-1">
                  <div
                    onClick={(e) => handleBookClick(e, "theHague")}
                    className="block cursor-pointer"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="font-bold text-primary-900 text-lg sm:text-xl">
                        Den Haag
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary-600 truncate mb-4 font-medium text-center">
                      {siteConfig.locations.theHague.address}
                    </p>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={(e) => handleBookClick(e, "theHague")}
                      className="block w-full bg-primary-50 text-primary-700 text-xs sm:text-sm py-3 rounded-lg text-center font-bold uppercase tracking-wider hover:bg-primary-600 hover:text-white transition-colors cursor-pointer"
                    >
                      Nu Boeken
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        --------------------------------------------------
        DESKTOP HERO (New "Awwwards" Design)
        Visible on screens XL and LARGER
        --------------------------------------------------
      */}
      <section
        ref={containerRef}
        className="hidden xl:flex relative w-full h-screen items-center overflow-hidden bg-secondary-50/50"
      >
        {/* Decorative Background Elements - Animated for "Life" */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-100/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.3, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-8 h-full">
          <div className="flex flex-row items-center h-full gap-20">
            {/* LEFT: Content */}
            <div className="relative z-10 w-1/2 flex flex-col items-start text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ring-1 ring-primary-100/50 backdrop-blur-md">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-primary-900 text-xs font-bold tracking-[0.15em] uppercase">
                    7 Dagen Open • 10:00 - 21:00
                  </span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="relative mb-6"
              >
                <h1 className="font-serif text-[5.5rem] leading-[0.95] text-primary-950 tracking-tight">
                  <span className="block text-primary-900/90 font-medium italic text-[0.6em] mb-4 tracking-normal">
                    Speciaal voor Vrouwen
                  </span>
                  <span className="block font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900">
                    Professioneel Waxen.
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl text-secondary-600 mb-10 max-w-lg leading-relaxed font-light"
              >
                Ervaar de toonaangevende waxing studio, exclusief voor vrouwen.
                Professionele behandelingen in Amsterdam & Den Haag.
              </motion.p>

              {/* Cards - Restored Original Style for Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="w-full flex gap-6 max-w-2xl"
              >
                {/* Amsterdam Card - Original Style */}
                <div className="group relative flex-1 bg-white rounded-2xl p-6 border border-primary-100 shadow-lg hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 transform hover:-translate-y-1">
                  <a
                    href={siteConfig.locations.amsterdam.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -top-2 -right-2 p-2 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 hover:scale-105 transition-all z-20"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                    </svg>
                  </a>
                  <div className="flex flex-col justify-between h-full pt-1">
                    <div
                      onClick={(e) => handleBookClick(e, "amsterdam")}
                      className="block cursor-pointer"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="font-bold text-primary-900 text-lg sm:text-xl">
                          Amsterdam
                        </h3>
                      </div>
                      <p className="text-secondary-600 truncate mb-4 font-medium text-center text-sm">
                        {siteConfig.locations.amsterdam.address}
                      </p>
                    </div>
                    <div className="w-full">
                      <button
                        onClick={(e) => handleBookClick(e, "amsterdam")}
                        className="block w-full bg-primary-50 text-primary-700 text-sm py-3 rounded-lg text-center font-bold uppercase tracking-wider hover:bg-primary-600 hover:text-white transition-colors cursor-pointer"
                      >
                        Nu Boeken
                      </button>
                    </div>
                  </div>
                </div>

                {/* The Hague Card - Original Style */}
                <div className="group relative flex-1 bg-white rounded-2xl p-6 border border-primary-100 shadow-lg hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 transform hover:-translate-y-1">
                  <a
                    href={siteConfig.locations.theHague.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -top-2 -right-2 p-2 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 hover:scale-105 transition-all z-20"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                    </svg>
                  </a>
                  <div className="flex flex-col justify-between h-full pt-1">
                    <div
                      onClick={(e) => handleBookClick(e, "theHague")}
                      className="block cursor-pointer"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="font-bold text-primary-900 text-lg sm:text-xl">
                          Den Haag
                        </h3>
                      </div>
                      <p className="text-secondary-600 truncate mb-4 font-medium text-center text-sm">
                        {siteConfig.locations.theHague.address}
                      </p>
                    </div>
                    <div className="w-full">
                      <button
                        onClick={(e) => handleBookClick(e, "theHague")}
                        className="block w-full bg-primary-50 text-primary-700 text-sm py-3 rounded-lg text-center font-bold uppercase tracking-wider hover:bg-primary-600 hover:text-white transition-colors cursor-pointer"
                      >
                        Nu Boeken
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Image */}
            <motion.div
              style={{ y }}
              className="relative w-1/2 h-[85vh] perspective-1000"
            >
              {/* Decorative Background for Image - Floating */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-4 border border-secondary-200 rounded-[3rem] -z-10 translate-x-4 translate-y-4"
              />

              {/* Main Image Container */}
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.1 }}
                animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl shadow-secondary-200/20"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/10 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                <Image
                  src="/images/inside-salon.png"
                  alt="LadyWax Salon Interieur"
                  fill
                  className="object-cover object-left"
                  priority
                  sizes="50vw"
                />
              </motion.div>

              {/* Floating Badge/Reviews with Floating Animation */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.8 },
                  x: { duration: 0.8, delay: 0.8 },
                }}
                className="absolute bottom-12 -left-12 z-20"
              >
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50">
                  <div className="flex items-center gap-2 mb-1">
                    {/* add a safety icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2l4 -4m1.5 -4.5l.5 .5a9 9 0 1 1 -12.73 12.73a9 9 0 0 1 12.73 -12.73z"
                      ></path>
                    </svg>
                    {/* <span className="text-yellow-500 text-sm">★★★★★</span> */}
                    <span className="font-bold text-primary-900 text-sm">
                      Gecertificeerde Specialisten
                    </span>
                  </div>
                  <p className="text-xs text-secondary-600 font-medium">
                    Veilig & Hygiënisch
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
