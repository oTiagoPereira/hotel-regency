import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "@shared";
import { Input } from "@shared";
import { Select } from "@shared";
import { Button } from "@shared";
import { Person, Email, VpnKey, Badge, Phone } from "@mui/icons-material";

interface UserData {
  id?: number;
  name: string;
  email: string;
  phone: string;
  document: string;
  role: string;
  accessLevel: string;
  password?: string;
}

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: UserData) => void;
  initialData?: UserData | null;
}

export const AddUserModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}: AddUserModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    document: "",
    role: "reception",
    accessLevel: "Viewer",
    password: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        password: "",
        phone: initialData.phone || "",
        document: initialData.document || "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        document: "",
        role: "reception",
        accessLevel: "Viewer",
        password: "",
      });
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (field: keyof UserData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        initialData
          ? t("dashboard.users.modals.edit")
          : t("dashboard.users.modals.add")
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
        <Input
          label={t("dashboard.users.modals.fields.name")}
          placeholder={t("dashboard.users.modals.placeholders.name")}
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          icon={<Person />}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={t("dashboard.users.modals.fields.email")}
            type="email"
            placeholder={t("dashboard.users.modals.placeholders.email")}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            icon={<Email />}
            required
          />

          <Input
            label={t("dashboard.users.modals.fields.phone")}
            placeholder={t("dashboard.users.modals.placeholders.phone")}
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            icon={<Phone />}
            required
          />
        </div>

        <Input
          label={t("dashboard.users.modals.fields.document")}
          placeholder={t("dashboard.users.modals.placeholders.document")}
          value={formData.document}
          onChange={(e) => handleChange("document", e.target.value)}
          icon={<Person />}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label={t("dashboard.users.modals.fields.role")}
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
            icon={<Badge fontSize="small" />}
          >
            <option value="manager">
              {t("dashboard.users.filters.roles.manager")}
            </option>
            <option value="reception">
              {t("dashboard.users.filters.roles.reception")}
            </option>
            <option value="sales">
              {t("dashboard.users.filters.roles.sales")}
            </option>
            <option value="support">
              {t("dashboard.users.filters.roles.support")}
            </option>
          </Select>

          <Select
            label={t("dashboard.users.modals.fields.accessLevel")}
            value={formData.accessLevel}
            onChange={(e) => handleChange("accessLevel", e.target.value)}
            icon={<VpnKey fontSize="small" />}
          >
            <option value="Administrator">Administrador</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Visualizador</option>
          </Select>
        </div>

        {/* Password field - required only for new users */}
        {!initialData && (
          <Input
            label={t("dashboard.users.modals.fields.password")}
            type="password"
            placeholder="******"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            icon={<VpnKey />}
            required={!initialData}
          />
        )}
      </form>
    </Modal>
  );
};
