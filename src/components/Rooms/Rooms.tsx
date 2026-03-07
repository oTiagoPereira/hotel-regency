import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";
import {
  Edit,
  Delete,
  MeetingRoom,
  Engineering,
  KingBed,
  Person,
  Add,
} from "@mui/icons-material";
import { RoomsStyles as styles } from "./Rooms.style";
import { AddRoomModal } from "./Modals/AddRoomModal";
import { DeleteRoomModal } from "./Modals/DeleteRoomModal";
import { Table, type Column } from "../Table/Table";
import { Badge, type BadgeVariant } from "../Badge/Badge";
import { PageHeader } from "../PageHeader/PageHeader";
import { useRooms } from "../../hooks/useRooms";

export default function Rooms() {
  const { t } = useTranslation();
  const { rooms, filteredRooms, stats, filters, modals, actions } = useRooms();

  const getStatusVariant = (status: string): BadgeVariant => {
    switch (status) {
      case "available":
        return "success";
      case "occupied":
        return "warning";
      case "maintenance":
        return "danger";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "available":
        return t("dashboard.rooms.filters.available");
      case "occupied":
        return t("dashboard.rooms.filters.occupied");
      case "maintenance":
        return t("dashboard.rooms.filters.maintenance");
      default:
        return status;
    }
  };

  const columns: Column<typeof rooms[0]>[] = [
    {
      key: "room",
      header: t("dashboard.rooms.table.room"),
      render: (room) => (
        <div className={styles.roomInfo}>
          <div className={styles.roomBadge}>{room.id}</div>
          <span className={styles.roomName}>
            {t("dashboard.rooms.table.room_prefix")} {room.id}
          </span>
        </div>
      ),
    },
    {
      key: "type",
      header: t("dashboard.rooms.table.type"),
    },
    {
      key: "status",
      header: t("dashboard.rooms.table.status"),
      render: (room) => (
        <Badge variant={getStatusVariant(room.status)}>
          {getStatusLabel(room.status)}
        </Badge>
      ),
    },
    {
      key: "capacity",
      header: t("dashboard.rooms.table.capacity"),
      render: (room) => `${room.capacity} ${t("dashboard.rooms.table.people")}`,
    },
    {
      key: "price",
      header: t("dashboard.rooms.table.price"),
      render: (room) => (
        <span className={styles.priceText}>R$ {room.price},00</span>
      ),
    },
    {
      key: "actions",
      header: t("dashboard.rooms.table.actions"),
      render: (room) => (
        <div className={styles.actionsContainer}>
          <button
            className={styles.actionButton}
            onClick={() => actions.openEditModal(room)}
            title={t("dashboard.actions.edit")}
            aria-label={t("dashboard.actions.edit")}
          >
            <Edit fontSize="small" />
          </button>
          <button
            onClick={() => actions.openDeleteModal(room)}
            className={`${styles.actionButton} hover:text-error hover:bg-error-light`}
            title={t("dashboard.actions.delete")}
            aria-label={t("dashboard.actions.delete")}
          >
            <Delete fontSize="small" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.statsGrid}>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.rooms.stats.total")}
            </span>
            <span className={styles.statsValue}>{stats.total}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-info-light text-info`}
          >
            <KingBed />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.rooms.stats.available")}
            </span>
            <span className={styles.statsValue}>{stats.available}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-success-light text-success`}
          >
            <MeetingRoom />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.rooms.stats.occupied")}
            </span>
            <span className={styles.statsValue}>{stats.occupied}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-warning-light text-warning`}
          >
            <Person />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.rooms.stats.maintenance")}
            </span>
            <span className={styles.statsValue}>{stats.maintenance}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-error-light text-error`}
          >
            <Engineering />
          </div>
        </div>
      </div>

      <PageHeader
        searchPlaceholder={t("dashboard.rooms.searchPlaceholder")}
        searchValue={filters.searchTerm}
        onSearchChange={filters.setSearchTerm}
        filters={
          <Select
            value={filters.filterStatus}
            onChange={(e) => filters.setFilterStatus(e.target.value)}
            containerClassName="w-full md:w-auto min-w-[200px]"
          >
            <option value="all">{t("dashboard.rooms.filters.all")}</option>
            <option value="available">
              {t("dashboard.rooms.filters.available")}
            </option>
            <option value="occupied">
              {t("dashboard.rooms.filters.occupied")}
            </option>
            <option value="maintenance">
              {t("dashboard.rooms.filters.maintenance")}
            </option>
          </Select>
        }
        actions={
          <Button
            label={t("dashboard.rooms.newRoom")}
            onClick={() => modals.setIsAddRoomModalOpen(true)}
            variant="minimal"
            size="small"
            Icon={Add}
          />
        }
      />

      <Table
        columns={columns}
        data={filteredRooms}
        keyExtractor={(room) => room.id}
        totalItems={rooms.length}
        resultsText={t("dashboard.rooms.title")}
      />

      <AddRoomModal
        isOpen={modals.isAddRoomModalOpen}
        onClose={() => modals.setIsAddRoomModalOpen(false)}
        onSave={actions.handleAddRoom}
      />

      <AddRoomModal
        isOpen={modals.isEditRoomModalOpen}
        onClose={() => {
          modals.setIsEditRoomModalOpen(false);
          modals.setSelectedRoom(null);
        }}
        onSave={actions.handleEditRoom}
        initialData={modals.selectedRoom}
      />

      <DeleteRoomModal
        isOpen={modals.isDeleteRoomModalOpen}
        onClose={() => {
          modals.setIsDeleteRoomModalOpen(false);
          modals.setSelectedRoom(null);
        }}
        onConfirm={actions.handleDeleteRoom}
        roomNumber={modals.selectedRoom?.number || ""}
      />
    </div>
  );
}
