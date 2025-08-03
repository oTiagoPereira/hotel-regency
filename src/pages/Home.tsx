import { lazy, Suspense } from "react";
import { MainLayout } from "../layouts/mainLayout";
import HeroBanner from "../components/HeroBanner";
import CheckBox from "../components/CheckBox";

const AboutUs = lazy(() => import("../components/AboutUs"));
const WhyRegency = lazy(() => import("../components/WhyRegency"));
const HomeRooms = lazy(() => import("../components/HomeRooms"));
const Amenities = lazy(() => import("../components/Amenities"));
const GuestExperience = lazy(() => import("../components/GuestExperience"));

function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <CheckBox />

      <Suspense fallback={<div className="h-[300px] bg-gray-100 animate-pulse" />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<div className="h-[300px] bg-gray-100 animate-pulse" />}>
        <WhyRegency />
      </Suspense>
      <Suspense fallback={<div className="h-[300px] bg-gray-100 animate-pulse" />}>
        <HomeRooms />
      </Suspense>
      <Suspense fallback={<div className="h-[300px] bg-gray-100 animate-pulse" />}>
        <Amenities />
      </Suspense>
      <Suspense fallback={<div className="h-[300px] bg-gray-100 animate-pulse" />}>
        <GuestExperience />
      </Suspense>
    </MainLayout>
  );
}

export default Home;
