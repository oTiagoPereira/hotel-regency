import { useTranslation } from "react-i18next";
import { lazy, Suspense, useMemo } from "react";
import { MainLayout } from "@core/layouts/mainLayout";
import { HeroBanner } from "@features/accommodation";
import { CheckBox, useHead } from "@shared";

const AboutUs = lazy(() => import("../AboutUs/AboutUs"));
const WhyRegency = lazy(() => import("../WhyRegency/WhyRegency"));
const HomeRooms = lazy(() => import("../HomeRooms/HomeRooms"));
const Amenities = lazy(() => import("../Amenities/Amenities"));
const GuestExperience = lazy(() => import("../GuestExperience/GuestExperience"));

const fallbackElement = <div className="h-[300px] bg-border-light animate-pulse" />;

function Home() {
  const { t } = useTranslation();
  const metaTags = useMemo(
    () => [
      {
        name: "description",
        content: t("seo.home.description"),
      },
      {
        name: "keywords",
        content: t("seo.home.keywords"),
      },
      { property: "og:title", content: t("seo.home.title") },
      {
        property: "og:description",
        content: t("seo.home.description"),
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://regencyheights.vercel.app/" },
      {
        property: "og:image",
        content: "https://regencyheights.vercel.app/logo.svg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("seo.home.title") },
      {
        name: "twitter:description",
        content: t("seo.home.description"),
      },
      {
        name: "twitter:image",
        content: "https://regencyheights.vercel.app/logo.svg",
      },
    ],
    [t],
  );

  useHead({
    title: t("seo.home.title"),
    metaTags,
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
