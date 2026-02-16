import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import { Warning } from "@mui/icons-material";

interface DeactivateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
}

export const DeactivateUserModal = ({
  isOpen,
  onClose,
  onConfirm,
  userName,
}: DeactivateUserModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Desativar Usuário"
      size="small"
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
            label="Desativar"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            variant="danger"
            size="small"
            className="w-auto"
          />
        </>
      }
    >
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-red-100 p-3 rounded-full mb-4">
          <Warning className="text-red-600" fontSize="large" />
        </div>
        <h4 className="text-lg font-medium text-gray-900 mb-2">Tem certeza?</h4>
        <p className="text-gray-500">
          Você está prestes a desativar o acesso do usuário{" "}
          <span className="font-semibold text-gray-700">{userName}</span>. Ele
          não poderá mais acessar o sistema até ser reativado.
        </p>
      </div>
    </Modal>
  );
};
