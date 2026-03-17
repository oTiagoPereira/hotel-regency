import { useTranslation } from "react-i18next";
import { PageHeader, Input, Button } from "@shared";

export default function ClientProfile() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      <PageHeader
        title={t("client.profile.title")}
        subtitle={t("client.profile.subtitle")}
      />

      <div className="w-full max-w-3xl bg-white p-6 rounded-xl border border-border-light shadow-sm">
        <h3 className="text-lg font-bold text-text-color mb-4">{t("client.profile.basicInfo")}</h3>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              label={t("client.profile.name")} 
              defaultValue={t("client.home.greeting", { name: "Silva" }).replace(t("client.home.greeting", { name: "" }), "")} // Hack para pegar o nome
            />
            <Input 
              label={t("client.profile.email")} 
              type="email" 
              defaultValue="hospede@email.com" 
              disabled 
            />
            <Input 
              label={t("client.profile.phone")} 
              type="tel" 
              defaultValue="(11) 99999-9999" 
            />
            <Input 
              label={t("client.profile.cpf")} 
              defaultValue="123.456.789-00" 
              disabled
            />
          </div>

          <div className="mt-6 border-t border-border-light pt-6">
            <h3 className="text-lg font-bold text-text-color mb-4">{t("client.profile.security")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label={t("client.profile.newPassword")} 
                type="password" 
                placeholder="••••••••" 
              />
              <Input 
                label={t("client.profile.confirmPassword")} 
                type="password" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button 
              label={t("client.profile.save")} 
              variant="primary" 
              type="submit" 
            />
          </div>
        </form>
      </div>
    </div>
  );
}
