import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "../../Modal/Modal";
import { Input } from "../../Input/Input";
import { Select } from "../../Select/Select";
import { Button } from "../../Button/Button";
import { Bed, Email, Group, Person } from "@mui/icons-material";

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
  const { t } = useTranslation();
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
      title={t("dashboard.reservations.modals.add")}
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
            label={t("dashboard.reservations.actions.save")}
            onClick={() => handleSubmit({} as React.FormEvent)}
            variant="primary"
            size="small"
            className="w-auto"
          />
        </>
      }
    >
      <form onSubmit={handleSubmit} className="px-2 py-2 space-y-8">
        {/* Guest Info Section */}
        <div>
          <h4 className="text-sm font-semibold text-text-color mb-4 pb-2 border-b border-border-light">
            {t("dashboard.reservations.modals.sections.guestInfo")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label={t("dashboard.reservations.modals.fields.guest")}
              placeholder={t("dashboard.guests.modals.placeholders.name")}
              icon={<Person fontSize="small"/>}
              value={formData.guestName}
              onChange={(e) => handleChange("guestName", e.target.value)}
              required
            />
            <Input
              label={t("dashboard.reservations.modals.fields.email")}
              type="email"
              placeholder={t("dashboard.guests.modals.placeholders.email")}
              icon={<Email fontSize="small"/>}
              value={formData.guestEmail}
              onChange={(e) => handleChange("guestEmail", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Stay Details Section */}
        <div>
          <h4 className="text-sm font-semibold text-text-color mb-4 pb-2 border-b border-border-light">
            {t("dashboard.reservations.modals.sections.stayInfo")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label={t("dashboard.reservations.modals.fields.roomType")}
              icon={<Bed fontSize="small"/>}
              value={formData.roomType}
              onChange={(e) => handleChange("roomType", e.target.value)}
            >
              <option value="standard">
                {t("dashboard.rooms.modals.types.standard")}
              </option>
              <option value="deluxe">
                {t("dashboard.rooms.modals.types.deluxe")}
              </option>
              <option value="suite">
                {t("dashboard.rooms.modals.types.family")}
              </option>
            </Select>

            <Input
              label={t("dashboard.reservations.modals.fields.guests")}
              type="number"
              min="1"
              max="5"
              value={formData.guests}
              onChange={(e) => handleChange("guests", parseInt(e.target.value))}
              required
              icon={<Group fontSize="small"/>}
            />

            <Input
              label={t("dashboard.reservations.modals.fields.checkIn")}
              type="date"
              value={formData.checkIn}
              onChange={(e) => handleChange("checkIn", e.target.value)}
              required
            />

            <Input
              label={t("dashboard.reservations.modals.fields.checkOut")}
              type="date"
              value={formData.checkOut}
              onChange={(e) => handleChange("checkOut", e.target.value)}
              required
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};
