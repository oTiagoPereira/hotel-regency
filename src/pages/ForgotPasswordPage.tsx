import { FormForgotPassword } from "../components";
import { useHead } from "../hooks/useHead";
import { MainLayout } from "../layouts/mainLayout";

function ForgotPasswordPage() {
  useHead({title: "Esqueceu a Senha? - Hotel Regency" })
  return (
    <MainLayout>
        <FormForgotPassword />
    </MainLayout>
  );
}

export default ForgotPasswordPage;
