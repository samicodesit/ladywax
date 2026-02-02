"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import type { FeaturesData } from "@/app/lib/data";

interface FeaturesSectionProps {
  data: FeaturesData;
}

export default function FeaturesSection({ data }: FeaturesSectionProps) {
  return (
    <section className="relative py-8 lg:py-24 overflow-hidden bg-white">
      {/* --- Spinning Graphic (Restored) --- */}
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

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-secondary-50 to-white opacity-80" />
        <div className="hidden lg:block absolute right-0 top-1/3 w-[500px] h-[500px] bg-primary-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
          {/* --- Left Column: Sticky Header + Image Anchor --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-secondary-900 leading-[0.95] tracking-tight mb-2">
                {data.title} <br />
                <span className="italic text-secondary-400 font-light ml-2">
                  {data.titleAccent}
                </span>{" "}
                <br />
                {data.titleBottom}
              </h2>
              <div className="h-1.5 w-24 bg-primary-500 rounded-full mt-8 hidden lg:block" />
            </motion.div>

            {/* Desktop Only Image Anchor - Fills the void below sticky header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block h-[500px] w-full"
            >
              <ImageCard
                src={data.image}
                alt="LadyWax Salon Details"
                text={data.imageText}
                className="h-full"
              />
            </motion.div>
          </div>

          {/* --- Right Column: Scrollable Content --- */}
          <div className="lg:col-span-7 flex flex-col gap-16 lg:pt-8">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-secondary-800 font-serif leading-relaxed font-light">
                {data.intro}
              </p>
            </motion.div>

            {/* Features List */}
            <div className="space-y-12">
              {data.items.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                  className="group pl-8 border-l-2 border-primary-500 lg:border-secondary-100 lg:hover:border-primary-500 transition-colors duration-500"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl text-primary-500 lg:text-primary-200 lg:group-hover:text-primary-500 transition-colors font-serif italic font-bold">
                      {item.number}
                    </span>
                    <h3 className="text-lg font-bold text-secondary-900 uppercase tracking-widest">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-secondary-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4"
            >
              <Link
                href={data.ctaHref}
                className="group inline-flex items-center gap-3 text-secondary-900 font-bold border-b-2 border-primary-500 pb-1 hover:text-primary-600 transition-colors"
              >
                <span className="uppercase tracking-widest text-sm">
                  {data.ctaText}
                </span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
