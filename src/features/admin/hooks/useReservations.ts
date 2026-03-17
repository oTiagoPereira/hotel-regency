import { useState, useMemo } from "react";

export interface Reservation {
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

export interface NewReservationData {
  guestName: string;
  guestEmail: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

const initialReservations: Reservation[] = [
  {
    id: 1,
    guest: {
      name: "Maria Silva",
      email: "maria@email.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    room: "Suite Premium 201",
    guests: 2,
    checkIn: "2024-12-15",
    checkOut: "2024-12-18",
    status: "confirmed",
    total: 1200,
  },
  {
    id: 2,
    guest: {
      name: "João Santos",
      email: "joao@email.com",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
    },
    room: "Quarto Standard 105",
    guests: 1,
    checkIn: "2024-12-20",
    checkOut: "2024-12-22",
    status: "pending",
    total: 400,
  },
  {
    id: 3,
    guest: {
      name: "Ana Costa",
      email: "ana@email.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    },
    room: "Suite Deluxe 301",
    guests: 3,
    checkIn: "2024-12-25",
    checkOut: "2024-12-30",
    status: "confirmed",
    total: 2500,
  },
  {
    id: 4,
    guest: {
      name: "Carlos Lima",
      email: "carlos@email.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    },
    room: "Quarto Standard 108",
    guests: 2,
    checkIn: "2024-12-10",
    checkOut: "2024-12-12",
    status: "cancelled",
    total: 360,
  },
  {
    id: 5,
    guest: {
      name: "Beatriz Oliveira",
      email: "bia@email.com",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    },
    room: "Suite Presidencial",
    guests: 4,
    checkIn: "2025-01-05",
    checkOut: "2025-01-10",
    status: "pending",
    total: 5000,
  },
];

export function useReservations() {
  const [reservations] = useState<Reservation[]>(initialReservations);
  const [filterStatus, setFilterStatus] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);

  const stats = useMemo(() => {
    return {
      total: reservations.length,
      confirmed: reservations.filter((r) => r.status === "confirmed").length,
      pending: reservations.filter((r) => r.status === "pending").length,
      cancelled: reservations.filter((r) => r.status === "cancelled").length,
    };
  }, [reservations]);

  const filteredReservations = useMemo(() => {
    return reservations.filter((reservation) => {
      const matchesStatus =
        filterStatus === "all" || reservation.status === filterStatus;

      // Atualmente, os filtros de data estão sendo ignorados, pois não estão totalmente implementados no gancho de lógica da interface de usuário simulada.
      // Mas não é necessário implementar os filtros de data

      return matchesStatus;
    });
  }, [reservations, filterStatus]);

  const handleAddReservation = (data: NewReservationData) => {
    console.log("Adding reservation:", data);
    setIsAddModalOpen(false);
  };

  const handleCancelReservation = () => {
    console.log("Cancelling reservation:", selectedReservation);
    setIsCancelModalOpen(false);
    setSelectedReservation(null);
  };

  const openDetailsModal = (reservation: Reservation) => {
    setSelectedReservation(reservation);
    setIsDetailsModalOpen(true);
  };

  const openCancelModal = (reservation: Reservation) => {
    setSelectedReservation(reservation);
    setIsCancelModalOpen(true);
  };

  return {
    reservations,
    filteredReservations,
    stats,
    filters: {
      filterStatus,
      setFilterStatus,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
    },
    modals: {
      isAddModalOpen,
      setIsAddModalOpen,
      isDetailsModalOpen,
      setIsDetailsModalOpen,
      isCancelModalOpen,
      setIsCancelModalOpen,
      selectedReservation,
      setSelectedReservation,
    },
    actions: {
      handleAddReservation,
      handleCancelReservation,
      openDetailsModal,
      openCancelModal,
    },
  };
}
