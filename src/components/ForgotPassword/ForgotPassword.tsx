import CarouselRegister from "../CarouselRegister";
import Button from "../Button";
import { ForgotPasswordStyles as styles } from "./ForgotPassword.style"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
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
        <CarouselRegister />
      </div>
    </section>
  );
}

export default ForgotPassword
