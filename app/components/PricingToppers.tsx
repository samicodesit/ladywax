"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "../lib/config";

const prices = [
  { name: "Brazilian (Full of Shape)", price: "48,00" },
  { name: "Oksels", price: "20,50" },
  { name: "Onderbenen", price: "30,50" },
  { name: "Wenkbrauwen", price: "21,00" },
];

export default function PricingToppers() {
  return (
    <section className="bg-secondary-50 pt-4 pb-12 sm:pt-8 sm:pb-16 -mt-2 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-secondary-900 font-serif">
              Populaire Behandelingen
            </h3>
            <div className="h-1 w-12 bg-primary-500 mx-auto mt-2 rounded-full opacity-50"></div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-100/50">
            <ul className="space-y-4">
              {prices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-secondary-700"
                >
                  <span className="font-medium text-sm sm:text-base">
                    {item.name}
                  </span>
                  <div className="flex-grow mx-4 border-b border-secondary-100 border-dashed relative top-1"></div>
                  <span className="font-bold text-primary-600">
                    €{item.price}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-secondary-100">
              <div className="bg-primary-50 rounded-lg p-3 sm:p-4 border border-primary-100">
                <div className="flex justify-between items-start gap-4">
                  <div className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                    <span className="font-bold text-primary-800 block mb-1">
                      Brazilian Korting
                    </span>
                    Maandag – Vrijdag, 13:00 – 16:00. <br />
                    <span className="italic opacity-80">
                      Alleen via ladywax.nl
                    </span>
                  </div>
                  <span className="font-bold text-primary-700 text-lg">
                    €40,00
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href={
                  siteConfig.navigation.find(
                    (item) => item.name === "Prijslijst",
                  )?.href || "#"
                }
                className="inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-primary-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wider text-sm"
              >
                Bekijk Volledige Prijslijst
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
