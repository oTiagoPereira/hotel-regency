import { lazy, Suspense } from "react";
import { MainLayout } from "../layouts/mainLayout";
import HeroBanner from "../components/HeroBanner";
import CheckBox from "../components/CheckBox";
import { useHead } from "../hooks/useHead";

const AboutUs = lazy(() => import("../components/AboutUs"));
const WhyRegency = lazy(() => import("../components/WhyRegency"));
const HomeRooms = lazy(() => import("../components/HomeRooms"));
const Amenities = lazy(() => import("../components/Amenities"));
const GuestExperience = lazy(() => import("../components/GuestExperience"));

const fallbackElement = <div className="h-[300px] bg-gray-300 animate-pulse" />;

function Home() {
  useHead({
    title: "Home - Regency Hotel",
    metaTags: [
      {
        name: "description",
        content:
          "Descubra o conforto e a elegância do Hotel Regency Heights. Localizado em uma região privilegiada, oferecemos acomodações sofisticadas, café da manhã incluso, Wi-Fi gratuito e atendimento de excelência para uma estadia inesquecível.",
      },
      {
        name: "keywords",
        content:
          "hotel, hospedagem, conforto, elegância, café da manhã, Wi-Fi gratuito, atendimento de excelência",
      },
      { property: "og:title", content: "Home - Regency Hotel" },
      {
        property: "og:description",
        content:
          "Descubra o conforto e a elegância do Hotel Regency Heights. Localizado em uma região privilegiada, oferecemos acomodações sofisticadas, café da manhã incluso, Wi-Fi gratuito e atendimento de excelência para uma estadia inesquecível.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://regencyheights.vercel.app/" },
      {
        property: "og:image",
        content: "https://regencyheights.vercel.app/logo.svg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Home - Regency Hotel" },
      {
        name: "twitter:description",
        content:
          "Descubra o conforto e a elegância do Hotel Regency Heights. Localizado em uma região privilegiada, oferecemos acomodações sofisticadas, café da manhã incluso, Wi-Fi gratuito e atendimento de excelência para uma estadia inesquecível.",
      },
      {
        name: "twitter:image",
        content: "https://regencyheights.vercel.app/logo.svg",
      },
    ],
  });
  return (
    <MainLayout>
      <HeroBanner />
      <CheckBox />

      <Suspense fallback={fallbackElement}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={fallbackElement}>
        <WhyRegency />
      </Suspense>
      <Suspense fallback={fallbackElement}>
        <HomeRooms />
      </Suspense>
      <Suspense fallback={fallbackElement}>
        <Amenities />
      </Suspense>
      <Suspense fallback={fallbackElement}>
        <GuestExperience />
      </Suspense>
    </MainLayout>
  );
}

export default Home;
