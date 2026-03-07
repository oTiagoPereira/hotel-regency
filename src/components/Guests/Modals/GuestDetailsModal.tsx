import { useTranslation } from "react-i18next";
import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import {
  Phone,
  Email,
  CalendarToday,
  Badge,
  CreditCard,
  Hotel,
} from "@mui/icons-material";

interface Guest {
  id: number;
  name: string;
  email: string;
  phone: string;
  document: string;
  status: string;
  totalReservations: number;
  totalSpent: number;
  lastVisit: string;
  avatar: string;
  vip: boolean;
}

interface GuestDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  guest: Guest | null;
}

export const GuestDetailsModal = ({
  isOpen,
  onClose,
  guest,
}: GuestDetailsModalProps) => {
  const { t } = useTranslation();

  if (!guest) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t("dashboard.guests.modals.details")}
      size="large"
      footer={
        <div className="w-full flex justify-end">
          <Button
            label={t("dashboard.actions.cancel")}
            onClick={onClose}
            variant="secondary"
            size="small"
            className="w-auto"
          />
        </div>
      }
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 flex flex-col items-center">
          <img
            src={guest.avatar}
            alt={guest.name}
            className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-gray-100"
          />
          {guest.vip && (
            <span className="bg-warning-light text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {t("dashboard.guests.modals.fields.vip")}
            </span>
          )}
        </div>

        <div className="flex-grow space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-text-color mb-1">
              {guest.name}
            </h3>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                guest.status === "active"
                  ? "bg-success-light text-green-800"
                  : "bg-surface text-text-color"
              }`}
            >
              {guest.status === "active"
                ? t("dashboard.status.active")
                : t("dashboard.status.inactive")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface p-4 rounded-xl flex items-start gap-3">
              <Email className="text-text-muted mt-0.5" fontSize="small" />
              <div>
                <p className="text-sm text-text-muted">
                  {t("dashboard.guests.modals.fields.email")}
                </p>
                <p className="font-medium text-text-color">{guest.email}</p>
              </div>
            </div>

            <div className="bg-surface p-4 rounded-xl flex items-start gap-3">
              <Phone className="text-text-muted mt-0.5" fontSize="small" />
              <div>
                <p className="text-sm text-text-muted">
                  {t("dashboard.guests.modals.fields.phone")}
                </p>
                <p className="font-medium text-text-color">{guest.phone}</p>
              </div>
            </div>

            <div className="bg-surface p-4 rounded-xl flex items-start gap-3">
              <Badge className="text-text-muted mt-0.5" fontSize="small" />
              <div>
                <p className="text-sm text-text-muted">
                  {t("dashboard.guests.modals.fields.document")}
                </p>
                <p className="font-medium text-text-color">{guest.document}</p>
              </div>
            </div>

            <div className="bg-surface p-4 rounded-xl flex items-start gap-3">
              <CalendarToday
                className="text-text-muted mt-0.5"
                fontSize="small"
              />
              <div>
                <p className="text-sm text-text-muted">
                  {t("dashboard.guests.table.reservationsCount")}
                </p>
                <p className="font-medium text-text-color">{guest.lastVisit}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border-light pt-6 mt-6">
            <h4 className="text-lg font-semibold text-text-color mb-4">
              {t("dashboard.guests.table.reservations")}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-info-light/50 p-4 rounded-xl border border-info-light">
                <div className="w-12 h-12 bg-info-light text-info rounded-full flex items-center justify-center flex-shrink-0">
                  <Hotel />
                </div>
                <div>
                  <p className="text-sm text-info font-medium mb-1">
                    {t("dashboard.guests.table.reservations")}
                  </p>
                  <p className="text-xl font-bold text-text-color whitespace-nowrap">
                    {guest.totalReservations}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-success-light/50 p-4 rounded-xl border border-success-light">
                <div className="w-12 h-12 bg-success-light text-success rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard />
                </div>
                <div>
                  <p className="text-sm text-success font-medium mb-1">
                    {t("dashboard.finance.metrics.totalRevenue")}
                  </p>
                  <p className="text-xl font-bold text-text-color whitespace-nowrap">
                    R${" "}
                    {guest.totalSpent.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
