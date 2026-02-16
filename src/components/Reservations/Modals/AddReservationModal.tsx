import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { Input } from "../../Input/Input";
import { Select } from "../../Select/Select";
import { Button } from "../../Button/Button";
import { Person, CalendarToday, Hotel, Group } from "@mui/icons-material";

interface ReservationData {
  guestName: string;
  guestEmail: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface AddReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ReservationData) => void;
}

export const AddReservationModal = ({
  isOpen,
  onClose,
  onSave,
}: AddReservationModalProps) => {
  const [formData, setFormData] = useState<ReservationData>({
    guestName: "",
    guestEmail: "",
    roomType: "standard",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (
    field: keyof ReservationData,
    value: string | number,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Nova Reserva"
      size="default"
      footer={
        <>
          <Button
            label="Cancelar"
            onClick={onClose}
            variant="secondary"
            size="small"
            className="w-auto"
          />
          <Button
            label="Confirmar Reserva"
            onClick={() => handleSubmit({} as React.FormEvent)}
            variant="primary"
            size="small"
            className="w-auto"
          />
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="text-sm font-semibold text-blue-800 mb-3 flex items-center">
            <Person fontSize="small" className="mr-2" />
            Dados do Hóspede
          </h4>
          <div className="space-y-3">
            <Input
              label="Nome Completo"
              placeholder="Nome do hóspede"
              value={formData.guestName}
              onChange={(e) => handleChange("guestName", e.target.value)}
              required
              className="bg-white"
            />
            <Input
              label="Email"
              type="email"
              placeholder="email@exemplo.com"
              value={formData.guestEmail}
              onChange={(e) => handleChange("guestEmail", e.target.value)}
              required
              className="bg-white"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
            <Hotel fontSize="small" className="mr-2" />
            Detalhes da Estadia
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Tipo de Quarto"
              value={formData.roomType}
              onChange={(e) => handleChange("roomType", e.target.value)}
              containerClassName="col-span-1 md:col-span-2"
            >
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite Premium</option>
            </Select>

            <Input
              label="Check-in"
              type="date"
              value={formData.checkIn}
              onChange={(e) => handleChange("checkIn", e.target.value)}
              required
              icon={<CalendarToday />}
              className="bg-white"
            />

            <Input
              label="Check-out"
              type="date"
              value={formData.checkOut}
              onChange={(e) => handleChange("checkOut", e.target.value)}
              required
              icon={<CalendarToday />}
              className="bg-white"
            />

            <Input
              label="Hóspedes"
              type="number"
              min="1"
              max="5"
              value={formData.guests}
              onChange={(e) => handleChange("guests", parseInt(e.target.value))}
              required
              icon={<Group />}
              containerClassName="col-span-1 md:col-span-2"
              className="bg-white"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};
