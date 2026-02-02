import {
  getBusinessData,
  getNavigationData,
  getLocationsData,
} from "../lib/data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigation, locations, business] = await Promise.all([
    getNavigationData(),
    getLocationsData(),
    getBusinessData(),
  ]);

  return (
    <>
      <Header navigation={navigation} locations={locations} />
      <main>{children}</main>
      <Footer
        navigation={navigation}
        locations={locations}
        business={business}
      />
      <ScrollToTop />
    </>
  );
}
