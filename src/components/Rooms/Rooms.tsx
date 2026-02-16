import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import {
  Search,
  Edit,
  Delete,
  MeetingRoom,
  Engineering,
  KingBed,
  Person,
  Add,
} from "@mui/icons-material";
import { RoomsStyles as styles } from "./Rooms.style";
import { AddRoomModal, type RoomData } from "./Modals/AddRoomModal";

export default function Rooms() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);

  const handleAddRoom = (roomData: RoomData) => {
    console.log("Adding room:", roomData);
    // TODO: Connect to API
  };

  const rooms = [
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

  const stats = {
    total: rooms.length,
    available: rooms.filter((r) => r.status === "available").length,
    occupied: rooms.filter((r) => r.status === "occupied").length,
    maintenance: rooms.filter((r) => r.status === "maintenance").length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-700";
      case "occupied":
        return "bg-yellow-100 text-yellow-700";
      case "maintenance":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "available":
        return t("rooms.status.available", "Disponível");
      case "occupied":
        return t("rooms.status.occupied", "Ocupado");
      case "maintenance":
        return t("rooms.status.maintenance", "Manutenção");
      default:
        return status;
    }
  };

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.id.toString().includes(searchTerm);
    const matchesFilter =
      filterStatus === "all" || room.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={styles.container}>
      <div className={styles.statsGrid}>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("rooms.stats.total", "Total de Quartos")}
            </span>
            <span className={styles.statsValue}>{stats.total}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-blue-100 text-blue-600`}
          >
            <KingBed />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("rooms.stats.available", "Disponíveis")}
            </span>
            <span className={styles.statsValue}>{stats.available}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-green-100 text-green-600`}
          >
            <MeetingRoom />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("rooms.stats.occupied", "Ocupados")}
            </span>
            <span className={styles.statsValue}>{stats.occupied}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-yellow-100 text-yellow-600`}
          >
            <Person />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>
              {t("rooms.stats.maintenance", "Manutenção")}
            </span>
            <span className={styles.statsValue}>{stats.maintenance}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-red-100 text-red-600`}
          >
            <Engineering />
          </div>
        </div>
      </div>

      <div className={styles.controlsContainer}>
        <div className={styles.leftControls}>
          <div className="w-full md:w-64">
            <Input
              placeholder={t("rooms.search.placeholder", "Buscar quartos...")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search fontSize="small" />}
              containerClassName="w-full"
            />
          </div>
          <Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            containerClassName="w-full md:w-auto min-w-[200px]"
          >
            <option value="all">
              {t("rooms.filter.all", "Todos os status")}
            </option>
            <option value="available">
              {t("rooms.filter.available", "Disponível")}
            </option>
            <option value="occupied">
              {t("rooms.filter.occupied", "Ocupado")}
            </option>
            <option value="maintenance">
              {t("rooms.filter.maintenance", "Manutenção")}
            </option>
          </Select>
        </div>
        <Button
          label={t("rooms.button.add", "Adicionar Novo Quarto")}
          onClick={() => setIsAddRoomModalOpen(true)}
          variant="minimal"
          size="small"
          Icon={Add}
        />
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>{t("rooms.table.room", "Quarto")}</th>
              <th className={styles.th}>{t("rooms.table.type", "Tipo")}</th>
              <th className={styles.th}>{t("rooms.table.status", "Status")}</th>
              <th className={styles.th}>
                {t("rooms.table.capacity", "Capacidade")}
              </th>
              <th className={styles.th}>
                {t("rooms.table.price", "Valor/Noite")}
              </th>
              <th className={styles.th}>{t("rooms.table.actions", "Ações")}</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {filteredRooms.map((room) => (
              <tr key={room.id} className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.roomInfo}>
                    <div className={styles.roomBadge}>{room.id}</div>
                    <span className={styles.roomName}>
                      {t("rooms.table.room_prefix", "Quarto")} {room.id}
                    </span>
                  </div>
                </td>
                <td className={styles.td}>{room.type}</td>
                <td className={styles.td}>
                  <span
                    className={`${styles.statusBadge} ${getStatusColor(room.status)}`}
                  >
                    {getStatusLabel(room.status)}
                  </span>
                </td>
                <td className={styles.td}>
                  {room.capacity} {t("rooms.table.people", "pessoas")}
                </td>
                <td className={styles.td}>
                  <span className={styles.priceText}>R$ {room.price},00</span>
                </td>
                <td className={styles.td}>
                  <div className={styles.actionsContainer}>
                    <button className={styles.actionButton}>
                      <Edit fontSize="small" />
                    </button>
                    <button
                      className={`${styles.actionButton} hover:text-red-600 hover:bg-red-50`}
                    >
                      <Delete fontSize="small" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.paginationContainer}>
          <span className={styles.paginationInfo}>
            Mostrando 1 a {filteredRooms.length} de {rooms.length} quartos
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

      <AddRoomModal
        isOpen={isAddRoomModalOpen}
        onClose={() => setIsAddRoomModalOpen(false)}
        onSave={handleAddRoom}
      />
    </div>
  );
}
