import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PageHeader, Table, Badge } from "@shared";
import type { Column } from "@shared/Table/Table";
import { Cancel, Visibility } from "@mui/icons-material";

// Tipo e dados mockados
interface ClientReservation {
  id: string;
  hotel: string;
  dateRange: string;
  amount: number;
  status: "Confirmed" | "Pending" | "Cancelled" | "Completed";
}

const mockReservations: ClientReservation[] = [
  { id: "RES-98213", hotel: "Regency Premium Hotel", dateRange: "15 Out - 20 Out 2026", amount: 2500, status: "Confirmed" },
  { id: "RES-11234", hotel: "Regency Premium Hotel", dateRange: "01 Jan - 05 Jan 2026", amount: 3200, status: "Completed" },
  { id: "RES-55312", hotel: "Regency Boutique", dateRange: "10 Nov - 12 Nov 2025", amount: 800, status: "Cancelled" },
];

export default function ClientReservations() {
  const { t } = useTranslation();
  const [reservations, setReservations] = useState(mockReservations);

  const handleCancelClick = (id: string) => {
    // Simular Cancelamento Básico
    if (confirm(t("client.reservations.confirmCancel"))) {
      setReservations(prev => prev.map(res => res.id === id ? { ...res, status: "Cancelled" } : res));
    }
  };

  const getStatusBadge = (status: string) => {
    const translatedStatus = t(`client.reservations.status.${status}`);
    switch (status) {
      case "Confirmed": return <Badge variant="success">{translatedStatus}</Badge>;
      case "Pending": return <Badge variant="warning">{translatedStatus}</Badge>;
      case "Cancelled": return <Badge variant="danger">{translatedStatus}</Badge>;
      case "Completed": return <Badge variant="info">{translatedStatus}</Badge>;
      default: return <Badge variant="default">{translatedStatus}</Badge>;
    }
  };

  const columns: Column<ClientReservation>[] = [
    { key: "id", header: t("client.reservations.table.id") },
    { key: "hotel", header: t("client.reservations.table.hotel") },
    { key: "dateRange", header: t("client.reservations.table.date") },
    {
      key: "amount",
      header: t("client.reservations.table.amount"),
      render: (item) => `$ ${item.amount.toLocaleString()}`
    },
    {
      key: "status",
      header: t("client.reservations.table.status"),
      render: (item) => getStatusBadge(item.status)
    },
    {
      key: "actions",
      header: t("client.reservations.table.actions"),
      render: (item) => (
        <div className="flex gap-2">
          <button 
            className="p-1.5 rounded-lg text-info hover:bg-info-light transition-colors"
            title={t("client.reservations.actions.view")}
            aria-label={t("client.reservations.actions.view")}
          >
            <Visibility fontSize="small" />
          </button>
          
          {item.status !== "Cancelled" && item.status !== "Completed" && (
            <button 
              className="p-1.5 rounded-lg text-error hover:bg-error-light transition-colors"
              title={t("client.reservations.actions.cancel")}
              aria-label={t("client.reservations.actions.cancel")}
              onClick={() => handleCancelClick(item.id)}
            >
              <Cancel fontSize="small" />
            </button>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      <PageHeader
        title={t("client.reservations.title")}
        subtitle={t("client.reservations.subtitle")}
      />

      <div className="bg-white rounded-xl border border-border-light shadow-sm overflow-hidden p-4">
        <Table
          columns={columns}
          data={reservations}
          keyExtractor={(item) => item.id}
        />
      </div>
    </div>
  );
}
