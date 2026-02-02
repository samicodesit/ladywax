"use client";

import Link from "next/link";

const sections = [
  {
    title: "Business Info",
    description: "Update phone numbers, hours, and general business details",
    href: "/admin/dashboard/business",
    icon: "🏢",
  },
  {
    title: "Locations",
    description: "Manage Amsterdam and The Hague location details",
    href: "/admin/dashboard/locations",
    icon: "📍",
  },
  {
    title: "Hero Section",
    description: "Edit homepage hero text and main image",
    href: "/admin/dashboard/hero",
    icon: "🖼️",
  },
  {
    title: "Features",
    description: "Update the features section on the homepage",
    href: "/admin/dashboard/features",
    icon: "✨",
  },
  {
    title: "Highlights",
    description: "Edit the four highlight cards on the homepage",
    href: "/admin/dashboard/highlights",
    icon: "🌟",
  },
  {
    title: "Waxing Page",
    description: "Update content on the 'Waarom Waxen' page",
    href: "/admin/dashboard/waxing",
    icon: "📄",
  },
  {
    title: "Careers Page",
    description: "Edit the job vacancies page content",
    href: "/admin/dashboard/careers",
    icon: "💼",
  },
  {
    title: "Contact Page",
    description: "Update contact information and intro text",
    href: "/admin/dashboard/contact",
    icon: "📧",
  },
  {
    title: "Navigation",
    description: "Manage menu items and links",
    href: "/admin/dashboard/navigation",
    icon: "🧭",
  },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Welcome to the LadyWax admin panel. Select a section to edit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition group"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl group-hover:scale-110 transition">
                {section.icon}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {section.title}
                </h2>
                <p className="text-sm text-gray-600">{section.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
