"use client";

import Image from "next/image";

const availableImages = [
  { value: "/images/logo.png", label: "Logo" },
  { value: "/images/amsterdam-salon.png", label: "Amsterdam Salon" },
  { value: "/images/den-haag-salon.png", label: "Den Haag Salon" },
  { value: "/images/inside-salon.png", label: "Inside Salon (Hero)" },
  { value: "/images/salon-2.png", label: "Salon 2" },
  { value: "/images/salon-3.png", label: "Salon 3" },
];

interface ImageSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function ImageSelector({
  label,
  value,
  onChange,
}: ImageSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition mb-4"
      >
        {availableImages.map((img) => (
          <option key={img.value} value={img.value}>
            {img.label}
          </option>
        ))}
      </select>
      {value && (
        <div className="relative w-full h-40 rounded-lg overflow-hidden border border-gray-200">
          <Image
            src={value}
            alt="Selected"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
