import Hero from "../components/Hero";
import PricingToppers from "../components/PricingToppers";
import FeaturesSection from "../components/FeaturesSection";
import LocationsSection from "../components/LocationsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AppointmentSection from "../components/AppointmentSection";
import {
  getHeroData,
  getFeaturesData,
  getLocationsData,
  getHighlightsData,
} from "../lib/data";

export default async function Home() {
  const [heroData, featuresData, locationsData, highlightsData] =
    await Promise.all([
      getHeroData(),
      getFeaturesData(),
      getLocationsData(),
      getHighlightsData(),
    ]);

  return (
    <>
      <Hero data={heroData} locations={locationsData} />
      <PricingToppers />
      <FeaturesSection data={featuresData} />
      <LocationsSection data={locationsData} highlights={highlightsData} />
      <TestimonialsSection />
      <AppointmentSection locations={locationsData} />
    </>
  );
}
