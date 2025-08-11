import { FormResetPassword } from "../components";
import { useHead } from "../hooks/useHead";
import { MainLayout } from "../layouts/mainLayout";

function ResetPasswordPage() {
    useHead({title: "Redefinir Senha - Hotel Regency" })
    return (
        <MainLayout>
            <FormResetPassword/>
        </MainLayout>
    );
}

export default ResetPasswordPage
