import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export const metadata = {
  title: "Prijslijst - LadyWax",
  description: "Bekijk onze volledige prijslijst voor alle wax behandelingen.",
};

interface PricingItem {
  name: string;
  price: string;
  note?: string;
  isSpecial?: boolean;
}

interface PricingCategory {
  title: string;
  items: PricingItem[];
}

const pricingData: PricingCategory[] = [
  {
    title: "Brazilian",
    items: [
      { name: "Full Brazilian", price: "48,00" },
      { name: "Brazilian Shape", price: "48,00" },
      { name: "Brazilian String", price: "37,50" },
      { name: "Bikinilijn", price: "23,00" },
      {
        name: "DISCOUNT Brazilian",
        price: "40,00",
        note: "Alleen op maandag t/m vrijdag tussen 13.00 en 16.00. ALLEEN VIA LADYWAX.NL",
        isSpecial: true,
      },
      { name: "Schaamlippen", price: "24,50" },
      { name: "Bilnaad incl. gaatje", price: "11,50" },
      { name: "Billen Incl. gaatje", price: "23,50" },
      { name: "Billen Excl. Gaatje", price: "19,00" },
    ],
  },
  {
    title: "Bovenlichaam",
    items: [
      { name: "Oksels", price: "20,50" },
      { name: "Onderarmen (+ handen)", price: "25,50" },
      { name: "Handen", price: "12,00" },
      { name: "Navellijn", price: "12,00" },
      { name: "Onderrug", price: "17,00" },
      { name: "Hele rug", price: "33,50" },
      { name: "Bovenarmen incl. ellebogen", price: "22,50" },
      { name: "Halve bovenbenen excl. Knieën", price: "20,00" },
      { name: "Boven-rug", price: "20,50" },
      { name: "Buik incl. navellijn", price: "23,00" },
      { name: "Borst incl tepelhaar", price: "17,50" },
      { name: "Tepelhaar (met pincet)", price: "9,00" },
    ],
  },
  {
    title: "Onderlichaam",
    items: [
      { name: "Onderbenen (+ knieën & voeten)", price: "30,50" },
      { name: "Bovenbenen (+knieën )", price: "32,00" },
      { name: "Hele benen (+ voeten)", price: "47,00" },
      { name: "Voeten", price: "12,00" },
    ],
  },
  {
    title: "Gezicht",
    items: [
      { name: "Voorhoofd", price: "12,00" },
      { name: "Wenkbrauwen", price: "21,00" },
      { name: "Bovenlip", price: "9,50" },
      { name: "Bakkebaarden", price: "9,50" },
      { name: "Hele gezicht (ex wenkbrauwen)", price: "27,00" },
      { name: "Hele gezicht (+ wenkbrauwen)", price: "46,50" },
      { name: "Kaaklijn", price: "12,50" },
      { name: "Wangen", price: "12,50" },
      { name: "Kin", price: "10,50" },
      { name: "Nek", price: "14,50" },
      { name: "Hals", price: "12,00" },
      { name: "Neus", price: "9,50" },
    ],
  },
  {
    title: "Zwangerschap",
    items: [
      { name: "ZWANGERSCHAP Full Brazilian", price: "48,00" },
      { name: "ZWANGERSCHAP Onderbenen incl. voeten", price: "30,50" },
      { name: "ZWANGERSCHAP hele benen incl. voeten", price: "47,00" },
      { name: "ZWANGERSCHAP Billen Incl. gaatje", price: "23,50" },
      { name: "ZWANGERSCHAP onderrug", price: "17,00" },
      { name: "ZWANGERSCHAP hele rug", price: "33,50" },
    ],
  },
];

