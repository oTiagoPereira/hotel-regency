import { useTranslation } from "react-i18next";
import { RoomsSection } from "@features/accommodation";
import { useHead } from "@shared";
import { MainLayout } from "@core/layouts/mainLayout";

function Accommodation() {
  const { t } = useTranslation();
  useHead({
    title: t("seo.accommodation.title"),
    metaTags: [
      {
        name: "description",
        content: t("seo.accommodation.description"),
      },
      {
        name: "keywords",
        content: t("seo.accommodation.keywords"),
      },
      { property: "og:title", content: t("seo.accommodation.title") },
      {
        property: "og:description",
        content: t("seo.accommodation.description"),
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
      { name: "twitter:title", content: t("seo.accommodation.title") },
      {
        name: "twitter:description",
        content: t("seo.accommodation.description"),
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
