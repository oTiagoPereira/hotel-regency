import {
  CheckBox,
  HeroBanner,
  AboutUs,
  WhyRegency,
  HomeRooms,
  Amenities,
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
    </MainLayout>
  );
}

export default Home;
