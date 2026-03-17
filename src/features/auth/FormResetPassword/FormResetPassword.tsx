import { CarouselRegister } from "@features/auth";
import { Button } from "@shared";
import { FormResetPasswordStyles as styles } from "./FormResetPassword.style";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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

function FormResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Redefinir senha</h1>
          <p className={styles.paragraph}>
            Insira sua nova senha para continuar com sua reserva.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="reset-password" className={styles.label}>
              Digite sua nova senha
            </label>
            <span className={styles.passwordInputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="reset-password"
                name="password"

                placeholder={
                  showPassword ? "Insira sua nova senha" : "********"
                }
                required
                className={styles.input}
              />
              <span
                className={styles.passwordToggleButton}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <Visibility className="text-icons" />
                ) : (
                  <VisibilityOff className="text-icons" />
                )}
              </span>
            </span>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirm-reset-password" className={styles.label}>
              Confirme sua nova senha
            </label>
            <span className={styles.passwordInputWrapper}>
              <input
                type={showPasswordConfirm ? "text" : "password"}
                id="confirm-reset-password"
                name="confirm-password"
                placeholder={
                  showPasswordConfirm ? "Confirme sua nova senha" : "********"
                }
                required
                className={styles.input}
              />
              <span
                className={styles.passwordToggleButton}
                onClick={() => setShowPasswordConfirm((prev) => !prev)}
              >
                {showPasswordConfirm ? (
                  <Visibility className="text-icons" />
                ) : (
                  <VisibilityOff className="text-icons" />
                )}
              </span>
            </span>
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

export default FormResetPassword;
