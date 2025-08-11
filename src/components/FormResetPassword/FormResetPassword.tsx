import CarouselRegister from "../CarouselRegister";
import Button from "../Button";
import { FormResetPasswordStyles as styles } from "./FormResetPassword.style";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
        <CarouselRegister />
      </div>
    </section>
  );
}

export default FormResetPassword;
