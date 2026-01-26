"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { siteConfig } from "@/app/lib/config";

export default function AppointmentSection() {
  const [selectedLocation, setSelectedLocation] = useState<
    "amsterdam" | "theHague"
  >("amsterdam");

  useEffect(() => {
    // Check storage on mount
    const stored = sessionStorage.getItem("selectedLocation");
    if (stored === "amsterdam" || stored === "theHague") {
      setSelectedLocation(stored);
    }

    // Listen for custom event from other components
    const handleLocationChange = (e: CustomEvent) => {
      const loc = e.detail;
      if (loc === "amsterdam" || loc === "theHague") {
        setSelectedLocation(loc);
        sessionStorage.setItem("selectedLocation", loc);
      }
    };

    window.addEventListener(
      "changeLocation" as any,
      handleLocationChange as any,
    );
    return () => {
      window.removeEventListener(
        "changeLocation" as any,
        handleLocationChange as any,
      );
    };
  }, []);

  const widgetUrl =
    selectedLocation === "amsterdam"
      ? siteConfig.locations.amsterdam.widgetUrl
      : siteConfig.locations.theHague.widgetUrl;

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-primary-50/50"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Hand-drawn scribble */}
      <div className="absolute right-[5%] top-[15%] opacity-10 pointer-events-none rotate-12">
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          className="text-primary-600"
        >
          <path d="M10,10 Q50,90 90,10" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6"
          >
            Maak Jouw <span className="text-primary-600 italic">Afspraak</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary-600 max-w-2xl mx-auto"
          >
            Selecteer hieronder je gewenste locatie.
          </motion.p>
        </div>

        {/* Location Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-xl shadow-md border border-secondary-100 inline-flex">
            <button
              onClick={() => setSelectedLocation("amsterdam")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                selectedLocation === "amsterdam"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-secondary-600 hover:text-primary-600 hover:bg-secondary-50"
              }`}
            >
              Amsterdam
            </button>
            <button
              onClick={() => setSelectedLocation("theHague")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                selectedLocation === "theHague"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-secondary-600 hover:text-primary-600 hover:bg-secondary-50"
              }`}
            >
              Den Haag
            </button>
          </div>
        </div>

        {/* Widget Container */}
        <motion.div
          key={selectedLocation}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-secondary-100 overflow-hidden relative">
            <div className="bg-white px-6 py-4 border-b border-secondary-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <div>
                  <span className="font-bold text-secondary-900">
                    {selectedLocation === "amsterdam"
                      ? "LadyWax Amsterdam"
                      : "LadyWax Den Haag"}
                  </span>
                  <span className="text-secondary-400 text-sm ml-2 hidden sm:inline">
                    |{" "}
                    {selectedLocation === "amsterdam"
                      ? siteConfig.locations.amsterdam.address
                      : siteConfig.locations.theHague.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile: Tall fixed/viewport height. Desktop: Maintain aspect ratio */}
            <div className="relative w-full bg-white h-[85vh] min-h-[600px] md:h-auto md:aspect-[4/3]">
              <iframe
                src={widgetUrl}
                className="w-full h-full border-0"
                title={`Book appointment at ${selectedLocation}`}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
