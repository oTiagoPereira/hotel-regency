import { CheckBox, HeroBanner, AboutUs } from "../components";
import { MainLayout } from "../layouts/mainLayout";

function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <CheckBox />
      <AboutUs />
    </MainLayout>
  );
}

export default Home;
