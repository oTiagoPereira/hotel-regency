import { Link, useNavigate } from "react-router-dom";
import { Button } from "@shared";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState, useMemo } from "react";
import { CarouselRegister } from "@features/auth";
import { FormLoginStyles as styles } from "./FormLogin.style";
import HotelFront from "@/assets/images/img-hotel-front.webp";
import HotelSnack from "@/assets/images/img-snack.webp";
import HotelParty from "@/assets/images/img-party.webp";
import { useTranslation } from "react-i18next";

function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  const slides = useMemo(
    () => [
      {
        src: HotelFront,
        text: t("auth.carousel.slide1"),
      },
      {
        src: HotelSnack,
        text: t("auth.carousel.slide2"),
      },
      {
        src: HotelParty,
        text: t("auth.carousel.slide3"),
      },
    ],
    [t],
  );

  async function VerifyEmail(e: React.FormEvent) {
    e.preventDefault();

    const sucesso = true;

    if (sucesso == true) {
      return navigate("/verify-email", {
        state: { email, type: "login" },
        replace: true,
      });
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>{t("auth.login.title")}</h1>
          <p className={styles.paragraph}>{t("auth.login.subtitle")}</p>
        </div>

        <form onSubmit={VerifyEmail} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              {t("auth.fields.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("auth.placeholders.email")}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <span className={styles.passwordLabelContainer}>
              <label htmlFor="password" className={styles.label}>
                {t("auth.fields.password")}
              </label>
              <Link to="/forgot-password" className={styles.forgetPasswordLink}>
                {t("auth.login.forgotPassword")}
              </Link>
            </span>
            <span className={styles.passwordInputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="login-password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={
                  showPassword ? t("auth.placeholders.password") : "********"
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
          <Button
            label={t("auth.login.submit")}
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
          label={t("auth.login.google")}
          variant="secondary"
          size="width_full"
          Icon={Google}
        />

        <p className={styles.textCenter}>
          {t("auth.login.noAccount")}{" "}
          <Link to="/registration" className={styles.linkRegistration}>
            {t("auth.login.register")}
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
