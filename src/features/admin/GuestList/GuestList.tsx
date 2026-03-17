import { useTranslation } from "react-i18next";

export interface Guest {
  name: string;
  room: string;
  time: string;
  img: string;
}

interface GuestListProps {
  guests: Guest[];
  isLoading?: boolean;
}

export function GuestList({ guests, isLoading }: GuestListProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 bg-surface rounded-lg animate-pulse min-w-0"
          >
            <div className="w-10 h-10 rounded-full bg-border-light shrink-0" />
            <div className="flex-1 space-y-2 min-w-0">
              <div className="h-4 bg-border-light rounded w-3/4"></div>
              <div className="h-3 bg-border-light rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Verifica se a lista está vazia
  if (!guests || guests.length === 0) {
    return (
      <div className="p-4 text-center text-sm text-text-muted bg-surface rounded-lg">
        {t("dashboard.general.noData", "Nenhum dado disponível no momento.")}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {guests.map((guest, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 hover:bg-surface hover:shadow-sm hover:-translate-y-0.5 cursor-default rounded-lg transition-all duration-300 min-w-0"
        >
          <img
            src={guest.img}
            alt={`Foto de ${guest.name}`}
            className="w-10 h-10 rounded-full object-cover shadow-sm shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-sm text-text-color truncate">
              {guest.name}
            </p>
            <p className="text-xs text-text-muted truncate">
              {t("dashboard.menu.rooms")} {guest.room} - {guest.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
