import { useNavigate } from "react-router-dom";
import { Button } from "@shared";
import { WarningAmberRounded } from "@mui/icons-material";
import { RoomNotFoundstyles as Styles } from "./RoomNotFound.style";
import { useTranslation } from "react-i18next";

function RoomNotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <WarningAmberRounded
          sx={Styles.icon.sx}
          className={Styles.icon.className}
        />
        <h1 className={Styles.title}>{t("roomNotFound.title")}</h1>
        <p className={Styles.message}>{t("roomNotFound.message")}</p>
        <Button
          onClick={() => navigate("/accommodation")}
          label={t("roomNotFound.button")}
        />
      </div>
    </div>
  );
}

export default RoomNotFound;
