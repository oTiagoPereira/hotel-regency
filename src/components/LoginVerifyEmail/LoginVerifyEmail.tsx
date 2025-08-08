import Button from "../Button";
import CarouselRegister from "../CarouselRegister";
import { LoginVerifyEmailStyles as styles } from "./LoginVerifyEmail.style"

function LoginVerifyEmail() {
  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Verifique seu e-mail</h1>
          <p className={styles.paragraph}>
            Enviamos um código de confirmação para seu e-mail. Acesse sua caixa de entrada e o código para ativar sua conta.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="code"
              name="code"
              placeholder="exemplo@regency.com"
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
        <CarouselRegister />
      </div>
    </section>
  );
}

export default LoginVerifyEmail
