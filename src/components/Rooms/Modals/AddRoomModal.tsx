import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { Input } from "../../Input/Input";
import { Select } from "../../Select/Select";
import { Button } from "../../Button/Button";
import {
  MeetingRoom,
  AttachMoney,
  Group,
  KingBed,
  Wifi,
  Tv,
  AcUnit,
} from "@mui/icons-material";

export interface RoomData {
  id?: number;
  number: string;
  type: string;
  price: string;
  capacity: string;
  amenities: string[];
}

interface AddRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (room: RoomData) => void;
}

export const AddRoomModal = ({
  isOpen,
  onClose,
  onSave,
}: AddRoomModalProps) => {
  const [formData, setFormData] = useState<RoomData>({
    number: "",
    type: "Standard",
    price: "",
    capacity: "2",
    amenities: [],
  });

  const handleChange = (field: keyof RoomData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData((prev) => {
      const amenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
    setFormData({
      number: "",
      type: "Standard",
      price: "",
      capacity: "2",
      amenities: [],
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Adicionar Novo Quarto"
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
            label="Salvar Quarto"
            onClick={() => handleSubmit({} as React.FormEvent)}
            variant="primary"
            size="small"
            className="w-auto"
          />
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Número do Quarto"
            placeholder="Ex: 101"
            value={formData.number}
            onChange={(e) => handleChange("number", e.target.value)}
            icon={<MeetingRoom />}
            required
          />

          <Select
            label="Tipo de Quarto"
            value={formData.type}
            onChange={(e) => handleChange("type", e.target.value)}
            icon={<KingBed fontSize="small" />}
          >
            <option value="Standard">Standard</option>
            <option value="Suite Deluxe">Suite Deluxe</option>
            <option value="Family Suite">Family Suite</option>
            <option value="Executive Suite">Executive Suite</option>
            <option value="Presidential">Presidencial</option>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Preço por Noite (R$)"
            type="number"
            placeholder="Ex: 350.00"
            value={formData.price}
            onChange={(e) => handleChange("price", e.target.value)}
            icon={<AttachMoney />}
            required
          />

          <Input
            label="Capacidade (Pessoas)"
            type="number"
            placeholder="Ex: 2"
            value={formData.capacity}
            onChange={(e) => handleChange("capacity", e.target.value)}
            icon={<Group />}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            Comodidades
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "wifi", label: "Wi-Fi", icon: <Wifi fontSize="small" /> },
              { id: "tv", label: "TV", icon: <Tv fontSize="small" /> },
              {
                id: "ac",
                label: "Ar Condicionado",
                icon: <AcUnit fontSize="small" />,
              },
              {
                id: "minibar",
                label: "Frigobar",
                icon: <MeetingRoom fontSize="small" />,
              },
              {
                id: "safe",
                label: "Cofre",
                icon: <MeetingRoom fontSize="small" />,
              },
            ].map((amenity) => (
              <button
                key={amenity.id}
                type="button"
                onClick={() => handleAmenityToggle(amenity.id)}
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm transition-colors border ${
                  formData.amenities.includes(amenity.id)
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {amenity.icon}
                {amenity.label}
              </button>
            ))}
          </div>
        </div>
      </form>
    </Modal>
  );
};
