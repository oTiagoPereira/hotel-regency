import { FormResetPassword } from "@features/auth";
import { useHead } from "@shared";
import { MainLayout } from "@core/layouts/mainLayout";

function ResetPasswordPage() {
    useHead({title: "Redefinir Senha - Regency Hotel" })
    return (
        <MainLayout>
            <FormResetPassword/>
        </MainLayout>
    );
}

export default ResetPasswordPage
