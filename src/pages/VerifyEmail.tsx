import { useLocation } from "react-router-dom";
import { FormLoginVerifyEmail } from "../components";
import { MainLayout } from "../layouts/mainLayout";
import { useHead } from "../hooks/useHead";

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
