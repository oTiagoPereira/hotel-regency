import { useLocation } from "react-router-dom";
import { FormLoginVerifyEmail } from "@features/auth";
import { MainLayout } from "@core/layouts/mainLayout";
import { useHead } from "@shared";

function VerifyEmail() {
  useHead({title: "Verificar Email - Regency Hotel" })
  const location = useLocation();
  const { type: typeEmail } = location.state || {};

  return (
    <MainLayout>
      <FormLoginVerifyEmail typeEmail={typeEmail} />
    </MainLayout>
  );
}

export default VerifyEmail;
