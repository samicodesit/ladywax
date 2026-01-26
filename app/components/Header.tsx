"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/app/lib/config";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-3`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
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
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#appointment"
                className="bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Book Now
              </Link>
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-8 md:hidden overflow-y-auto flex flex-col h-[100dvh]"
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
                className="pt-8"
              >
                <Link
                  href="#appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block w-full max-w-xs bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl active:scale-95 transition-transform"
                >
                  Book Appointment
                </Link>
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
