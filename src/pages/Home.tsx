import { CheckBox, HeroBanner, AboutUs, WhyRegency } from "../components";
import { MainLayout } from "../layouts/mainLayout";

function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <CheckBox />
      <AboutUs />
      <WhyRegency />
    </MainLayout>
  );
}

export default Home;
