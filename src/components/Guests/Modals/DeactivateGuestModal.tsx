import { useTranslation } from "react-i18next";
import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import { Warning } from "@mui/icons-material";

interface DeactivateGuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  guestName: string;
}

export const DeactivateGuestModal = ({
  isOpen,
  onClose,
  onConfirm,
  guestName,
}: DeactivateGuestModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t("dashboard.guests.modals.deactivate")}
      size="small"
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
            label={t("dashboard.actions.deactivate")}
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
        <div className="bg-error-light text-error p-4 rounded-full mb-6 ring-8 ring-red-50/50">
          <Warning fontSize="large" />
        </div>
        <p className="text-text-muted text-sm md:text-base px-2">
          {t("dashboard.guests.modals.deactivateMessage")}{" "}
          <span className="font-semibold text-text-color/90">{guestName}</span>.
          <br />
          {t("dashboard.guests.modals.deactivateWarning")}
        </p>
      </div>
    </Modal>
  );
};
