import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import CarouselRegister from "../CarouselRegister";
import { FormLoginStyles as styles } from "./FormLogin.style";
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

function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function VerifyEmail(e: React.FormEvent) {
    e.preventDefault()

    const sucesso = true

    if (sucesso == true) {
      return navigate("/verify-email", {
        state: {email, type: "login"},
        replace: true
      })
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Bem-vindo de volta!</h1>
          <p className={styles.paragraph}>
            Insira seus dados para continuar com sua reserva.
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
          <div className={styles.formGroup}>
            <span className={styles.passwordLabelContainer}>
              <label htmlFor="password" className={styles.label}>
                Digite sua senha
              </label>
              <Link to="/forgot-password" className={styles.forgetPasswordLink}>
                Esqueci a senha
              </Link>
            </span>
            <span className={styles.passwordInputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="login-password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={showPassword ? "Insira sua senha" : "********"}
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
          <Button
            label="Entrar"
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
          label="Entrar com Google"
          variant="secondary"
          size="width_full"
          Icon={Google}
        />

        <p className={styles.textCenter}>
          Não possui uma conta?{" "}
          <Link to="/registration" className={styles.linkRegistration}>
            Registre-se
          </Link>
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <CarouselRegister slides={slides} />
      </div>
    </section>
  );
}

export default FormLogin;
