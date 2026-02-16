import { useState, useEffect } from "react";
import { Modal } from "../../Modal/Modal";
import { Input } from "../../Input/Input";
import { Select } from "../../Select/Select";
import { Button } from "../../Button/Button";
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
      title={initialData ? "Editar Usuário" : "Novo Usuário"}
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
            label="Salvar"
            onClick={() => handleSubmit({} as React.FormEvent)}
            variant="primary"
            size="small"
            className="w-auto"
          />
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nome Completo"
          placeholder="Ex: Maria Silva"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          icon={<Person />}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Email"
            type="email"
            placeholder="Ex: maria@hotel.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            icon={<Email />}
            required
          />

          <Input
            label="Telefone"
            placeholder="Ex: (11) 99999-9999"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            icon={<Phone />}
            required
          />
        </div>

        <Input
          label="Credencial"
          placeholder="Ex: 03214456"
          value={formData.document}
          onChange={(e) => handleChange("document", e.target.value)}
          icon={<Person />}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Cargo"
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
            icon={<Badge fontSize="small" />}
          >
            <option value="manager">Gerente</option>
            <option value="reception">Recepção</option>
            <option value="sales">Vendas</option>
            <option value="support">Suporte</option>
          </Select>

          <Select
            label="Nível de Acesso"
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
            label="Senha Inicial"
            type="password"
            placeholder="******"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            icon={<VpnKey />}
            required={!initialData}
            helperText="O usuário poderá alterar a senha no primeiro acesso."
          />
        )}
      </form>
    </Modal>
  );
};
