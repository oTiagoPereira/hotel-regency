import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { WarningAmberRounded } from "@mui/icons-material";
import { RoomNotFoundstyles as Styles } from "./RoomNotFound";

function RoomNotFound() {
  const navigate = useNavigate();
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <WarningAmberRounded
          sx={Styles.icon.sx}
          className={Styles.icon.className}
        />
        <h1 className={Styles.title}>Quarto não encontrado</h1>
        <p className={Styles.message}>
          Oops! Parece que o quarto que você está procurando não existe ou foi
          removido. Que tal procurar por outras opções?
        </p>
        <Button
          onClick={() => navigate("/accommodation")}
          label="Voltar para a lista de quartos"
        />
      </div>
    </div>
  );
}

export default RoomNotFound;
