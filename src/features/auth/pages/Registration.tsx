import { FormRegistration } from "@features/auth";
import { useHead } from "@shared";
import { MainLayout } from "@core/layouts/mainLayout";

function Registration() {
  useHead({
    title: "Cadastro - Regency Hotel",
    metaTags: [
      {
        name: "description",
        content: "Faça o Cadastro para acessar sua conta no Regency Hotel",
      },
        {
            name: "keywords",
            content: "Cadastro, hotel, acesso, conta, Regency",
        },
        { property: "og:title", content: "Cadastro - Regency Hotel" },
        {
            property: "og:description",
            content: "Crie sua conta para acessar sua conta no Regency Hotel",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://regencyheights.vercel.app/login" },
        {
            property: "og:image",
            content: "https://regencyheights.vercel.app/logo.svg",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Cadastro - Regency Hotel" },
        {
            name: "twitter:description",
            content: "Faça o Cadastro para acessar sua conta no Regency Hotel",
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
