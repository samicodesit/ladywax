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
} from "lucide-react";
import MobileFooter from "./MobileFooter";

interface FooterProps {
  navigation: NavigationData;
  locations: LocationsData;
  business: BusinessData;
}

export default function Footer({ navigation, locations, business }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <MobileFooter navigation={navigation} locations={locations} business={business} />
      <footer className="hidden md:block bg-secondary-50 pt-16 pb-8 text-secondary-600 font-lato relative z-10">
        {/* Decorative Top Border for Distinction */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300 w-full"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand & Info */}
            <div className="space-y-6">
              <Link href="/" className="block relative w-40 h-12">
                <Image
                  src="/images/logo.png"
                  alt={business.name}
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <div className="space-y-4">
                <p className="max-w-xs text-sm leading-relaxed">
                  {business.description}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white border border-secondary-200 flex items-center justify-center text-secondary-500 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300 shadow-sm"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white border border-secondary-200 flex items-center justify-center text-secondary-500 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300 shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white border border-secondary-200 flex items-center justify-center text-secondary-500 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300 shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* General Opening Hours */}
              <div className="pt-6 border-t border-secondary-200">
                <h4 className="text-secondary-900 font-playfair font-bold mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-primary-500" />
                  Opening Hours
                </h4>
                <p className="text-sm">{business.openDays}</p>
                <p className="text-sm text-secondary-800 font-bold">
                  {business.openingHours}
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-secondary-900 font-playfair font-bold text-xl mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigation.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-primary-600 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-200 group-hover:bg-primary-500 transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/algemene-voorwaarden"
                    className="hover:text-primary-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-200 group-hover:bg-primary-500 transition-colors"></span>
                    Algemene Voorwaarden
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="hover:text-primary-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-200 group-hover:bg-primary-500 transition-colors"></span>
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Amsterdam Location */}
            <div>
              <h3 className="text-secondary-900 font-playfair font-bold text-xl mb-6">
                Amsterdam
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 group">
                  <MapPin
                    size={18}
                    className="text-primary-500 mt-1 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <p className="text-secondary-900 font-bold">
                      {locations.amsterdam.name}
                    </p>
                    <p className="text-secondary-600">
                      {locations.amsterdam.address}
                    </p>
                    <p className="text-secondary-600">
                      {locations.amsterdam.city}
                    </p>
                    <a
                      href={locations.amsterdam.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium text-xs mt-2 inline-flex items-center gap-1 hover:underline"
                    >
                      Get directions <ExternalLink size={10} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <Phone
                    size={18}
                    className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <a
                    href={`tel:${locations.amsterdam.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary-600 font-medium transition-colors"
                  >
                    {locations.amsterdam.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <Mail
                    size={18}
                    className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <a
                    href={`mailto:${locations.amsterdam.email}`}
                    className="hover:text-primary-600 font-medium transition-colors"
                  >
                    {locations.amsterdam.email}
                  </a>
                </div>
              </div>
            </div>

            {/* The Hague Location */}
            <div>
              <h3 className="text-secondary-900 font-playfair font-bold text-xl mb-6">
                The Hague
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 group">
                  <MapPin
                    size={18}
                    className="text-primary-500 mt-1 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <p className="text-secondary-900 font-bold">
                      {locations.theHague.name}
                    </p>
                    <p className="text-secondary-600">
                      {locations.theHague.address}
                    </p>
                    <p className="text-secondary-600">
                      {locations.theHague.city}
                    </p>
                    <a
                      href={locations.theHague.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium text-xs mt-2 inline-flex items-center gap-1 hover:underline"
                    >
                      Get directions <ExternalLink size={10} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <Phone
                    size={18}
                    className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <a
                    href={`tel:${locations.theHague.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary-600 font-medium transition-colors"
                  >
                    {locations.theHague.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <Mail
                    size={18}
                    className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <a
                    href={`mailto:${locations.theHague.email}`}
                    className="hover:text-primary-600 font-medium transition-colors"
                  >
                    {locations.theHague.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-secondary-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-secondary-500">
              © {currentYear} {business.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {/* credit to website builder */}
              <div className="flex items-center gap-2">
                <span className="text-secondary-500">Website by</span>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 hover:underline"
                >
                  Sami <ExternalLink size={10} />
                </a>
              </div>
              <span className="text-secondary-300 hidden md:block">|</span>
              <p className="text-secondary-500 font-medium italic">
                {business.tagline}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
