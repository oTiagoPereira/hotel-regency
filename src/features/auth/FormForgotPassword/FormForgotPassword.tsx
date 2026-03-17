import { CarouselRegister } from "@features/auth";
import { Button } from "@shared";
import { FormForgotPasswordStyles as styles } from "./FormForgotPassword.style"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HotelFront from "@/assets/images/img-hotel-front.webp";
import HotelSnack from "@/assets/images/img-snack.webp";
import HotelParty from "@/assets/images/img-party.webp";

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

function FormForgotPassword() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    async function VerifyEmail(e: React.FormEvent) {
      e.preventDefault()

      const sucesso = true

      if (sucesso == true) {
        return navigate("/verify-email", {
          state: {email, type: "reset"},
          replace: true
        })
      }
    }

    return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Esqueceu a senha?</h1>
          <p className={styles.paragraph}>
            Insira seu e-mail para recuperar sua senha.
          </p>
        </div>

        <form onSubmit={VerifyEmail} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Digite seu e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@regency.com"
              required
              className={styles.input}
            />
          </div>
          <Button
            label="Enviar"
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

export default FormForgotPassword
