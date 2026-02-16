import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import { Warning } from "@mui/icons-material";

interface CancelReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  reservationId: number;
}

export const CancelReservationModal = ({
  isOpen,
  onClose,
  onConfirm,
  reservationId,
}: CancelReservationModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Cancelar Reserva"
      size="small"
      footer={
        <>
          <Button
            label="Voltar"
            onClick={onClose}
            variant="secondary"
            size="small"
            className="w-auto"
          />
          <Button
            label="Confirmar Cancelamento"
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
        <h4 className="text-lg font-medium text-gray-900 mb-2">
          Cancelar reserva #{reservationId}?
        </h4>
        <p className="text-gray-500">
          Esta ação não pode ser desfeita. O hóspede será notificado sobre o
          cancelamento.
        </p>
      </div>
    </Modal>
  );
};
