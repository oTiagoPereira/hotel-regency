import { useState, useMemo } from "react";
import { type GuestFormData } from "../components/Guests/Modals/AddGuestModal";

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  reservations: number;
  status: string;
  avatar: string;
  vip?: boolean;
  totalReservations?: number;
  totalSpent?: number;
  lastVisit?: string;
}

const initialGuests: Guest[] = [
  {
    id: "001",
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 99999-9999",
    document: "123.456.789-00",
    reservations: 24,
    status: "active",
    avatar:
      "https://ui-avatars.com/api/?name=Maria+Silva&background=0D8ABC&color=fff",
    totalReservations: 24,
    totalSpent: 4500,
    lastVisit: "2024-03-01",
    vip: true,
  },
  {
    id: "002",
    name: "João Santos",
    email: "joao.santos@email.com",
    phone: "(11) 88888-8888",
    document: "987.654.321-11",
    reservations: 12,
    status: "active",
    avatar:
      "https://ui-avatars.com/api/?name=Joao+Santos&background=10B981&color=fff",
    totalReservations: 12,
    totalSpent: 2100,
    lastVisit: "2024-02-15",
  },
  {
    id: "003",
    name: "Ana Costa",
    email: "ana.costa@email.com",
    phone: "(11) 77777-7777",
    document: "111.222.333-44",
    reservations: 8,
    status: "inactive",
    avatar:
      "https://ui-avatars.com/api/?name=Ana+Costa&background=F59E0B&color=fff",
    totalReservations: 8,
    totalSpent: 1800,
    lastVisit: "2023-11-20",
  },
  {
    id: "004",
    name: "Pedro Lima",
    email: "pedro.lima@email.com",
    phone: "(11) 66666-6666",
    document: "555.666.777-88",
    reservations: 31,
    status: "suspended",
    avatar:
      "https://ui-avatars.com/api/?name=Pedro+Lima&background=EF4444&color=fff",
    totalReservations: 31,
    totalSpent: 8900,
    lastVisit: "2024-01-10",
  },
  {
    id: "005",
    name: "Carla Oliveira",
    email: "carla.oliveira@email.com",
    phone: "(11) 55555-5555",
    document: "999.888.777-66",
    reservations: 15,
    status: "active",
    avatar:
      "https://ui-avatars.com/api/?name=Carla+Oliveira&background=8B5CF6&color=fff",
    totalReservations: 15,
    totalSpent: 3200,
    lastVisit: "2024-02-28",
  },
];

export function useGuests() {
  const [guests] = useState<Guest[]>(initialGuests);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const [isAddGuestModalOpen, setIsAddGuestModalOpen] = useState(false);
  const [isEditGuestModalOpen, setIsEditGuestModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const stats = useMemo(() => {
    return {
      total: guests.length,
      active: guests.filter((g) => g.status === "active").length,
      inactive: guests.filter((g) => g.status === "inactive").length,
      suspended: guests.filter((g) => g.status === "suspended").length,
    };
  }, [guests]);

  const filteredGuests = useMemo(() => {
    return guests.filter((guest) => {
      const matchesSearch =
        guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guest.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter =
        filterStatus === "all" || guest.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [guests, searchTerm, filterStatus]);

  const handleExport = (format: string) => {
    console.log(`Exporting guests as ${format}`);
  };

  const handleAddGuest = (guestData: GuestFormData) => {
    console.log("Adding guest:", guestData);
    setIsAddGuestModalOpen(false);
  };

  const handleEditGuest = (guestData: GuestFormData) => {
    console.log("Editing guest:", guestData);
    setIsEditGuestModalOpen(false);
    setSelectedGuest(null);
  };

  const handleDeactivateGuest = () => {
    console.log("Deactivating guest:", selectedGuest);
    setIsDeactivateModalOpen(false);
    setSelectedGuest(null);
  };

  const openEditModal = (guest: Guest) => {
    setSelectedGuest(guest);
    setIsEditGuestModalOpen(true);
  };

  const openDetailsModal = (guest: Guest) => {
    setSelectedGuest(guest);
    setIsDetailsModalOpen(true);
  };

  const openDeactivateModal = (guest: Guest) => {
    setSelectedGuest(guest);
    setIsDeactivateModalOpen(true);
  };

  return {
    guests,
    filteredGuests,
    stats,
    filters: {
      searchTerm,
      setSearchTerm,
      filterStatus,
      setFilterStatus,
    },
    modals: {
      isAddGuestModalOpen,
      setIsAddGuestModalOpen,
      isEditGuestModalOpen,
      setIsEditGuestModalOpen,
      isDetailsModalOpen,
      setIsDetailsModalOpen,
      isDeactivateModalOpen,
      setIsDeactivateModalOpen,
      selectedGuest,
      setSelectedGuest,
    },
    actions: {
      handleExport,
      handleAddGuest,
      handleEditGuest,
      handleDeactivateGuest,
      openEditModal,
      openDetailsModal,
      openDeactivateModal,
    },
  };
}
