import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import {
  CalendarToday,
  Person,
  Hotel,
  CreditCard,
  Info,
} from "@mui/icons-material";

interface Reservation {
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

interface ReservationDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  reservation: Reservation | null;
  onCancelReservation?: () => void;
}

export const ReservationDetailsModal = ({
  isOpen,
  onClose,
  reservation,
  onCancelReservation,
}: ReservationDetailsModalProps) => {
  if (!reservation) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Reserva #${reservation.id}`}
      size="default"
      footer={
        <>
          <Button
            label="Fechar"
            onClick={onClose}
            variant="secondary"
            size="small"
            className="w-auto"
          />
          {reservation.status !== "cancelled" && onCancelReservation && (
            <Button
              label="Cancelar Reserva"
              onClick={onCancelReservation}
              variant="danger"
              size="small"
              className="w-auto"
            />
          )}
        </>
      }
    >
      <div className="space-y-6">
        {/* Status Banner */}
        <div
          className={`p-3 rounded-lg flex items-center ${
            reservation.status === "confirmed"
              ? "bg-green-100 text-green-800"
              : reservation.status === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          <Info className="mr-2" fontSize="small" />
          <span className="font-medium capitalize">
            Status:{" "}
            {reservation.status === "confirmed"
              ? "Confirmada"
              : reservation.status === "pending"
                ? "Pendente"
                : "Cancelada"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3 flex items-center">
              <Person fontSize="small" className="mr-2" />
              Hóspede
            </h4>
            <div className="flex items-center mb-3">
              <img
                src={reservation.guest.avatar}
                alt={reservation.guest.name}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">
                  {reservation.guest.name}
                </p>
                <p className="text-sm text-gray-500">
                  {reservation.guest.email}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3 flex items-center">
              <Hotel fontSize="small" className="mr-2" />
              Acomodação
            </h4>
            <p className="font-medium text-gray-900">{reservation.room}</p>
            <p className="text-sm text-gray-500">
              {reservation.guests} hóspede(s)
            </p>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3 flex items-center">
            <CalendarToday fontSize="small" className="mr-2" />
            Período
          </h4>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Check-in</p>
              <p className="font-medium text-gray-900">
                {new Date(reservation.checkIn).toLocaleDateString("pt-BR")}
              </p>
            </div>
            <div className="h-px w-10 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Check-out</p>
              <p className="font-medium text-gray-900">
                {new Date(reservation.checkOut).toLocaleDateString("pt-BR")}
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-700">
            <CreditCard className="mr-2" />
            <span>Total da Reserva</span>
          </div>
          <span className="text-xl font-bold text-gray-900">
            R${" "}
            {reservation.total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
    </Modal>
  );
};
