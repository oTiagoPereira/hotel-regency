import { useTranslation } from "react-i18next";
import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import {
  CalendarToday,
  Person,
  Hotel,
  CreditCard,
  Info,
} from "@mui/icons-material";

interface Reservation {
  id: number;
  guest: {
    name: string;
    email: string;
    avatar: string;
  };
  room: string;
  guests: number;
  checkIn: string;
  checkOut: string;
  status: string;
  total: number;
}

interface ReservationDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  reservation: Reservation | null;
  onCancelReservation?: () => void;
}

export const ReservationDetailsModal = ({
  isOpen,
  onClose,
  reservation,
  onCancelReservation,
}: ReservationDetailsModalProps) => {
  const { t } = useTranslation();

  if (!reservation) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${t("dashboard.reservations.modals.details")} #${reservation.id}`}
      size="default"
      footer={
        <>
          <Button
            label={t("dashboard.reservations.actions.close")}
            onClick={onClose}
            variant="secondary"
            size="small"
            className="w-auto"
          />
          {reservation.status !== "cancelled" && onCancelReservation && (
            <Button
              label={t("dashboard.reservations.actions.cancel")}
              onClick={onCancelReservation}
              variant="danger"
              size="small"
              className="w-auto"
            />
          )}
        </>
      }
    >
      <div className="space-y-6">
        {/* Status Banner */}
        <div
          className={`p-4 rounded-xl flex items-center border ${
            reservation.status === "confirmed"
              ? "bg-success-light text-success border-success-light"
              : reservation.status === "pending"
                ? "bg-warning-light text-warning border-warning-light"
                : "bg-error-light text-error border-error-light"
          }`}
        >
          <Info className="mr-2" />
          <span className="font-semibold capitalize">
            {t("dashboard.reservations.table.status")}:{" "}
            {reservation.status === "confirmed"
              ? t("dashboard.reservations.status.confirmed")
              : reservation.status === "pending"
                ? t("dashboard.reservations.status.pending")
                : t("dashboard.reservations.status.cancelled")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface border border-border-light p-5 rounded-xl">
            <h4 className="text-sm font-semibold text-text-muted uppercase mb-4 flex items-center">
              <Person fontSize="small" className="mr-2" />
              {t("dashboard.reservations.modals.fields.guest")}
            </h4>
            <div className="flex items-center">
              <img
                src={reservation.guest.avatar}
                alt={reservation.guest.name}
                className="w-12 h-12 rounded-full mr-4 object-cover border border-border-light shadow-sm"
              />
              <div>
                <p className="font-semibold text-text-color">
                  {reservation.guest.name}
                </p>
                <p className="text-sm text-text-muted mt-0.5">
                  {reservation.guest.email}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border-light p-5 rounded-xl">
            <h4 className="text-sm font-semibold text-text-muted uppercase mb-4 flex items-center">
              <Hotel fontSize="small" className="mr-2" />
              {t("dashboard.reservations.table.room")}
            </h4>
            <p className="font-semibold text-text-color text-lg mb-1">
              {reservation.room}
            </p>
            <p className="text-sm text-text-muted">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral border border-border-light">
                <Person fontSize="small" /> {reservation.guests}{" "}
                {t("dashboard.reservations.table.guests")}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-surface border border-border-light p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-text-muted uppercase mb-4 flex items-center">
            <CalendarToday fontSize="small" className="mr-2" />
            {t("dashboard.reservations.modals.sections.stayInfo")}
          </h4>
          <div className="flex justify-between items-center bg-neutral border border-border-light p-4 rounded-lg shadow-sm">
            <div className="text-center flex-1">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                {t("dashboard.reservations.table.checkIn")}
              </p>
              <p className="font-semibold text-text-color">
                {new Date(reservation.checkIn).toLocaleDateString("pt-BR")}
              </p>
            </div>
            <div className="h-px w-12 bg-border-light mx-4 relative">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral px-2 text-text-muted text-xs">
                -
              </span>
            </div>
            <div className="text-center flex-1">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                {t("dashboard.reservations.table.checkOut")}
              </p>
              <p className="font-semibold text-text-color">
                {new Date(reservation.checkOut).toLocaleDateString("pt-BR")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-text-color/90">
            <CreditCard className="mr-2" />
            <span>{t("dashboard.reservations.table.total")}</span>
          </div>
          <span className="text-xl font-bold text-text-color">
            R${" "}
            {reservation.total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
    </Modal>
  );
};
