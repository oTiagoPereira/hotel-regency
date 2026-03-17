import { useTranslation } from "react-i18next";
import { Button } from "@shared";
import { Select } from "@shared";
import {
  Add,
  FilterList,
  FileDownload,
  Edit,
  Group,
  Person,
  PersonOff,
  AdminPanelSettings,
  VpnKey,
} from "@mui/icons-material";
import { UsersStyles as styles } from "./Users.style";
import { AddUserModal } from "./Modals/AddUserModal";
import { DeactivateUserModal } from "./Modals/DeactivateUserModal";
import { Table, type Column } from "@shared";
import { Badge, type BadgeVariant } from "@shared";
import { PageHeader } from "@shared";
import { useUsers, type User } from "@features/admin/hooks/useUsers";

export default function Users() {
  const { t } = useTranslation();
  const { filteredUsers, stats, filters, modals, actions } = useUsers();

  const getRoleVariant = (role: string): BadgeVariant => {
    switch (role) {
      case "manager":
        return "purple";
      case "reception":
        return "info";
      case "sales":
        return "success";
      case "support":
        return "warning";
      default:
        return "default";
    }
  };

  const getStatusVariant = (status: string): BadgeVariant => {
    return status === "active" ? "success" : "danger";
  };

  const columns: Column<User>[] = [
    {
      key: "name",
      header: t("dashboard.users.table.employee"),
      render: (user) => (
        <div className={styles.userCell}>
          <img
            src={user.avatar}
            alt={user.name}
            className={styles.userAvatar}
          />
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name}</span>
            <span className={styles.userEmail}>{user.email}</span>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      header: t("dashboard.users.table.role"),
      render: (user) => (
        <Badge variant={getRoleVariant(user.roleType)}>
          {filters.roleFilter === "manager" ? (
            <AdminPanelSettings fontSize="inherit" />
          ) : null}
          {user.role}
        </Badge>
      ),
    },
    {
      key: "accessLevel",
      header: t("dashboard.users.table.accessLevel"),
      render: (user) => (
        <Badge variant="warning">
          <VpnKey fontSize="inherit" />
          {user.accessLevel}
        </Badge>
      ),
    },
    {
      key: "status",
      header: t("dashboard.users.table.status"),
      render: (user) => (
        <Badge variant={getStatusVariant(user.status)}>
          {user.status === "active"
            ? t("dashboard.status.active")
            : t("dashboard.status.inactive")}
        </Badge>
      ),
    },
    {
      key: "lastAccess",
      header: t("dashboard.users.table.lastAccess"),
    },
    {
      key: "actions",
      header: t("dashboard.users.table.actions"),
      render: (user) => (
        <div className={styles.actionsContainer}>
          <button
            onClick={() => actions.openEditModal(user)}
            className={`${styles.actionButton} text-info hover:bg-info-light`}
            title={t("dashboard.actions.edit")}
            aria-label={t("dashboard.actions.edit")}
          >
            <Edit fontSize="small" />
          </button>
          <button
            className={`${styles.actionButton} text-text-muted hover:bg-surface`}
            title={t("dashboard.users.table.accessLevel")}
            aria-label={t("dashboard.users.table.accessLevel")}
          >
            <VpnKey fontSize="small" />
          </button>
          <button
            onClick={() => actions.openDeactivateModal(user)}
            className={`${styles.actionButton} text-error hover:bg-error-light`}
            title={t("dashboard.actions.deactivate")}
            aria-label={t("dashboard.actions.deactivate")}
          >
            <PersonOff fontSize="small" />
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
              {t("dashboard.users.stats.total")}
            </span>
            <span className={styles.statsValue}>{stats.total}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-info-light text-info`}
          >
            <Group />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.users.stats.active")}
            </span>
            <span className={styles.statsValue}>{stats.active}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-success-light text-success`}
          >
            <Person />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.users.stats.inactive")}
            </span>
            <span className={styles.statsValue}>{stats.inactive}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-error-light text-error`}
          >
            <PersonOff />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("dashboard.users.stats.admins")}
            </span>
            <span className={styles.statsValue}>{stats.admins}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-accent-light text-accent`}
          >
            <AdminPanelSettings />
          </div>
        </div>
      </div>

      <PageHeader
        searchPlaceholder={t("dashboard.users.filters.search")}
        searchValue={filters.searchTerm}
        onSearchChange={filters.setSearchTerm}
        filters={
          <>
            <Select
              value={filters.roleFilter}
              onChange={(e) => filters.setRoleFilter(e.target.value)}
              containerClassName="w-full md:w-48"
            >
              <option value="all">{t("dashboard.users.filters.allRoles")}</option>
              <option value="manager">
                {t("dashboard.users.filters.roles.manager")}
              </option>
              <option value="reception">
                {t("dashboard.users.filters.roles.reception")}
              </option>
              <option value="sales">
                {t("dashboard.users.filters.roles.sales")}
              </option>
              <option value="support">
                {t("dashboard.users.filters.roles.support")}
              </option>
            </Select>

            <Button
              label="Filtros"
              Icon={FilterList}
              variant="secondary"
              size="small"
              className="md:w-auto"
            />
          </>
        }
        actions={
          <>
            <Select
              value=""
              onChange={(e) => actions.handleExport(e.target.value)}
              containerClassName="w-full md:w-auto"
              icon={<FileDownload fontSize="small" />}
              iconClassName="text-primary"
              arrowClassName="text-primary"
              placeholder={t("dashboard.actions.export")}
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

            <Button
              label={t("dashboard.users.newUser")}
              onClick={() => modals.setIsAddUserModalOpen(true)}
              variant="primary"
              size="small"
              Icon={Add}
              className="md:w-auto"
            />
          </>
        }
      />

      <Table
        title={t("dashboard.users.title")}
        columns={columns}
        data={filteredUsers}
        keyExtractor={(user) => user.id}
        totalItems={stats.total}
        resultsText={t("dashboard.users.pagination.results")}
      />

      <AddUserModal
        isOpen={modals.isAddUserModalOpen}
        onClose={() => modals.setIsAddUserModalOpen(false)}
        onSave={actions.handleAddUser}
      />

      <AddUserModal
        isOpen={modals.isEditUserModalOpen}
        onClose={() => {
          modals.setIsEditUserModalOpen(false);
          modals.setSelectedUser(null);
        }}
        onSave={actions.handleEditUser}
        initialData={modals.selectedUser}
      />

      <DeactivateUserModal
        isOpen={modals.isDeactivateUserModalOpen}
        onClose={() => {
          modals.setIsDeactivateUserModalOpen(false);
          modals.setSelectedUser(null);
        }}
        onConfirm={actions.handleDeactivateUser}
        userName={modals.selectedUser?.name || ""}
      />
    </div>
  );
}
