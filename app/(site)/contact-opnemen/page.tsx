import { getContactPageData, getLocationsData } from "@/app/lib/data";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Opnemen - LadyWax",
  description:
    "Neem contact op met LadyWax of maak direct een afspraak in Amsterdam of Den Haag.",
};

export default async function ContactPage() {
  const { title, intro, email } = await getContactPageData();
  const locations = await getLocationsData();

  return (
    <div className="min-h-screen bg-secondary-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header & Intro */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 font-serif mb-6">
            {title}
          </h1>
          <div className="h-1 w-24 bg-primary-500 mx-auto rounded-full opacity-50 mb-8"></div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-100 max-w-3xl mx-auto">
            <p className="text-lg text-secondary-700 leading-relaxed">
              {intro}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors bg-primary-50 px-4 py-2 rounded-lg"
              >
                <Mail size={18} />
                {email}
              </a>
            </div>
          </div>
        </section>

        {/* Location Cards with Actions */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Amsterdam */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-secondary-100 flex flex-col">
            <div className="bg-secondary-900 p-6 text-white text-center">
              <h2 className="font-serif text-2xl font-bold">
                {locations.amsterdam.name}
              </h2>
            </div>
            <div className="p-8 flex-1 flex flex-col items-center text-center space-y-4">
              <div className="space-y-2 text-secondary-600 mb-4">
                <p className="flex items-center justify-center gap-2">
                  <MapPin size={16} className="text-primary-500" />
                  {locations.amsterdam.address},{" "}
                  {locations.amsterdam.city}
                </p>
                <a
                  href={`tel:${locations.amsterdam.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 hover:text-primary-600 transition-colors"
                >
                  <Phone size={16} className="text-primary-500" />
                  {locations.amsterdam.phone}
                </a>
              </div>

              <Link
                href="/booking/amsterdam"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20 active:scale-95 mt-auto"
              >
                <Calendar size={18} />
                Maak Afspraak Amsterdam
              </Link>
            </div>
          </div>

          {/* The Hague */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-secondary-100 flex flex-col">
            <div className="bg-secondary-900 p-6 text-white text-center">
              <h2 className="font-serif text-2xl font-bold">
                {locations.theHague.name}
              </h2>
            </div>
            <div className="p-8 flex-1 flex flex-col items-center text-center space-y-4">
              <div className="space-y-2 text-secondary-600 mb-4">
                <p className="flex items-center justify-center gap-2">
                  <MapPin size={16} className="text-primary-500" />
                  {locations.theHague.address},{" "}
                  {locations.theHague.city}
                </p>
                <a
                  href={`tel:${locations.theHague.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 hover:text-primary-600 transition-colors"
                >
                  <Phone size={16} className="text-primary-500" />
                  {locations.theHague.phone}
                </a>
              </div>

              <Link
                href="/booking/the-hague"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20 active:scale-95 mt-auto"
              >
                <Calendar size={18} />
                Maak Afspraak Den Haag
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
