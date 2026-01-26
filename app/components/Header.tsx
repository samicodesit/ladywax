"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/app/lib/config";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleBookClick = (location: "amsterdam" | "theHague") => {
    setIsMobileMenuOpen(false);

    // If on homepage, scroll to appointment section (and select location)
    if (pathname === "/") {
      const element = document.getElementById("appointment");
      if (element) {
        // Dispatch event to switch tab in AppointmentSection
        window.dispatchEvent(
          new CustomEvent("changeLocation", { detail: location }),
        );
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on homepage, go to dedicated booking page
      const slug = location === "amsterdam" ? "amsterdam" : "the-hague";
      router.push(`/booking/${slug}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-lg py-3"
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 flex items-center gap-2"
              onClick={handleLogoClick}
            >
              <div className="relative w-32 h-10 sm:w-40 sm:h-12">
                <Image
                  src="/images/logo.png"
                  alt="LadyWax"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 lg:gap-3">
                <button
                  onClick={() => handleBookClick("amsterdam")}
                  className="group relative bg-primary-600 text-white px-3 lg:px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5 duration-200 overflow-hidden whitespace-nowrap"
                >
                  <span className="relative z-10 mr-1 lg:mr-2">Amsterdam</span>
                  <Calendar className="absolute -right-1 -bottom-2 w-8 h-8 text-primary-300/40 rotate-12 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => handleBookClick("theHague")}
                  className="group relative bg-primary-600 text-white px-3 lg:px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5 duration-200 overflow-hidden whitespace-nowrap"
                >
                  <span className="relative z-10 mr-1 lg:mr-2">Den Haag</span>
                  <Calendar className="absolute -right-1 -bottom-2 w-8 h-8 text-primary-300/40 rotate-12 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button - Larger Touch Target */}
            <button
              className="md:hidden z-50 p-2 -mr-2 text-secondary-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-8 md:hidden overflow-y-auto flex flex-col"
            style={{
              height: '100dvh',
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex flex-col flex-grow justify-center space-y-8 text-center pb-12">
              {siteConfig.navigation.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif font-medium text-secondary-900 block py-2 active:text-primary-600"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 w-full flex flex-col items-center gap-4"
              >
                <button
                  onClick={() => handleBookClick("amsterdam")}
                  className="group relative w-full max-w-xs bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl active:scale-95 transition-transform overflow-hidden"
                >
                  <span className="relative z-10">Book Amsterdam</span>
                  <Calendar className="absolute -right-2 -bottom-2 w-16 h-16 text-primary-300/40 rotate-12 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => handleBookClick("theHague")}
                  className="group relative w-full max-w-xs bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl active:scale-95 transition-transform overflow-hidden"
                >
                  <span className="relative z-10">Book Den Haag</span>
                  <Calendar className="absolute -right-2 -bottom-2 w-16 h-16 text-primary-300/40 rotate-12 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Mobile Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-secondary-400"
            >
              <p>Amsterdam • The Hague</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
