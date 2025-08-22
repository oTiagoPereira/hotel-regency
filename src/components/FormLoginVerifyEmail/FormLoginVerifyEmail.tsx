import { useNavigate } from "react-router-dom";
import Button from "../Button";
import CarouselRegister from "../CarouselRegister";
import { FormLoginVerifyEmailStyles as styles } from "./FormLoginVerifyEmail.style"
import HotelFront from "../../assets/images/img-hotel-front.webp";
import HotelSnack from "../../assets/images/img-snack.webp";
import HotelParty from "../../assets/images/img-party.webp";

const slides = [
  {
    src: HotelFront,
    text: "Descubra o conforto e a elegância do nosso hotel.",
  },
  {
    src: HotelSnack,
    text: "Sabores que combinam com o pôr do sol.",
  },
  {
    src: HotelParty,
    text: "Salão de festas elegante e espaçoso, com decoração sofisticada e iluminação acolhedora.",
  },
];

type FormLoginVerifyEmailProps = {
  typeEmail: "login" | "reset";
};

function FormLoginVerifyEmail({ typeEmail }: FormLoginVerifyEmailProps) {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const code = (e.target as HTMLFormElement).code.value;

    if (code.length !== 6) {
      alert("Código inválido");
      return;
    }

    if (typeEmail === "login") {
      alert("Validando para login...");
      
    } else if (typeEmail === "reset") {
      alert("Validando para reset de senha...");
      navigate("/reset-password");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Verifique seu e-mail</h1>
          <p className={styles.paragraph}>
            Enviamos um código de confirmação para seu e-mail. Acesse sua caixa de entrada e insira o código abaixo.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="code"
              name="code"
              placeholder="Insira aqui"
              required
              className={styles.input}
            />
          </div>
          <Button
            label="Verificar"
            variant="primary"
            size="width_full"
            type="submit"
          />
        </form>
      </div>

      <div className={styles.carouselWrapper}>
        <CarouselRegister slides={slides}/>
      </div>
    </section>
  );
}

export default FormLoginVerifyEmail;
