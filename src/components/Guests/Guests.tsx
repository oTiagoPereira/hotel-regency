import { useTranslation } from "react-i18next";
import {
  FileDownload,
  Visibility,
  Edit,
  Block,
  Add,
} from "@mui/icons-material";
import { GuestsStyles as styles } from "./Guests.style";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { AddGuestModal } from "./Modals/AddGuestModal";
import { GuestDetailsModal } from "./Modals/GuestDetailsModal";
import { DeactivateGuestModal } from "./Modals/DeactivateGuestModal";
import { Table, type Column } from "../Table/Table";
import { Badge, type BadgeVariant } from "../Badge/Badge";
import { PageHeader } from "../PageHeader/PageHeader";
import { useGuests, type Guest } from "../../hooks/useGuests";

export default function Guests() {
  const { t } = useTranslation();
  const { filteredGuests, stats, filters, modals, actions } = useGuests();

  const getStatusVariant = (status: string): BadgeVariant => {
    switch (status) {
      case "active":
        return "success";
      case "inactive":
        return "warning";
      case "suspended":
        return "danger";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return t("dashboard.status.active");
      case "inactive":
        return t("dashboard.status.inactive");
      case "suspended":
        return t("dashboard.status.suspended");
      default:
        return status;
    }
  };

  const columns: Column<Guest>[] = [
    {
      key: "client",
      header: t("dashboard.guests.table.client"),
      render: (guest) => (
        <div className={styles.clientCell}>
          <img
            src={guest.avatar}
            alt={guest.name}
            className={styles.avatar}
          />
          <div className={styles.clientInfo}>
            <span className={styles.clientName}>{guest.name}</span>
            <span className={styles.clientId}>
              {t("dashboard.guests.table.id")}: #{guest.id}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "contact",
      header: t("dashboard.guests.table.contact"),
      render: (guest) => (
        <div className={styles.contactCell}>
          <span className={styles.email}>{guest.email}</span>
          <span className={styles.phone}>{guest.phone}</span>
        </div>
      ),
    },
    {
      key: "reservations",
      header: t("dashboard.guests.table.reservations"),
      render: (guest) => (
        <div className={styles.reservationsCell}>
          <span className={styles.resCount}>
            {guest.reservations}
          </span>
          <span className={styles.resLabel}>
            {t("dashboard.guests.table.reservationsCount")}
          </span>
        </div>
      ),
    },
    {
      key: "status",
      header: t("dashboard.guests.table.status"),
      render: (guest) => (
        <Badge variant={getStatusVariant(guest.status)}>
          {getStatusLabel(guest.status)}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: t("dashboard.guests.table.actions"),
      render: (guest) => (
        <div className={styles.actionsCell}>
          <button
            onClick={() => actions.openDetailsModal(guest)}
            className={`${styles.actionButton} text-info hover:bg-info-light`}
            title={t("dashboard.actions.view")}
            aria-label={t("dashboard.actions.view")}
          >
            <Visibility fontSize="small" />
          </button>
          <button
            onClick={() => actions.openEditModal(guest)}
            className={`${styles.actionButton} text-text-muted hover:bg-surface`}
            title={t("dashboard.actions.edit")}
            aria-label={t("dashboard.actions.edit")}
          >
            <Edit fontSize="small" />
          </button>
          <button
            onClick={() => actions.openDeactivateModal(guest)}
            className={`${styles.actionButton} text-error hover:bg-error-light`}
            title={t("dashboard.actions.deactivate")}
            aria-label={t("dashboard.actions.deactivate")}
          >
            <Block fontSize="small" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <PageHeader
        searchPlaceholder={t("dashboard.guests.searchPlaceholder")}
        searchValue={filters.searchTerm}
        onSearchChange={filters.setSearchTerm}
        actions={
          <>
            <Button
              label={t("dashboard.guests.newGuest")}
              Icon={Add}
              variant="primary"
              size="default"
              onClick={() => modals.setIsAddGuestModalOpen(true)}
            />
            <Select
              value=""
              onChange={(e) => actions.handleExport(e.target.value)}
              containerClassName="w-full md:min-w-[fit-content]"
              icon={<FileDownload fontSize="small" />}
              iconClassName="text-primary"
              arrowClassName="text-primary"
              placeholder={t("dashboard.actions.export")}
              className="text-primary"
            >
              <option value="pdf" className="text-primary">
                PDF
              </option>
              <option value="excel" className="text-primary">
                Excel
              </option>
              <option value="csv" className="text-primary">
                CSV
              </option>
            </Select>
          </>
        }
        filters={
          <Select
            value={filters.filterStatus}
            onChange={(e) => filters.setFilterStatus(e.target.value)}
            containerClassName="w-full md:min-w-[fit-content]"
          >
            <option value="all">{t("dashboard.actions.allStatus")}</option>
            <option value="active">{t("dashboard.status.active")}</option>
            <option value="inactive">{t("dashboard.status.inactive")}</option>
            <option value="suspended">{t("dashboard.status.suspended")}</option>
          </Select>
        }
      />

      <Table
        columns={columns}
        data={filteredGuests}
        keyExtractor={(guest) => guest.id}
        totalItems={stats.total}
        resultsText={t("dashboard.users.pagination.results")}
      />

      <AddGuestModal
        isOpen={modals.isAddGuestModalOpen}
        onClose={() => modals.setIsAddGuestModalOpen(false)}
        onSave={actions.handleAddGuest}
      />

      <AddGuestModal
        isOpen={modals.isEditGuestModalOpen}
        onClose={() => {
          modals.setIsEditGuestModalOpen(false);
          modals.setSelectedGuest(null);
        }}
        onSave={actions.handleEditGuest}
        initialData={
          modals.selectedGuest
            ? {
                name: modals.selectedGuest.name,
                email: modals.selectedGuest.email,
                phone: modals.selectedGuest.phone,
                document: modals.selectedGuest.document,
                vip: modals.selectedGuest.vip || false,
              }
            : null
        }
      />

      <GuestDetailsModal
        isOpen={modals.isDetailsModalOpen}
        onClose={() => {
          modals.setIsDetailsModalOpen(false);
          modals.setSelectedGuest(null);
        }}
        guest={
          modals.selectedGuest
            ? {
                id: Number(modals.selectedGuest.id),
                name: modals.selectedGuest.name,
                email: modals.selectedGuest.email,
                phone: modals.selectedGuest.phone,
                document: modals.selectedGuest.document,
                status: modals.selectedGuest.status,
                avatar: modals.selectedGuest.avatar,
                vip: modals.selectedGuest.vip || false,
                totalReservations: modals.selectedGuest.totalReservations || 0,
                totalSpent: modals.selectedGuest.totalSpent || 0,
                lastVisit: modals.selectedGuest.lastVisit || "-",
              }
            : null
        }
      />

      <DeactivateGuestModal
        isOpen={modals.isDeactivateModalOpen}
        onClose={() => {
          modals.setIsDeactivateModalOpen(false);
          modals.setSelectedGuest(null);
        }}
        onConfirm={actions.handleDeactivateGuest}
        guestName={modals.selectedGuest?.name || ""}
      />
    </div>
  );
}
