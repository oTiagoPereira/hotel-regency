import { useState, useMemo } from "react";

export interface User {
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

export interface UserFormData {
  name: string;
  email: string;
  phone: string;
  document: string;
  role: string;
  accessLevel: string;
  password?: string;
}

const initialUsers: User[] = [
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

export function useUsers() {
  const [users] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isDeactivateUserModalOpen, setIsDeactivateUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleExport = (format: string) => {
    console.log(`Exporting users as ${format}`);
  };

  const handleAddUser = (userData: UserFormData) => {
    console.log("Adding user:", userData);
    setIsAddUserModalOpen(false);
  };

  const handleEditUser = (userData: UserFormData) => {
    console.log("Editing user:", userData);
    setIsEditUserModalOpen(false);
    setSelectedUser(null);
  };

  const handleDeactivateUser = () => {
    console.log("Deactivating user:", selectedUser);
    setIsDeactivateUserModalOpen(false);
    setSelectedUser(null);
  };

  const openEditModal = (user: User) => {
    setSelectedUser(user);
    setIsEditUserModalOpen(true);
  };

  const openDeactivateModal = (user: User) => {
    setSelectedUser(user);
    setIsDeactivateUserModalOpen(true);
  };

  const stats = useMemo(() => {
    return {
      total: users.length,
      active: users.filter((u) => u.status === "active").length,
      inactive: users.filter((u) => u.status === "inactive").length,
      admins: users.filter((u) => u.accessLevel === "Administrador").length,
    };
  }, [users]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter =
        roleFilter === "all" || user.roleType === roleFilter;
      return matchesSearch && matchesFilter;
    });
  }, [users, searchTerm, roleFilter]);

  return {
    users,
    filteredUsers,
    stats,
    filters: {
      searchTerm,
      setSearchTerm,
      roleFilter,
      setRoleFilter,
    },
    modals: {
      isAddUserModalOpen,
      setIsAddUserModalOpen,
      isEditUserModalOpen,
      setIsEditUserModalOpen,
      isDeactivateUserModalOpen,
      setIsDeactivateUserModalOpen,
      selectedUser,
      setSelectedUser,
    },
    actions: {
      handleExport,
      handleAddUser,
      handleEditUser,
      handleDeactivateUser,
      openEditModal,
      openDeactivateModal,
    },
  };
}
