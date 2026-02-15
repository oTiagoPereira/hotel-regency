import { useState } from "react";
import { Search, FileDownload, Visibility, Edit } from "@mui/icons-material";
import { GuestsStyles as styles } from "./Guests.style";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

const guests = [
  {
    id: "001",
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 99999-9999",
    reservations: 24,
    status: "active",
    avatar:
      "https://ui-avatars.com/api/?name=Maria+Silva&background=0D8ABC&color=fff",
  },
  {
    id: "002",
    name: "João Santos",
    email: "joao.santos@email.com",
    phone: "(11) 88888-8888",
    reservations: 12,
    status: "active",
    avatar:
      "https://ui-avatars.com/api/?name=Joao+Santos&background=10B981&color=fff",
  },
  {
    id: "003",
    name: "Ana Costa",
    email: "ana.costa@email.com",
    phone: "(11) 77777-7777",
    reservations: 8,
    status: "inactive",
    avatar:
      "https://ui-avatars.com/api/?name=Ana+Costa&background=F59E0B&color=fff",
  },
  {
    id: "004",
    name: "Pedro Lima",
    email: "pedro.lima@email.com",
    phone: "(11) 66666-6666",
    reservations: 31,
    status: "suspended",
    avatar:
      "https://ui-avatars.com/api/?name=Pedro+Lima&background=EF4444&color=fff",
  },
  {
    id: "005",
    name: "Carla Oliveira",
    email: "carla.oliveira@email.com",
    phone: "(11) 55555-5555",
    reservations: 15,
    status: "active",
    avatar:
      "https://ui-avatars.com/api/?name=Carla+Oliveira&background=8B5CF6&color=fff",
  },
];

export default function Guests() {
  const [filterStatus, setFilterStatus] = useState("all");

  const handleExport = (format: string) => {
    console.log(`Exportando guests como ${format}`);
  };
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "active":
        return styles.statusActive;
      case "inactive":
        return styles.statusInactive;
      case "suspended":
        return styles.statusSuspended;
      default:
        return styles.statusInactive;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Ativo";
      case "inactive":
        return "Inativo";
      case "suspended":
        return "Suspenso";
      default:
        return status;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="relative w-full md:w-96">
          <Input
            placeholder="Buscar por nome, email ou telefone..."
            icon={<Search fontSize="small" />}
            containerClassName="w-full"
          />
        </div>

        <div className={styles.headerActions}>
          <Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            containerClassName="w-full md:min-w-[fit-content]"
          >
            <option value="all">Todos os Status</option>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
            <option value="suspended">Suspenso</option>
          </Select>

          <Select
            value=""
            onChange={(e) => handleExport(e.target.value)}
            containerClassName="w-full md:min-w-[fit-content]"
            icon={<FileDownload fontSize="small" />}
            iconClassName="text-primary"
            arrowClassName="text-primary"
            placeholder="Exportar"
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
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Cliente</th>
              <th className={styles.th}>Contato</th>
              <th className={styles.th}>Reservas</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id} className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.clientCell}>
                    <img
                      src={guest.avatar}
                      alt={guest.name}
                      className={styles.avatar}
                    />
                    <div className={styles.clientInfo}>
                      <span className={styles.clientName}>{guest.name}</span>
                      <span className={styles.clientId}>ID: #{guest.id}</span>
                    </div>
                  </div>
                </td>

                <td className={styles.td}>
                  <div className={styles.contactCell}>
                    <span className={styles.email}>{guest.email}</span>
                    <span className={styles.phone}>{guest.phone}</span>
                  </div>
                </td>

                <td className={styles.td}>
                  <div className={styles.reservationsCell}>
                    <span className={styles.resCount}>
                      {guest.reservations}
                    </span>
                    <span className={styles.resLabel}>reservas</span>
                  </div>
                </td>

                <td className={styles.td}>
                  <span
                    className={`${styles.statusBadge} ${getStatusStyle(guest.status)}`}
                  >
                    {getStatusLabel(guest.status)}
                  </span>
                </td>

                <td className={styles.td}>
                  <div className={styles.actionsCell}>
                    <button
                      className={styles.actionButton}
                      title="Ver Detalhes"
                    >
                      <Visibility fontSize="small" />
                    </button>
                    <button className={styles.actionButton} title="Editar">
                      <Edit fontSize="small" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.paginationContainer}>
          <div className={styles.paginationInfo}>
            Mostrando 1 a 5 de 47 resultados
          </div>
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
    </div>
  );
}
