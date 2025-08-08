import FormLogin from "../components/FormLogin";
import { useHead } from "../hooks/useHead";
import { MainLayout } from "../layouts/mainLayout";

function Login() {
  useHead({
    title: "Entrar - Hotel Regency",
    metaTags: [
      {
        name: "description",
        content: "Faça login para acessar sua conta no Hotel Regency",
      },
        {
            name: "keywords",
            content: "login, hotel, acesso, conta, Regency",
        },
        { property: "og:title", content: "Login - Hotel Regency" },
        {
            property: "og:description",
            content: "Faça login para acessar sua conta no Hotel Regency",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://regencyheights.vercel.app/login" },
        {
            property: "og:image",
            content: "https://regencyheights.vercel.app/logo.svg",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Login - Hotel Regency" },
        {
            name: "twitter:description",
            content: "Faça login para acessar sua conta no Hotel Regency",
        },
        {
            name: "twitter:image",
            content: "https://regencyheights.vercel.app/logo.svg",
        },
    ],
  });

  return (
    <MainLayout>
        <FormLogin />
    </MainLayout>
  );
}

export default Login;
