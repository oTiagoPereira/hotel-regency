import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "@shared";
import { Button } from "@shared";
import { Input } from "@shared";
import { Person, Email, Phone, Badge } from "@mui/icons-material";

export interface GuestFormData {
  name: string;
  email: string;
  phone: string;
  document: string;
  vip: boolean;
}

interface AddGuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (guest: GuestFormData) => void;
  initialData?: GuestFormData | null;
}

export const AddGuestModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}: AddGuestModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<GuestFormData>({
    name: "",
    email: "",
    phone: "",
    document: "",
    vip: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        document: "",
        vip: false,
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (
    field: keyof GuestFormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        initialData
          ? t("dashboard.guests.modals.edit")
          : t("dashboard.guests.modals.add")
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
            onClick={handleSave}
            variant="primary"
            size="small"
            className="w-auto"
          />
        </>
      }
    >
      <div className="space-y-6">
        <Input
          label={t("dashboard.guests.modals.fields.name")}
          placeholder={t("dashboard.guests.modals.placeholders.name")}
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          icon={<Person fontSize="small" />}
        />
        <Input
          label={t("dashboard.guests.modals.fields.email")}
          type="email"
          placeholder={t("dashboard.guests.modals.placeholders.email")}
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          icon={<Email fontSize="small" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={t("dashboard.guests.modals.fields.phone")}
            placeholder={t("dashboard.guests.modals.placeholders.phone")}
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            icon={<Phone fontSize="small" />}
          />
          <Input
            label={t("dashboard.guests.modals.fields.document")}
            placeholder={t("dashboard.guests.modals.placeholders.document")}
            value={formData.document}
            onChange={(e) => handleChange("document", e.target.value)}
            icon={<Badge fontSize="small" />}
          />
        </div>

        <label className="flex items-center gap-3 p-4 border border-border-light rounded-xl cursor-pointer hover:bg-surface transition-colors">
          <input
            type="checkbox"
            checked={formData.vip}
            onChange={(e) => handleChange("vip", e.target.checked)}
            className="w-5 h-5 accent-primary rounded border-border-light/80 text-primary focus:ring-primary"
          />
          <div className="ml-3">
            <p className="font-medium text-text-color">
              {t("dashboard.guests.modals.fields.vip")}
            </p>
            <p className="text-sm text-text-muted">
              {t("dashboard.guests.modals.vipDesc")}
            </p>
          </div>
        </label>
      </div>
    </Modal>
  );
};
