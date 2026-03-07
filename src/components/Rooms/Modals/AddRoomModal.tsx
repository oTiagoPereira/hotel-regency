import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  initialData?: RoomData | null;
}

export const AddRoomModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}: AddRoomModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<RoomData>({
    number: "",
    type: "Standard",
    price: "",
    capacity: "2",
    amenities: [],
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        number: "",
        type: "Standard",
        price: "",
        capacity: "2",
        amenities: [],
      });
    }
  }, [initialData, isOpen]);

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
      title={
        initialData
          ? t("dashboard.rooms.modals.edit")
          : t("dashboard.rooms.modals.add")
      }
      size="default"
      footer={
        <>
          <Button
            label={t("dashboard.actions.cancel")}
            onClick={onClose}
            variant="secondary"
            size="small"
            className="w-auto"
          />
          <Button
            label={t("dashboard.actions.save")}
            onClick={() => handleSubmit({} as React.FormEvent)}
            variant="primary"
            size="small"
            className="w-auto"
          />
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={t("dashboard.rooms.modals.fields.number")}
            placeholder={t("dashboard.rooms.modals.placeholders.number")}
            value={formData.number}
            onChange={(e) => handleChange("number", e.target.value)}
            icon={<MeetingRoom />}
            required
          />

          <Select
            label={t("dashboard.rooms.modals.fields.type")}
            value={formData.type}
            onChange={(e) => handleChange("type", e.target.value)}
            icon={<KingBed fontSize="small" />}
          >
            <option value="Standard">
              {t("dashboard.rooms.modals.types.standard")}
            </option>
            <option value="Suite Deluxe">
              {t("dashboard.rooms.modals.types.deluxe")}
            </option>
            <option value="Family Suite">
              {t("dashboard.rooms.modals.types.family")}
            </option>
            <option value="Executive Suite">
              {t("dashboard.rooms.modals.types.presidential")}
            </option>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={t("dashboard.rooms.modals.fields.price")}
            type="number"
            placeholder={t("dashboard.rooms.modals.placeholders.price")}
            value={formData.price}
            onChange={(e) => handleChange("price", e.target.value)}
            icon={<AttachMoney />}
            required
          />

          <Input
            label={t("dashboard.rooms.modals.fields.capacity")}
            type="number"
            placeholder="2"
            value={formData.capacity}
            onChange={(e) => handleChange("capacity", e.target.value)}
            icon={<Group />}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-text-color/90 block">
            {t("dashboard.rooms.modals.amenities")}
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              {
                id: "wifi",
                label: t("dashboard.rooms.modals.amenitiesList.wifi"),
                icon: <Wifi fontSize="small" />,
              },
              {
                id: "tv",
                label: t("dashboard.rooms.modals.amenitiesList.tv"),
                icon: <Tv fontSize="small" />,
              },
              {
                id: "ac",
                label: t("dashboard.rooms.modals.amenitiesList.ac"),
                icon: <AcUnit fontSize="small" />,
              },
              {
                id: "minibar",
                label: t("dashboard.rooms.modals.amenitiesList.minibar"),
                icon: <MeetingRoom fontSize="small" />,
              },
              {
                id: "safe",
                label: t("dashboard.rooms.modals.amenitiesList.safe"),
                icon: <MeetingRoom fontSize="small" />,
              },
            ].map((amenity) => {
              const isSelected = formData.amenities.includes(amenity.id);
              return (
                <button
                  key={amenity.id}
                  type="button"
                  onClick={() => handleAmenityToggle(amenity.id)}
                  aria-pressed={isSelected}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm transition-all border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 shadow-sm hover:shadow ${
                    isSelected
                      ? "bg-primary text-neutral border-primary"
                      : "bg-neutral text-text-color/80 border-border-light hover:bg-surface hover:border-border-light/80"
                  }`}
                >
                  {amenity.icon}
                  {amenity.label}
                </button>
              );
            })}
          </div>
        </div>
      </form>
    </Modal>
  );
};
