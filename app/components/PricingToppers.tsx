"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

interface PriceTopperItem {
  name: string;
  price: string;
}

interface PriceToppersData {
  items: PriceTopperItem[];
  specialOffer: {
    title: string;
    description: string;
    price: string;
  };
}

interface PricingToppersProps {
  data?: PriceToppersData;
}

// Default data as fallback
const defaultData: PriceToppersData = {
  items: [
    { name: "Brazilian (Full of Shape)", price: "48,00" },
    { name: "Oksels", price: "20,50" },
    { name: "Onderbenen", price: "30,50" },
    { name: "Wenkbrauwen", price: "21,00" },
  ],
  specialOffer: {
    title: "Brazilian Korting",
    description: "Maandag – Vrijdag, 13:00 – 16:00. Alleen via ladywax.nl",
    price: "40,00",
  },
};

export default function PricingToppers({ data = defaultData }: PricingToppersProps) {
  const { items, specialOffer } = data;

  return (
    <section className="bg-secondary-50 pt-4 pb-12 sm:pt-8 sm:pb-16 lg:py-24 relative z-10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-secondary-100/50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[10%] right-[0%] w-[25rem] h-[25rem] bg-primary-50/60 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Desktop Left Column: Image - Fills the whitespace */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block h-[600px] w-full"
          >
            <ImageCard
              src="/images/salon-2.png"
              alt="LadyWax Salon Interior"
              text="Premium Verzorging."
              className="h-full"
            />
          </motion.div>

          {/* Right Column (Content + Card) - Center on Mobile, Right on Desktop */}
          <div className="w-full">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 lg:mb-12 text-center lg:text-left"
            >
              <div className="lg:hidden text-center mb-6">
                {/* Mobile Header logic kept similar to ensure consistency */}
                <h3 className="text-xl font-bold text-secondary-900 font-serif">
                  Populaire Behandelingen
                </h3>
                <div className="h-1 w-12 bg-primary-500 mx-auto mt-2 rounded-full opacity-50"></div>
              </div>

              <h3 className="hidden lg:block text-4xl font-bold text-secondary-900 font-serif mb-6 leading-tight">
                Onze Meest <br />{" "}
                <span className="text-primary-600">Gekozen</span> Behandelingen
              </h3>
              <p className="hidden lg:block text-lg text-secondary-600 mb-8 max-w-md">
                Ontdek waarom duizenden vrouwen voor LadyWax kiezen.
                Transparante prijzen, professionele zorg en het beste resultaat.
              </p>
            </motion.div>

            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-secondary-200/50 border border-white ring-1 ring-secondary-50"
            >
              <ul className="space-y-4 md:space-y-5">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between text-secondary-700"
                  >
                    <span className="font-medium text-sm sm:text-base text-secondary-900">
                      {item.name}
                    </span>
                    <div className="flex-grow mx-4 border-b border-secondary-100 border-dashed relative top-1 opacity-50"></div>
                    <span className="font-bold text-primary-600">
                      €{item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-secondary-100">
                <div className="bg-primary-50 rounded-xl p-4 sm:p-5 border border-primary-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary-200/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                  <div className="flex justify-between items-start gap-4 relative z-10">
                    <div className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                      <span className="font-bold text-primary-800 block mb-1 text-base">
                        {specialOffer.title}
                      </span>
                      {specialOffer.description.split(". ").map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 ? ". " : ""}
                          {i === arr.length - 2 && <br />}
                        </span>
                      ))}
                    </div>
                    <span className="font-bold text-primary-700 text-lg whitespace-nowrap">
                      €{specialOffer.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/onze-prijslijst"
                  className="inline-block bg-primary-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-primary-600/30 hover:bg-primary-700 hover:shadow-primary-600/40 transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wider text-sm w-full sm:w-auto"
                >
                  Bekijk Volledige Prijslijst
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
