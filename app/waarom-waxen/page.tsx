import { siteConfig } from "@/app/lib/config";
import { Check, X, HelpCircle, Info } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waarom Waxen? - LadyWax",
  description: siteConfig.waxingPage.subtitle,
};

export default function WaxingPage() {
  const { title, subtitle, intro, brazilian, faq, dosAndDonts } =
    siteConfig.waxingPage;

  return (
    <div className="min-h-screen bg-secondary-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 font-serif mb-6">
            {title}
          </h1>
          <div className="h-1 w-24 bg-primary-500 mx-auto rounded-full opacity-50 mb-8"></div>
          <p className="text-xl text-primary-600 font-medium italic max-w-2xl mx-auto">
            &quot;{subtitle}&quot;
          </p>
        </section>

        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-secondary-100">
          <div className="prose prose-lg prose-secondary max-w-none text-secondary-700 space-y-6">
            {intro.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Brazilian Wax Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
              <Info size={24} />
            </div>
            <h2 className="text-3xl font-bold text-secondary-900 font-serif">
              {brazilian.title}
            </h2>
          </div>
          <p className="text-secondary-600 mb-8 text-lg">
            {brazilian.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {brazilian.types.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-2 font-serif">
                  {type.name}
                </h3>
                <p className="text-secondary-600">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-3xl font-bold text-secondary-900 font-serif">
              Veelgestelde Vragen
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-secondary-100"
              >
                <h3 className="text-lg font-bold text-secondary-900 mb-3 flex gap-2">
                  <span className="text-primary-500">Q:</span> {item.question}
                </h3>
                <p className="text-secondary-600 pl-6 border-l-2 border-secondary-100">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dos and Donts Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Do's */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Check size={20} strokeWidth={3} />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 font-serif">
                Do :)
              </h2>
            </div>
            <ul className="space-y-4">
              {dosAndDonts.do.map((item, index) => (
                <li key={index} className="flex gap-3 text-secondary-700">
                  <Check
                    size={18}
                    className="text-green-500 mt-1 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-red-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <X size={20} strokeWidth={3} />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 font-serif">
                Do NOT :(
              </h2>
            </div>
            <ul className="space-y-4">
              {dosAndDonts.dont.map((item, index) => (
                <li key={index} className="flex gap-3 text-secondary-700">
                  <X size={18} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
