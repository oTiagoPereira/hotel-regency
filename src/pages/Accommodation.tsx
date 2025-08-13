import { RoomsSection } from "../components";
import { useHead } from "../hooks/useHead";
import { MainLayout } from "../layouts/mainLayout";

function Accommodation() {
  useHead({
    title: "Hospedagem - Regency Hotel",
    metaTags: [
      {
        name: "description",
        content:
          "Conheça as opções de hospedagem do Regency Hotel. Quartos confortáveis, elegantes e bem equipados, com café da manhã incluso, Wi-Fi gratuito e localização privilegiada para uma estadia inesquecível.",
      },
      {
        name: "keywords",
        content:
          "hospedagem, quartos de hotel, conforto, elegância, café da manhã, Wi-Fi gratuito, estadia, Regency Hotel",
      },
      { property: "og:title", content: "Hospedagem - Regency Hotel" },
      {
        property: "og:description",
        content:
          "Conheça as opções de hospedagem do Regency Hotel. Quartos confortáveis, elegantes e bem equipados, com café da manhã incluso, Wi-Fi gratuito e localização privilegiada para uma estadia inesquecível.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://regencyheights.vercel.app/accommodation",
      },
      {
        property: "og:image",
        content: "https://regencyheights.vercel.app/logo.svg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hospedagem - Regency Hotel" },
      {
        name: "twitter:description",
        content:
          "Conheça as opções de hospedagem do Regency Hotel. Quartos confortáveis, elegantes e bem equipados, com café da manhã incluso, Wi-Fi gratuito e localização privilegiada para uma estadia inesquecível.",
      },
      {
        name: "twitter:image",
        content: "https://regencyheights.vercel.app/logo.svg",
      },
    ],
  });
  return (
    <MainLayout>
      <RoomsSection />
    </MainLayout>
  );
}

export default Accommodation;
