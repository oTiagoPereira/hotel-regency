import {
  CheckBox,
  HeroBanner,
  AboutUs,
  WhyRegency,
  HomeRooms,
  Amenities,
  GuestExperience,
} from "../components";
import { MainLayout } from "../layouts/mainLayout";

function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <CheckBox />
      <AboutUs />
      <WhyRegency />
      <HomeRooms />
      <Amenities />
      <GuestExperience />
    </MainLayout>
  );
}

export default Home;
