import { FormRegistration } from "../components";
import { useHead } from "../hooks/useHead";
import { MainLayout } from "../layouts/mainLayout";

function Registration() {
  useHead({
    title: "Cadastro - Hotel Regency",
    metaTags: [
      {
        name: "description",
        content: "Faça o Cadastro para acessar sua conta no Hotel Regency",
      },
        {
            name: "keywords",
            content: "Cadastro, hotel, acesso, conta, Regency",
        },
        { property: "og:title", content: "Cadastro - Hotel Regency" },
        {
            property: "og:description",
            content: "Crie sua conta para acessar sua conta no Hotel Regency",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://regencyheights.vercel.app/login" },
        {
            property: "og:image",
            content: "https://regencyheights.vercel.app/logo.svg",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Cadastro - Hotel Regency" },
        {
            name: "twitter:description",
            content: "Faça o Cadastro para acessar sua conta no Hotel Regency",
        },
        {
            name: "twitter:image",
            content: "https://regencyheights.vercel.app/logo.svg",
        },
    ],
  });

  return (
    <MainLayout>
        <FormRegistration />
    </MainLayout>
  );
}

export default Registration;
