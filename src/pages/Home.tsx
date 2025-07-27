import {
  CheckBox,
  HeroBanner,
  AboutUs,
  WhyRegency,
  HomeRooms,
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
    </MainLayout>
  );
}

export default Home;
