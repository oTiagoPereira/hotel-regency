import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import {
  Search,
  Add,
  FilterList,
  FileDownload,
  Edit,
  Group,
  Person,
  PersonOff,
  AdminPanelSettings,
  VpnKey,
  Block,
  CheckCircle,
} from "@mui/icons-material";
import { UsersStyles as styles } from "./Users.style";
import { AddUserModal } from "./Modals/AddUserModal";
import { DeactivateUserModal } from "./Modals/DeactivateUserModal";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  document: string;
  avatar: string;
  role: string;
  roleType: string;
  accessLevel: string;
  status: string;
  lastAccess: string;
}

// Interface matching AddUserModal output
interface UserFormData {
  name: string;
  email: string;
  phone: string;
  document: string;
  role: string;
  accessLevel: string;
  password?: string;
}

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Modal State
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isDeactivateUserModalOpen, setIsDeactivateUserModalOpen] =
    useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleExport = (format: string) => {
    console.log(`Exporting users as ${format}`);
  };

  const handleAddUser = (userData: UserFormData) => {
    console.log("Adding user:", userData);
    // TODO: Add API call
  };

  const handleEditUser = (userData: UserFormData) => {
    console.log("Editing user:", userData);
    // TODO: Add API call
  };

  const handleDeactivateUser = () => {
    console.log("Deactivating user:", selectedUser);
    // TODO: Add API call
  };

  const openEditModal = (user: User) => {
    setSelectedUser(user);
    setIsEditUserModalOpen(true);
  };

  const openDeactivateModal = (user: User) => {
    setSelectedUser(user);
    setIsDeactivateUserModalOpen(true);
  };

  const users = [
    {
      id: 1,
      name: "Ana Silva",
      email: "ana.silva@empresa.com",
      phone: "(11) 99999-1111",
      document: "442132",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      role: "Gerente",
      roleType: "manager",
      accessLevel: "Administrador",
      status: "active",
      lastAccess: "Há 2 horas",
    },
    {
      id: 2,
      name: "Carlos Santos",
      email: "carlos.santos@empresa.com",
      phone: "(11) 99999-2222",
      document: "432455",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
      role: "Recepção",
      roleType: "reception",
      accessLevel: "Editor",
      status: "active",
      lastAccess: "Há 1 dia",
    },
    {
      id: 3,
      name: "Maria Oliveira",
      email: "maria.oliveira@empresa.com",
      phone: "(11) 99999-3333",
      document: "442132",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      role: "Vendas",
      roleType: "sales",
      accessLevel: "Visualizador",
      status: "inactive",
      lastAccess: "Há 1 semana",
    },
    {
      id: 4,
      name: "João Costa",
      email: "joao.costa@empresa.com",
      phone: "(11) 99999-4444",
      document: "442132",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      role: "Suporte",
      roleType: "support",
      accessLevel: "Editor",
      status: "active",
      lastAccess: "Há 3 horas",
    },
  ];

  const stats = {
    total: 24,
    active: 21,
    inactive: 3,
    admins: 4,
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "manager":
        return "bg-purple-100 text-purple-700";
      case "reception":
        return "bg-blue-100 text-blue-700";
      case "sales":
        return "bg-green-100 text-green-700";
      case "support":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  return (
    <div className={styles.container}>
      <div className={styles.statsGrid}>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>Total de Usuários</span>
            <span className={styles.statsValue}>{stats.total}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-blue-100 text-blue-600`}
          >
            <Group />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>Ativos</span>
            <span className={styles.statsValue}>{stats.active}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-green-100 text-green-600`}
          >
            <Person />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>Inativos</span>
            <span className={styles.statsValue}>{stats.inactive}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-red-100 text-red-600`}
          >
            <PersonOff />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>Administradores</span>
            <span className={styles.statsValue}>{stats.admins}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-purple-100 text-purple-600`}
          >
            <AdminPanelSettings />
          </div>
        </div>
      </div>

      <div className={styles.filtersContainer}>
        <div className="w-full md:w-80">
          <Input
            placeholder="Buscar funcionários..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search />}
          />
        </div>

        <div className={styles.filtersRight}>
          <Select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            containerClassName="w-full md:w-48"
          >
            <option value="all">Todos os cargos</option>
            <option value="manager">Gerente</option>
            <option value="reception">Recepção</option>
            <option value="sales">Vendas</option>
            <option value="support">Suporte</option>
          </Select>

          <Button
            label="Filtros"
            Icon={FilterList}
            variant="secondary"
            size="small"
            className="md:w-auto"
          />

          <Select
            value=""
            onChange={(e) => handleExport(e.target.value)}
            containerClassName="w-full md:w-auto"
            icon={<FileDownload fontSize="small" />}
            iconClassName="text-primary"
            arrowClassName="text-primary"
            placeholder="Exportar"
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
            label="Novo Funcionário"
            onClick={() => setIsAddUserModalOpen(true)}
            variant="primary"
            size="small"
            Icon={Add}
            className="md:w-auto"
          />
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <h3 className={styles.tableTitle}>Lista de Funcionários</h3>
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Funcionário</th>
              <th className={styles.th}>Cargo</th>
              <th className={styles.th}>Nível de Acesso</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Último Acesso</th>
              <th className={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {users.map((user) => (
              <tr key={user.id} className={styles.tr}>
                <td className={styles.td}>
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
                </td>
                <td className={styles.td}>
                  <span
                    className={`${styles.roleBadge} ${getRoleColor(user.roleType)}`}
                  >
                    {roleFilter === "manager" ? (
                      <AdminPanelSettings fontSize="inherit" />
                    ) : null}
                    {user.role}
                  </span>
                </td>
                <td className={styles.td}>
                  <span className={styles.accessBadge}>
                    <VpnKey fontSize="inherit" className="mr-1" />
                    {user.accessLevel}
                  </span>
                </td>
                <td className={styles.td}>
                  <span
                    className={`${styles.statusBadge} ${getStatusColor(user.status)}`}
                  >
                    {user.status === "active" ? (
                      <CheckCircle fontSize="inherit" />
                    ) : (
                      <Block fontSize="inherit" />
                    )}
                    {user.status === "active" ? "Ativo" : "Inativo"}
                  </span>
                </td>
                <td className={styles.td}>{user.lastAccess}</td>
                <td className={styles.td}>
                  <div className={styles.actionsContainer}>
                    <button
                      onClick={() => openEditModal(user)}
                      className={`${styles.actionButton} text-blue-500 hover:bg-blue-50`}
                    >
                      <Edit fontSize="small" />
                    </button>
                    <button
                      className={`${styles.actionButton} text-gray-500 hover:bg-gray-50`}
                    >
                      <VpnKey fontSize="small" />
                    </button>
                    <button
                      onClick={() => openDeactivateModal(user)}
                      className={`${styles.actionButton} text-red-500 hover:bg-red-50`}
                    >
                      <PersonOff fontSize="small" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.paginationContainer}>
          <span className={styles.paginationInfo}>
            Mostrando 1 a {users.length} de {stats.total} resultados
          </span>
          <div className={styles.paginationControls}>
            <button className={styles.paginationButton} disabled>
              Anterior
            </button>
            <button className={styles.paginationCurrent}>1</button>
            <button className={styles.paginationButton}>2</button>
            <button className={styles.paginationButton}>3</button>
            <button className={styles.paginationButton}>Próximo</button>
          </div>
        </div>
      </div>

      <AddUserModal
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        onSave={handleAddUser}
      />

      <AddUserModal
        isOpen={isEditUserModalOpen}
        onClose={() => {
          setIsEditUserModalOpen(false);
          setSelectedUser(null);
        }}
        onSave={handleEditUser}
        initialData={selectedUser}
      />

      <DeactivateUserModal
        isOpen={isDeactivateUserModalOpen}
        onClose={() => {
          setIsDeactivateUserModalOpen(false);
          setSelectedUser(null);
        }}
        onConfirm={handleDeactivateUser}
        userName={selectedUser?.name || ""}
      />
    </div>
  );
}
