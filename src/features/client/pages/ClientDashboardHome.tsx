import { useTranslation } from "react-i18next";
import { PageHeader, Badge, Button } from "@shared";
import { ContentCopy, Hotel, CardGiftcard, LiveHelp } from "@mui/icons-material";

export default function ClientDashboardHome() {
  const { t } = useTranslation();

  // Mocked próxima reserva
  const nextReservation = {
    id: "RES-98213",
    hotel: "Regency Premium Hotel",
    checkIn: "15 Out 2026, 14:00",
    checkOut: "20 Out 2026, 12:00",
    status: "Confirmed",
    guests: "2",
    roomInfo: t("dashboard.rooms.modals.types.deluxe"), // Exemplo de uso de chave existente
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      <PageHeader
        title={t("client.home.greeting", { name: "Hóspede Silva" })}
        subtitle={t("client.home.subtitle")}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm flex items-center gap-4">
          <div className="p-3 bg-primary-light text-primary rounded-lg">
            <Hotel />
          </div>
          <div>
            <p className="text-sm text-text-muted">{t("client.home.stats.total")}</p>
            <h3 className="text-2xl font-bold text-text-color">12</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm flex items-center gap-4">
          <div className="p-3 bg-secondary-light text-secondary rounded-lg">
            <CardGiftcard />
          </div>
          <div>
            <p className="text-sm text-text-muted">{t("client.home.stats.loyalty")}</p>
            <h3 className="text-2xl font-bold text-text-color">4.500</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm flex items-center gap-4">
          <div className="p-3 bg-info-light text-info rounded-lg">
            <LiveHelp />
          </div>
          <div>
            <p className="text-sm text-text-muted">{t("client.home.stats.support")}</p>
            <h3 className="text-2xl font-bold text-text-color">1</h3>
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-6 rounded-xl border border-border-light shadow-sm">
        <h2 className="text-xl font-bold text-text-color mb-4">
          {t("client.home.nextTrip")}
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface p-4 rounded-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg text-text-color">{nextReservation.hotel}</span>
              <Badge variant="success">{t(`client.reservations.status.${nextReservation.status}`)}</Badge>
            </div>
            <p className="text-text-muted">{nextReservation.roomInfo} — {nextReservation.guests} {t("dashboard.reservations.table.guests")}</p>
            <div className="text-sm text-text-muted flex items-center gap-2 mt-2">
              <strong>{t("dashboard.reservations.table.checkIn")}:</strong> {nextReservation.checkIn} <br className="md:hidden" />
              <strong>| {t("dashboard.reservations.table.checkOut")}:</strong> {nextReservation.checkOut}
            </div>
            <div className="mt-2 text-xs flex items-center gap-1 text-text-muted">
              {t("client.reservations.table.id")} #{nextReservation.id}
              <button aria-label="Copiar ID da reserva" className="hover:text-primary transition-colors">
                <ContentCopy fontSize="inherit" />
              </button>
            </div>
          </div>

          <div className="flex w-full md:w-auto flex-col gap-2">
            <Button
              label={t("client.home.seeDetails")}
              variant="secondary"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
