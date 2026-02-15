import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
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

export default function Reservations() {
  const { t } = useTranslation();
  const [filterStatus, setFilterStatus] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const reservations = [
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

  const stats = {
    total: reservations.length,
    confirmed: reservations.filter((r) => r.status === "confirmed").length,
    pending: reservations.filter((r) => r.status === "pending").length,
    cancelled: reservations.filter((r) => r.status === "cancelled").length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "confirmed":
        return t("reservations.status.confirmed", "Confirmada");
      case "pending":
        return t("reservations.status.pending", "Pendente");
      case "cancelled":
        return t("reservations.status.cancelled", "Cancelada");
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

  return (
    <div className={styles.container}>
      <div className={styles.controlsContainer}>
        <div className={styles.leftControls}>
          <div className={styles.filterGroup}>
            <Select
              className="py-2.5"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              containerClassName="w-auto min-w-[200px]"
            >
              <option value="all">Todos os status</option>
              <option value="confirmed">Confirmada</option>
              <option value="pending">Pendente</option>
              <option value="cancelled">Cancelada</option>
            </Select>
          </div>
          <div className={styles.filterGroup}>
            <div className={styles.filterGroup}>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Data Início"
                containerClassName="w-auto"
              />
            </div>
          </div>
          <div className={styles.filterGroup}>
            <div className={styles.filterGroup}>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="Data Fim"
                containerClassName="w-auto"
              />
            </div>
          </div>
          <Button
            label="Filtrar"
            Icon={FilterList}
            variant="secondary"
            size="small"
            className="w-auto h-10 mt-0"
          />
        </div>

        <Button
          label={t("reservations.button.new", "Nova Reserva")}
          onClick={() => {}}
          Icon={Add}
          variant="primary"
          size="default"
        />
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>Total Reservas</span>
            <span className={styles.statsValue}>{stats.total}</span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-blue-100 text-blue-600`}
          >
            <EventIcon />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>Confirmadas</span>
            <span className={`${styles.statsValue} text-green-600`}>
              {stats.confirmed}
            </span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-green-100 text-green-600`}
          >
            <CheckCircle />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>Pendentes</span>
            <span className={`${styles.statsValue} text-yellow-600`}>
              {stats.pending}
            </span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-yellow-100 text-yellow-600`}
          >
            <Schedule />
          </div>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.statsInfo}>
            <span className={styles.statsLabel}>Canceladas</span>
            <span className={`${styles.statsValue} text-red-600`}>
              {stats.cancelled}
            </span>
          </div>
          <div
            className={`${styles.statsIconContainer} bg-red-100 text-red-600`}
          >
            <Cancel />
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <h3 className={styles.tableTitle}>Lista de Reservas</h3>
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Cliente</th>
              <th className={styles.th}>Quarto</th>
              <th className={styles.th}>Check-in</th>
              <th className={styles.th}>Check-out</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Total</th>
              <th className={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className={styles.tr}>
                <td className={styles.td}>
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
                </td>
                <td className={styles.td}>
                  <div className={styles.roomCell}>
                    <span className={styles.roomName}>{reservation.room}</span>
                    <span className={styles.roomGuests}>
                      {reservation.guests}{" "}
                      {reservation.guests === 1 ? "hóspede" : "hóspedes"}
                    </span>
                  </div>
                </td>
                <td className={styles.td}>{formatDate(reservation.checkIn)}</td>
                <td className={styles.td}>
                  {formatDate(reservation.checkOut)}
                </td>
                <td className={styles.td}>
                  <span
                    className={`${styles.statusBadge} ${getStatusColor(reservation.status)}`}
                  >
                    {getStatusLabel(reservation.status)}
                  </span>
                </td>
                <td className={styles.td}>
                  <span className={styles.priceText}>
                    R${" "}
                    {reservation.total.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </td>
                <td className={styles.td}>
                  <div className={styles.actionsContainer}>
                    <button
                      className={`${styles.actionButton} text-blue-500 hover:bg-blue-50`}
                      title="Ver Detalhes"
                    >
                      <Visibility fontSize="small" />
                    </button>
                    {reservation.status === "pending" && (
                      <button
                        className={`${styles.actionButton} text-green-500 hover:bg-green-50`}
                        title="Aprovar"
                      >
                        <Check fontSize="small" />
                      </button>
                    )}
                    <button
                      className={`${styles.actionButton} text-red-500 hover:bg-red-50`}
                      title="Cancelar/Deletar"
                    >
                      {reservation.status === "cancelled" ? (
                        <Close fontSize="small" />
                      ) : (
                        <Cancel fontSize="small" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.paginationContainer}>
          <span className={styles.paginationInfo}>
            Mostrando 1 a {reservations.length} de {247} resultados
          </span>
          <div className={styles.paginationControls}>
            <button className={styles.paginationButton} disabled>
              Anterior
            </button>
            <button className={styles.paginationButton}>1</button>
            <button className={styles.paginationButton}>2</button>
            <button className={styles.paginationButton}>3</button>
            <button className={styles.paginationButton}>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