export default function PricelistPage() {
  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 font-serif mb-4">
            Onze Prijslijst
          </h1>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full opacity-50 mb-6"></div>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-8">
            Professionele behandelingen voor een gladde huid. Prijzen zijn
            inclusief BTW.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking/amsterdam"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-50 text-secondary-900 px-8 py-3 rounded-xl font-bold hover:border-primary-600 hover:text-primary-600 transition-all shadow-sm min-w-[240px]"
            >
              <Calendar size={18} className="text-primary-500" />
              Boek Amsterdam
            </Link>
            <Link
              href="/booking/the-hague"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-50 text-secondary-900 px-8 py-3 rounded-xl font-bold hover:border-primary-600 hover:text-primary-600 transition-all shadow-sm min-w-[240px]"
            >
              <Calendar size={18} className="text-primary-500" />
              Boek Den Haag
            </Link>
          </div>
        </div>

        {/* Special Offer Alert */}
        <div className="max-w-4xl mx-auto mb-12 bg-primary-50 border border-primary-200 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-bold text-primary-800 text-lg mb-1">
              Speciaal voor jongeren (≤ 12 jaar)
            </h3>
            <p className="text-primary-700 text-sm">
              Heb je last van gezichtshaar? We halen het gratis weg! <br />
              <span className="italic opacity-80">
                (neem wel je vader of moeder mee)
              </span>
            </p>
          </div>
          <div className="font-bold text-3xl text-primary-600 whitespace-nowrap">
            € 0,00
          </div>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {pricingData.map((category, idx) => (
            <div key={idx} className="w-full">
              {/* Category Title - Matching Screenshot 1 */}
              <h2 className="text-4xl text-secondary-600 font-serif mb-8 font-normal">
                {category.title}
              </h2>

              {/* Desktop Table Header - Matching Screenshot 1 Position */}
              <div className="hidden md:grid grid-cols-[1fr_50px_110px_110px] lg:grid-cols-[1fr_60px_120px_120px] gap-4 mb-4 px-2 items-end">
                <div></div>
                <div></div>
                <div className="text-left font-bold text-sm text-secondary-900 leading-tight">
                  Lokatie
                  <br />
                  Amsterdam
                </div>
                <div className="text-left font-bold text-sm text-secondary-900 leading-tight">
                  Lokatie Den
                  <br />
                  Haag
                </div>
              </div>

              {/* Mobile Table Header - Shown once per section */}
              <div className="md:hidden grid grid-cols-[1fr_75px_75px] gap-2 mb-2 px-0 text-secondary-400 text-xs font-medium border-b border-transparent">
                <div className="flex-1"></div>
                <div className="text-center bg-transparent">Amsterdam</div>
                <div className="text-center bg-transparent">Den Haag</div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-secondary-200 border-t border-secondary-200">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    {/* Desktop Layout - "All in one line" */}
                    <div className="hidden md:grid grid-cols-[1fr_50px_110px_110px] lg:grid-cols-[1fr_60px_120px_120px] gap-4 items-center py-3 px-2">
                      {/* Name */}
                      <div className="text-secondary-800 text-sm">
                        {" "}
                        {/* Smaller font */}
                        {item.name}
                        {item.note && (
                          <span className="block text-xs text-secondary-500 italic mt-0.5 max-w-md">
                            {item.note}
                          </span>
                        )}
                      </div>

                      {/* Price (Short format for desktop like screenshot: "48") */}
                      <div className="text-right text-secondary-900 text-sm">
                        {" "}
                        {/* Smaller font */}
                        {item.price.split(",")[0]}
                      </div>

                      {/* Button Amsterdam */}
                      <div className="flex justify-start">
                        <Link
                          href="/booking/amsterdam"
                          className="w-full h-8 flex items-center justify-center bg-[#0000ff] text-white text-xs font-bold rounded hover:bg-blue-800 transition-colors"
                        >
                          Kies tijd
                        </Link>
                      </div>

                      {/* Button Den Haag */}
                      <div className="flex justify-start">
                        <Link
                          href="/booking/the-hague"
                          className="w-full h-8 flex items-center justify-center bg-[#0000ff] text-white text-xs font-bold rounded hover:bg-blue-800 transition-colors"
                        >
                          Kies tijd
                        </Link>
                      </div>
                    </div>

                    {/* Mobile Layout - Single Line / Grid Format */}
                    <div className="md:hidden grid grid-cols-[1fr_75px_75px] gap-2 items-center py-2 border-b border-secondary-100 last:border-0 hover:bg-secondary-50 transition-colors">
                      {/* Name & Price */}
                      <div className="flex flex-col pr-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <h3
                            className={`text-sm font-normal truncate ${item.isSpecial ? "text-primary-700" : "text-secondary-800"}`}
                          >
                            {item.name}
                          </h3>
                          <span className="text-secondary-900 text-sm font-normal whitespace-nowrap">
                            {/* Desktop style price: plain number if ends in ,00, otherwise string */}
                            {item.price.endsWith(",00")
                              ? item.price.split(",")[0]
                              : item.price}
                          </span>
                        </div>
                        {item.note && (
                          <p className="text-[10px] text-secondary-400 italic mt-0.5 leading-tight">
                            {item.note}
                          </p>
                        )}
                      </div>

                      {/* Button Amsterdam */}
                      <Link
                        href="/booking/amsterdam"
                        className="h-8 w-full flex items-center justify-center bg-[#0000ff] text-white text-[10px] font-bold rounded hover:bg-blue-800 transition-colors shadow-sm"
                      >
                        Kies tijd
                      </Link>

                      {/* Button Den Haag */}
                      <Link
                        href="/booking/the-hague"
                        className="h-8 w-full flex items-center justify-center bg-[#0000ff] text-white text-[10px] font-bold rounded hover:bg-blue-800 transition-colors shadow-sm"
                      >
                        Kies tijd
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Booking CTA Section */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="bg-secondary-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 100 C 20 0 50 0 100 100 Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-4">
                Klaar om jezelf te verwennen?
              </h2>
              <p className="text-secondary-300 mb-8 text-lg">
                Kies je favoriete locatie en boek eenvoudig online je afspraak.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking/amsterdam"
                  className="flex items-center justify-center gap-2 bg-white text-secondary-900 px-6 py-4 rounded-xl font-bold hover:bg-primary-50 transition-colors"
                >
                  <MapPin size={20} className="text-primary-600" />
                  Boek Amsterdam
                </Link>
                <Link
                  href="/booking/the-hague"
                  className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors"
                >
                  <MapPin size={20} />
                  Boek Den Haag
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
