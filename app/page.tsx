import Hero from "./components/Hero";
import GeometricDivider from "./components/GeometricDivider";
import PricingToppers from "./components/PricingToppers";
import FeaturesSection from "./components/FeaturesSection";
import LocationsSection from "./components/LocationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AppointmentSection from "./components/AppointmentSection";

export default function Home() {
  return (
    <>
      <Hero />
      <GeometricDivider />
      <PricingToppers />
      <FeaturesSection />
      <LocationsSection />
      <TestimonialsSection />
      <AppointmentSection />
    </>
  );
}
