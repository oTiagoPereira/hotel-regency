import { useState, useMemo } from "react";
import { type RoomData } from "../Rooms/Modals/AddRoomModal";

// Por enquanto, extraímos dados simulados diretamente para o gancho.
const initialRooms = [
  {
    id: 101,
    type: "Suite Deluxe",
    capacity: 2,
    price: 450,
    status: "available",
    amenities: ["wifi", "tv", "ac", "king_bed"],
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 102,
    type: "Standard",
    capacity: 2,
    price: 300,
    status: "occupied",
    amenities: ["wifi", "tv", "ac"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 103,
    type: "Family Suite",
    capacity: 4,
    price: 600,
    status: "available",
    amenities: ["wifi", "tv", "ac", "king_bed", "kitchen"],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 104,
    type: "Standard View",
    capacity: 2,
    price: 350,
    status: "maintenance",
    amenities: ["wifi", "tv", "ac"],
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 201,
    type: "Executive Suite",
    capacity: 2,
    price: 550,
    status: "available",
    amenities: ["wifi", "tv", "ac", "king_bed", "work_desk"],
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 202,
    type: "Standard",
    capacity: 2,
    price: 300,
    status: "available",
    amenities: ["wifi", "tv", "ac"],
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop",
  },
];

export function useRooms() {
  const [rooms] = useState(initialRooms);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);
  const [isEditRoomModalOpen, setIsEditRoomModalOpen] = useState(false);
  const [isDeleteRoomModalOpen, setIsDeleteRoomModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);

  const stats = useMemo(() => {
    return {
      total: rooms.length,
      available: rooms.filter((r) => r.status === "available").length,
      occupied: rooms.filter((r) => r.status === "occupied").length,
      maintenance: rooms.filter((r) => r.status === "maintenance").length,
    };
  }, [rooms]);

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchesSearch =
        room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.id.toString().includes(searchTerm);
      const matchesFilter =
        filterStatus === "all" || room.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [rooms, searchTerm, filterStatus]);

  const handleAddRoom = (roomData: RoomData) => {
    console.log("Adding room:", roomData);
    // TODO: Connect to API
    setIsAddRoomModalOpen(false);
  };

  const handleEditRoom = (roomData: RoomData) => {
    console.log("Editing room:", roomData);
    // TODO: Connect to API
    setIsEditRoomModalOpen(false);
    setSelectedRoom(null);
  };

  const handleDeleteRoom = () => {
    console.log("Deleting room:", selectedRoom);
    // TODO: Connect to API
    setIsDeleteRoomModalOpen(false);
    setSelectedRoom(null);
  };

  const openEditModal = (room: typeof rooms[0]) => {
    const defaultData: RoomData = {
      id: room.id,
      number: room.id.toString(),
      type: room.type,
      price: room.price.toString(),
      capacity: room.capacity.toString(),
      amenities: room.amenities,
    };
    setSelectedRoom(defaultData);
    setIsEditRoomModalOpen(true);
  };

  const openDeleteModal = (room: typeof rooms[0]) => {
    const defaultData: RoomData = {
      id: room.id,
      number: room.id.toString(),
      type: room.type,
      price: room.price.toString(),
      capacity: room.capacity.toString(),
      amenities: room.amenities,
    };
    setSelectedRoom(defaultData);
    setIsDeleteRoomModalOpen(true);
  };

  return {
    rooms,
    filteredRooms,
    stats,
    filters: {
      searchTerm,
      setSearchTerm,
      filterStatus,
      setFilterStatus,
    },
    modals: {
      isAddRoomModalOpen,
      setIsAddRoomModalOpen,
      isEditRoomModalOpen,
      setIsEditRoomModalOpen,
      isDeleteRoomModalOpen,
      setIsDeleteRoomModalOpen,
      selectedRoom,
      setSelectedRoom,
    },
    actions: {
      handleAddRoom,
      handleEditRoom,
      handleDeleteRoom,
      openEditModal,
      openDeleteModal,
    },
  };
}
