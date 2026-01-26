import { siteConfig } from "@/app/lib/config";
import { Mail, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacatures - LadyWax",
  description:
    "Werken bij LadyWax? Bekijk onze vacatures en groeimogelijkheden.",
};

export default function CareersPage() {
  const { title, content, email } = siteConfig.careersPage;

  return (
    <div className="min-h-screen bg-secondary-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 font-serif mb-6">
            {title}
          </h1>
          <div className="h-1 w-24 bg-primary-500 mx-auto rounded-full opacity-50 mb-8"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-secondary-100 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary-50 rounded-full blur-3xl opacity-60"></div>

          <div className="prose prose-lg prose-secondary max-w-none text-secondary-700 space-y-6 relative z-10">
            {content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph.split(/(violier@ladywax\.nl)/g).map((part, i) =>
                  part === "violier@ladywax.nl" ? (
                    <a
                      key={i}
                      href="mailto:violier@ladywax.nl"
                      className="text-primary-600 font-bold hover:underline"
                    >
                      {part}
                    </a>
                  ) : (
                    part
                  ),
                )}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-secondary-100 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-500/25 active:scale-95"
            >
              <Mail size={20} />
              Solliciteer via Email
            </a>
            <div className="text-secondary-500 text-sm italic flex items-center gap-1">
              <Heart size={16} className="text-primary-400" />
              <span>We kijken uit naar je!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
