import { Link } from "react-router-dom";
import Button from "../Button";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import CarouselRegister from "../CarouselRegister";
import { FormRegistrationStyles as styles } from "./FormRegistration.style";

function FormRegistration() {
  const [showPasswordPrimary, setShowPasswordPrimary] = useState(false);
  const [showPasswordSecondary, setShowPasswordSecondary] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Faça parte da nossa experiência</h1>
          <p className={styles.paragraph}>
            Cadastre-se para reservar quartos e acompanhar suas estadias.
          </p>
        </div>

        <form action="" className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Digite seu e-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@regency.com"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Digite seu nome completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome Completo"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Digite sua senha *
            </label>
            <span className={styles.passwordInputWrapper}>
              <input
                type={showPasswordPrimary ? "text" : "password"}
                id="login-password"
                name="password"
                placeholder={
                  showPasswordPrimary ? "Insira sua senha" : "********"
                }
                required
                className={styles.input}
              />
              <span
                className={styles.passwordToggleButton}
                onClick={() => setShowPasswordPrimary((prev) => !prev)}
              >
                {showPasswordPrimary ? (
                  <Visibility className="text-icons" />
                ) : (
                  <VisibilityOff className="text-icons" />
                )}
              </span>
            </span>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirm-password" className={styles.label}>
              Confirmar senha *
            </label>
            <span className={styles.passwordInputWrapper}>
              <input
                type={showPasswordSecondary ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                placeholder={
                  showPasswordSecondary ? "Insira sua senha" : "********"
                }
                required
                className={styles.input}
              />
              <span
                className={styles.passwordToggleButton}
                onClick={() => setShowPasswordSecondary((prev) => !prev)}
              >
                {showPasswordSecondary ? (
                  <Visibility className="text-icons" />
                ) : (
                  <VisibilityOff className="text-icons" />
                )}
              </span>
            </span>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Telefone (Opcional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+55 (00) 12345-6789"
              className={styles.input}
            />
          </div>

          <Button
            label="Cadastrar"
            variant="primary"
            size="width_full"
            type="submit"
          />
        </form>

        <div className={styles.dividerContainer}>
          <div className={styles.dividerLine}></div>
          <span className={styles.dividerText}>ou</span>
          <div className={styles.dividerLine}></div>
        </div>

        <Button
          label="Continuar com Google"
          variant="secondary"
          size="width_full"
          Icon={Google}
        />

        <p className={styles.textCenter}>
          Possui uma conta?{" "}
          <Link to="/login" className={styles.linkPrimary}>
            Entrar
          </Link>
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <CarouselRegister />
      </div>
    </section>
  );
}

export default FormRegistration;
