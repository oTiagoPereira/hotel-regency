import { FormForgotPassword } from "@features/auth";
import { useHead } from "@shared";
import { MainLayout } from "@core/layouts/mainLayout";

function ForgotPasswordPage() {
  useHead({title: "Esqueceu a Senha? - Regency Hotel" })
  return (
    <MainLayout>
        <FormForgotPassword />
    </MainLayout>
  );
}

export default ForgotPasswordPage;
