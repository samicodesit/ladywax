"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="relative py-8 lg:py-32 overflow-x-hidden bg-white">
      {/* --- Seamless Gradient Transition from Previous Section --- */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary-50 to-white z-0 pointer-events-none" />

      {/* --- Spinning Graphic (Bridging the Sections) --- */}
      {/* Positioned comfortably to overlap the divide */}
      <motion.div
        style={{ opacity: 0.12 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-16 -right-16 md:-top-24 md:-right-24 lg:-top-32 lg:right-10 w-64 h-64 md:w-96 md:h-96 text-primary-600 pointer-events-none z-10 mix-blend-multiply"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M50 0 V100 M0 50 H100 M14.6 14.6 L85.4 85.4 M14.6 85.4 L85.4 14.6" />
        </svg>
      </motion.div>

      {/* --- Rest of Background Geometry (Clipped to Section) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient orb top-right */}
        <div className="absolute -top-[20%] -right-[10%] w-[40rem] h-[40rem] bg-gradient-to-br from-primary-50/60 to-white rounded-full blur-3xl opacity-60" />

        {/* Subtle Organic Shape Bottom Left/Middle */}
        <div className="absolute top-1/2 -left-20 w-[30rem] h-[30rem] bg-primary-50/30 rounded-full blur-[100px] mix-blend-multiply" />

        {/* Elegant Abstract Curve (SVG) - Smooth flowing line */}
        <svg
          className="absolute top-[20%] right-0 w-full lg:w-1/2 h-[500px] text-primary-100/50 -z-10"
          viewBox="0 0 400 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M400,0 C300,100 350,200 200,300 C100,360 0,350 0,400"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Minimal Blue Geometry - Small Circle */}
        <svg
          className="absolute top-1/4 left-10 w-24 h-24 text-primary-200/50 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* Minimal Blue Geometry - Tilted Square */}
        <svg
          className="absolute bottom-1/4 right-[5%] w-32 h-32 text-primary-300/30 rotate-12 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-20 items-start">
          {/* --- Headline Column (Sticky on Desktop) --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-secondary-900 leading-[0.95] tracking-tight mb-8">
                Comfort <br />
                <span className="italic text-secondary-400 font-light">
                  ontmoet
                </span>{" "}
                <br />
                Kwaliteit.
              </h2>
            </motion.div>
          </div>
          {/* --- Content Column (Breathable Layout) --- */}
          <div className="lg:col-span-1 hidden lg:block"></div> {/* Spacer */}
          <div className="lg:col-span-6 flex flex-col gap-12 pt-2 lg:pt-4">
            {/* Intro Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-secondary-800 font-serif leading-relaxed">
                Bij LadyWax geloven we dat ware schoonheid begint bij{" "}
                <span className="text-primary-600 italic">zelfvertrouwen</span>.
              </p>
            </motion.div>

            {/* Feature Block 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pl-8 border-l-2 border-primary-100 hover:border-primary-400 transition-colors duration-500 py-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-sm font-bold text-secondary-900 uppercase tracking-[0.15em]">
                  100% Vrouwvriendelijk
                </h3>
              </div>
              <p className="text-secondary-500 text-lg leading-relaxed max-w-md">
                Een veilige haven waar privacy heilig is. Onze salons zijn
                exclusief voor en door vrouwen.
              </p>
            </motion.div>

            {/* Feature Block 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pl-8 border-l-2 border-primary-100 hover:border-primary-400 transition-colors duration-500 py-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-sm font-bold text-secondary-900 uppercase tracking-[0.15em]">
                  Expertise & Flexibiliteit
                </h3>
              </div>
              <p className="text-secondary-500 text-lg leading-relaxed max-w-md">
                Met 25+ gepassioneerde WaxLady&apos;s en ruime openingstijden
                zorgen wij ervoor dat pure luxe altijd in jouw agenda past.
              </p>
            </motion.div>

            {/* Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-0"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-full font-serif font-medium tracking-wide hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-600/30 hover:-translate-y-1"
              >
                <span>Lees ons Manifesto</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
