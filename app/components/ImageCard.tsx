"use client";

import Image from "next/image";
import { cn } from "@/app/lib/utils";

interface ImageCardProps {
  src: string;
  alt: string;
  text: string;
  className?: string; // For height/width classes
  priority?: boolean;
}

export default function ImageCard({
  src,
  alt,
  text,
  className,
  priority = false,
}: ImageCardProps) {
  return (
    <div className={cn("relative group h-full w-full", className)}>
      {/* Main Image Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border-b-[8px] border-primary-600 shadow-2xl shadow-secondary-200/40 bg-white">
        {/* Hover Zoom Effect on Image */}
        <div className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        </div>

        {/* Subtle inner shadow for depth (optional, keeping it very light) */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none" />
      </div>

      {/* Floating Glass Quote Card */}
      <div className="absolute bottom-8 left-6 right-6 md:right-auto md:max-w-xs z-20">
        <div className="bg-white/85 backdrop-blur-md p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 transform transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]">
          <div className="flex gap-3 items-start">
            {/* Brand Accent on Card */}
            <div className="w-1 h-full min-h-[2rem] bg-primary-500 rounded-full shrink-0 opacity-80" />
            <p className="font-serif text-lg text-secondary-800 italic leading-snug">
              "{text}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
