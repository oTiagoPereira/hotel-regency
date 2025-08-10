import { useLocation } from "react-router-dom";
import { LoginVerifyEmail } from "../components";
import { MainLayout } from "../layouts/mainLayout";

function VerifyEmail() {
  const location = useLocation();
  const { type: typeEmail } = location.state || {};

  return (
    <MainLayout>
      <LoginVerifyEmail typeEmail={typeEmail} />
    </MainLayout>
  );
}

export default VerifyEmail;
