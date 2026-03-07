import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";
import {
  Add,
  FilterList,
  CheckCircle,
  Cancel,
  Schedule,
  Event as EventIcon,
  Visibility,
  Close,
  Check,
} from "@mui/icons-material";
import { ReservationsStyles as styles } from "./Reservations.style";
import { AddReservationModal } from "./Modals/AddReservationModal";
import { ReservationDetailsModal } from "./Modals/ReservationDetailsModal";
import { CancelReservationModal } from "./Modals/CancelReservationModal";
import { Table, type Column } from "../Table/Table";
import { Badge, type BadgeVariant } from "../Badge/Badge";
import { PageHeader } from "../PageHeader/PageHeader";
import { useReservations, type Reservation } from "../../hooks/useReservations";

export default function Reservations() {
  const { t } = useTranslation();
  const { filteredReservations, stats, filters, modals, actions } = useReservations();

  const getStatusVariant = (status: string): BadgeVariant => {
    switch (status) {
      case "confirmed":
        return "success";
      case "pending":
        return "warning";
      case "cancelled":
        return "danger";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "confirmed":
        return t("dashboard.reservations.status.confirmed");
      case "pending":
        return t("dashboard.reservations.status.pending");
      case "cancelled":
        return t("dashboard.reservations.status.cancelled");
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  const columns: Column<Reservation>[] = [
    {
      key: "client",
      header: t("dashboard.reservations.table.client"),
      render: (reservation) => (
        <div className={styles.clientCell}>
          <img
            src={reservation.guest.avatar}
            alt={reservation.guest.name}
            className={styles.clientAvatar}
          />
          <div className={styles.clientInfo}>
            <span className={styles.clientName}>
              {reservation.guest.name}
            </span>
            <span className={styles.clientEmail}>
              {reservation.guest.email}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "room",
      header: t("dashboard.reservations.table.room"),
      render: (reservation) => (
        <div className={styles.roomCell}>
          <span className={styles.roomName}>{reservation.room}</span>
          <span className={styles.roomGuests}>
            {reservation.guests}{" "}
            {reservation.guests === 1
              ? t("dashboard.reservations.table.guest")
              : t("dashboard.reservations.table.guests")}
          </span>
        </div>
      ),
    },
    {
      key: "checkIn",
      header: t("dashboard.reservations.table.checkIn"),
      render: (reservation) => formatDate(reservation.checkIn),
    },
    {
      key: "checkOut",
      header: t("dashboard.reservations.table.checkOut"),
      render: (reservation) => formatDate(reservation.checkOut),
    },
    {
      key: "status",
      header: t("dashboard.reservations.table.status"),
      render: (reservation) => (
        <Badge variant={getStatusVariant(reservation.status)}>
          {getStatusLabel(reservation.status)}
        </Badge>
      ),
    },
    {
      key: "total",
      header: t("dashboard.reservations.table.total"),
      render: (reservation) => (
        <span className={styles.priceText}>
          R${" "}
          {reservation.total.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </span>
      ),
    },
    {
      key: "actions",
      header: t("dashboard.reservations.table.actions"),
      render: (reservation) => (
        <div className={styles.actionsContainer}>
          <button
            onClick={() => actions.openDetailsModal(reservation)}
            className={`${styles.actionButton} text-info hover:bg-info-light`}
            title={t("dashboard.reservations.actions.view")}
          >
            <Visibility fontSize="small" />
          </button>
          {reservation.status === "pending" && (
            <button
              className={`${styles.actionButton} text-success hover:bg-success-light`}
              title={t("dashboard.reservations.actions.approve")} aria-label={t("dashboard.reservations.actions.approve")}
            >
              <Check fontSize="small" />
            </button>
          )}
          <button
            onClick={() =>
              reservation.status !== "cancelled" &&
              actions.openCancelModal(reservation)
            }
            className={`${styles.actionButton} ${reservation.status === "cancelled" ? "text-gray-300 cursor-not-allowed" : "text-error hover:bg-error-light"}`}
            title={
              reservation.status === "cancelled"
                ? t("dashboard.reservations.actions.cancelled")
                : t("dashboard.reservations.actions.cancel")
            }
            disabled={reservation.status === "cancelled"}
          >
            {reservation.status === "cancelled" ? (
              <Close fontSize="small" />
            ) : (
              <Cancel fontSize="small" />
            )}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <PageHeader
        title={t("dashboard.reservations.title")}
        filters={
          <>
            <div className={styles.filterGroup}>
              <Select
                className="py-2.5"
                value={filters.filterStatus}
                onChange={(e) => filters.setFilterStatus(e.target.value)}
                containerClassName="w-auto min-w-[200px]"
              >
                <option value="all">
                  {t("dashboard.reservations.filters.all")}
                </option>
                <option value="confirmed">
                  {t("dashboard.reservations.filters.confirmed")}
                </option>
                <option value="pending">
                  {t("dashboard.reservations.filters.pending")}
                </option>
                <option value="cancelled">
                  {t("dashboard.reservations.filters.cancelled")}
                </option>
              </Select>
            </div>
            {/* Input removed from here to reduce bloat, but could easily be re-added as simple standard date inputs where needed */}
            <Button
              label={t("dashboard.reservations.filters.filter")}
              Icon={FilterList}
              variant="secondary"
              size="small"
              className="w-auto h-10 mt-0"
            />
          </>
        }
        actions={
          <Button
            label={t("dashboard.reservations.newReservation")}
            onClick={() => modals.setIsAddModalOpen(true)}
            Icon={Add}
            variant="primary"
            size="default"
          />
        }
      />

      <div className={styles.statsGrid}>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.reservations.stats.total")}
            </span>
            <span className={styles.statsValue}>{stats.total}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-info-light text-info`}
          >
            <EventIcon />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.reservations.stats.confirmed")}
            </span>
            <span className={`${styles.statsValue} text-success`}>
              {stats.confirmed}
            </span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-success-light text-success`}
          >
            <CheckCircle />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.reservations.stats.pending")}
            </span>
            <span className={`${styles.statsValue} text-warning`}>
              {stats.pending}
            </span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-warning-light text-warning`}
          >
            <Schedule />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.reservations.stats.cancelled")}
            </span>
            <span className={`${styles.statsValue} text-error`}>
              {stats.cancelled}
            </span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-error-light text-error`}
          >
            <Cancel />
          </div>
        </div>
      </div>

      <Table
        columns={columns}
        data={filteredReservations}
        keyExtractor={(res) => res.id}
        totalItems={stats.total}
        resultsText={t("dashboard.users.pagination.results")}
      />

      <AddReservationModal
        isOpen={modals.isAddModalOpen}
        onClose={() => modals.setIsAddModalOpen(false)}
        onSave={actions.handleAddReservation}
      />

      <ReservationDetailsModal
        isOpen={modals.isDetailsModalOpen}
        onClose={() => {
          modals.setIsDetailsModalOpen(false);
          modals.setSelectedReservation(null);
        }}
        reservation={modals.selectedReservation}
        onCancelReservation={() => {
          modals.setIsDetailsModalOpen(false);
          modals.setIsCancelModalOpen(true);
        }}
      />

      <CancelReservationModal
        isOpen={modals.isCancelModalOpen}
        onClose={() => {
          modals.setIsCancelModalOpen(false);
          modals.setSelectedReservation(null);
        }}
        onConfirm={actions.handleCancelReservation}
        reservationId={modals.selectedReservation?.id || 0}
      />
    </div>
  );
}
