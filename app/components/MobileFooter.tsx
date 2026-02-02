"use client";

import Link from "next/link";
import Image from "next/image";
import type { NavigationData, LocationsData, BusinessData } from "@/app/lib/data";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Calendar,
} from "lucide-react";

interface MobileFooterProps {
  navigation: NavigationData;
  locations: LocationsData;
  business: BusinessData;
}

export default function MobileFooter({ navigation, locations, business }: MobileFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="md:hidden bg-secondary-50 font-lato relative z-10 pt-12 pb-24 px-6 text-center border-t-4 border-primary-500">
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300 w-full -mt-1"></div>

      {/* Logo & Tagline */}
      <div className="flex flex-col items-center mb-8">
        <Link href="/" className="relative w-32 h-10 mb-3">
          <Image
            src="/images/logo.png"
            alt={business.name}
            fill
            className="object-contain"
          />
        </Link>
        <p className="text-sm text-secondary-500 italic">
          {business.tagline}
        </p>
      </div>
      {/* Quick Links (Grid) */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-secondary-100 mb-6">
        <h3 className="font-playfair font-bold text-lg text-secondary-900 mb-4 border-b border-secondary-100 pb-2">
          Menu
        </h3>
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-left">
          {navigation.items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-secondary-600 hover:text-primary-600 py-1"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/algemene-voorwaarden"
            className="text-secondary-600 hover:text-primary-600 py-1"
          >
            Algemene Voorwaarden
          </Link>
          <Link
            href="/disclaimer"
            className="text-secondary-600 hover:text-primary-600 py-1"
          >
            Disclaimer
          </Link>
        </div>
      </div>

      {/* Contact & Hours Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-secondary-100 mb-8 space-y-6">
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-primary-600 mb-1">
            <Clock size={16} />
            <span className="font-bold text-sm">Opening Times</span>
          </div>
          <p className="text-xs text-secondary-500">
            {business.openDays}
          </p>
          <p className="text-sm font-medium text-secondary-800">
            {business.openingHours}
          </p>
        </div>

        <div className="h-px bg-secondary-100 w-full" />

        {/* Locations (Simplified) */}
        <div className="grid gap-4">
          {/* Amsterdam */}
          <div className="text-left">
            <h4 className="font-bold text-secondary-900 text-sm mb-1">
              {locations.amsterdam.name}
            </h4>
            <div className="flex items-center justify-between text-sm">
              <a
                href={`tel:${locations.amsterdam.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-secondary-600"
              >
                <Phone size={14} className="text-primary-500" />
                <span className="text-xs">
                  {locations.amsterdam.phone}
                </span>
              </a>
              <a
                href={locations.amsterdam.mapsUrl}
                target="_blank"
                className="text-primary-600 text-xs font-medium"
              >
                Maps →
              </a>
            </div>
            <div className="mt-3">
              <a
                href={locations.amsterdam.widgetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-primary-600 text-white text-xs font-bold py-2.5 rounded-lg shadow-sm hover:bg-primary-700 active:scale-95 transition-all gap-2"
              >
                <Calendar size={14} />
                Book Appointment
              </a>
            </div>
          </div>

          {/* The Hague */}
          <div className="text-left pt-2 border-t border-secondary-50">
            <h4 className="font-bold text-secondary-900 text-sm mb-1">
              {locations.theHague.name}
            </h4>
            <div className="flex items-center justify-between text-sm">
              <a
                href={`tel:${locations.theHague.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-secondary-600"
              >
                <Phone size={14} className="text-primary-500" />
                <span className="text-xs">
                  {locations.theHague.phone}
                </span>
              </a>
              <a
                href={locations.theHague.mapsUrl}
                target="_blank"
                className="text-primary-600 text-xs font-medium"
              >
                Maps →
              </a>
            </div>
            <div className="mt-3">
              <a
                href={locations.theHague.widgetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-primary-600 text-white text-xs font-bold py-2.5 rounded-lg shadow-sm hover:bg-primary-700 active:scale-95 transition-all gap-2"
              >
                <Calendar size={14} />
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs text-secondary-400">
        © {currentYear} {business.name}. All rights reserved.
      </p>

      <div className="flex items-center gap-2 text-center justify-center mt-2">
        <span className="text-xs text-secondary-400">Website by</span>
        <a
          href="#"
          className="flex items-center gap-1 text-xs text-primary-600 font-medium hover:underline"
        >
          <span>Sami</span>
          <ExternalLink size={12} className="text-primary-600" />
        </a>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white border border-secondary-200 flex items-center justify-center text-secondary-500 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300 shadow-sm"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
