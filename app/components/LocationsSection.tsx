"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/app/lib/config";

const locations = [
  {
    ...siteConfig.locations.amsterdam,
    image: "/images/amsterdam-salon.png",
    id: "01",
    short: "AMS",
  },
  {
    ...siteConfig.locations.theHague,
    image: "/images/den-haag-salon.png",
    id: "02",
    short: "DH",
  },
];

export default function LocationsSection() {
  return (
    <section className="relative py-16 lg:py-32 bg-secondary-50 overflow-hidden">
      {/* --- Background Elements: 'Map' Theme --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Minimalist Map Grid Lines */}
        <div
          className="absolute top-0 right-0 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative Map Path SVG */}
        <svg
          className="absolute top-20 left-0 w-full h-full text-primary-200/40 -z-10"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,500 C200,500 300,300 500,300 S800,100 1200,100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 10"
          />
          <circle
            cx="500"
            cy="300"
            r="8"
            fill="currentColor"
            className="animate-pulse"
          />
        </svg>

        {/* Compass Rose Accent */}
        <svg
          className="absolute bottom-10 right-10 w-32 h-32 text-secondary-200 opacity-50 hidden lg:block"
          viewBox="0 0 100 100"
        >
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" />
          <text
            x="50"
            y="15"
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
          >
            N
          </text>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Header --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-6 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 pl-1">
              Waar vind je ons?
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-secondary-900 leading-[0.95] tracking-tight">
              Onze <br />
              <span className="italic text-secondary-500 font-light">
                Salons
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="hidden lg:block max-w-sm mb-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-secondary-500 text-lg leading-relaxed">
              Centraal gelegen, makkelijk bereikbaar. Jouw moment van luxe,
              midden in de stad.
            </p>
          </motion.div>
        </div>

        {/* --- Locations Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((location, i) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="group"
            >
              <div className="relative bg-white p-3 pb-8 md:p-4 md:pb-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500">
                {/* Image Container - Arch Shape for Variation */}
                <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-t-2xl rounded-b-[100px] mb-8 bg-secondary-100">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-secondary-900">
                    {location.short}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 text-center">
                  <h3 className="text-3xl font-serif text-secondary-900 mb-2">
                    {location.city}
                  </h3>
                  <p className="text-secondary-500 mb-6 max-w-xs mx-auto">
                    {location.address}
                  </p>

                  <div className="flex justify-center gap-4">
                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-primary-600/30"
                    >
                      <span>Plan Route</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </a>
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary-100 text-primary-600 hover:bg-primary-50 hover:border-primary-200 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
