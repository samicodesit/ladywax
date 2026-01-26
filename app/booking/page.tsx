"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/app/lib/config";

export default function BookingSelectionPage() {
  return (
    <div className="min-h-screen bg-secondary-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 font-serif mb-4">
            Select Your Location
          </h1>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full opacity-50 mb-6"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Choose a location below to view the appointment calendar and book
            your treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Amsterdam Card */}
          <Link
            href="/booking/amsterdam"
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-secondary-100 overflow-hidden flex flex-col"
          >
            <div className="h-48 relative bg-secondary-100">
              {/* Placeholder for location image - using a pattern or color for now */}
              <div className="absolute inset-0 bg-secondary-200 group-hover:bg-secondary-300 transition-colors flex items-center justify-center">
                <MapPin className="text-secondary-400 w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col items-center text-center">
              <h3 className="font-playfair text-2xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                Amsterdam
              </h3>
              <p className="text-secondary-500 mb-6 text-sm">
                {siteConfig.locations.amsterdam.address}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 font-bold text-primary-600 group-hover:gap-3 transition-all">
                Book Now <ArrowRight size={18} />
              </span>
            </div>
          </Link>

          {/* The Hague Card */}
          <Link
            href="/booking/the-hague"
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-secondary-100 overflow-hidden flex flex-col"
          >
            <div className="h-48 relative bg-secondary-100">
              <div className="absolute inset-0 bg-secondary-200 group-hover:bg-secondary-300 transition-colors flex items-center justify-center">
                <MapPin className="text-secondary-400 w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col items-center text-center">
              <h3 className="font-playfair text-2xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                The Hague
              </h3>
              <p className="text-secondary-500 mb-6 text-sm">
                {siteConfig.locations.theHague.address}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 font-bold text-primary-600 group-hover:gap-3 transition-all">
                Book Now <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
