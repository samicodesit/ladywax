import { siteConfig } from "@/app/lib/config";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Define valid slugs and their mapping to config keys
const locationMap = {
  amsterdam: "amsterdam",
  "the-hague": "theHague",
} as const;

type CitySlug = keyof typeof locationMap;

interface Props {
  params: Promise<{
    city: string;
  }>;
}

// Generate static params for SEO and performance
export function generateStaticParams() {
  return [{ city: "amsterdam" }, { city: "the-hague" }];
}

// Generate separate metadata for each page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const slug = city as CitySlug;
  const configKey = locationMap[slug];

  if (!configKey) {
    return {
      title: "Location Not Found",
    };
  }

  const location = siteConfig.locations[configKey];

  return {
    title: `Book Appointment - ${location.name} | LadyWax`,
    description: `Book your waxing appointment at ${location.name} in ${location.city}. Professional waxing services strictly for women.`,
  };
}

export default async function BookingLocationPage({ params }: Props) {
  const { city } = await params;
  const slug = city as CitySlug;
  const configKey = locationMap[slug];

  if (!configKey) {
    notFound();
  }

  const location = siteConfig.locations[configKey];

  return (
    <div className="min-h-screen bg-secondary-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 font-serif mb-4">
            Book Appointment
          </h1>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full opacity-50 mb-6"></div>
          <h2 className="text-xl text-primary-600 font-medium font-serif">
            {location.name}
          </h2>
          <p className="text-secondary-500 mt-2 text-sm">{location.address}</p>
        </div>

        {/* Widget Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-secondary-100 overflow-hidden min-h-[600px]">
          <iframe
            src={location.widgetUrl}
            width="100%"
            height="750px"
            frameBorder="0"
            title={`Booking widget for ${location.name}`}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
