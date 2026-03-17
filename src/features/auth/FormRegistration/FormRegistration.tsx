import { Link } from "react-router-dom";
import { Button } from "@shared";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState, useMemo } from "react";
import { CarouselRegister } from "@features/auth";
import { FormRegistrationStyles as styles } from "./FormRegistration.style";
import HotelFront from "@/assets/images/img-hotel-front.webp";
import HotelSnack from "@/assets/images/img-snack.webp";
import HotelParty from "@/assets/images/img-party.webp";
import { useTranslation } from "react-i18next";

function FormRegistration() {
  const [showPasswordPrimary, setShowPasswordPrimary] = useState(false);
  const [showPasswordSecondary, setShowPasswordSecondary] = useState(false);
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

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>{t("auth.register.title")}</h1>
          <p className={styles.paragraph}>{t("auth.register.subtitle")}</p>
        </div>

        <form action="" className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              {t("auth.fields.email")} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("auth.placeholders.email")}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              {t("auth.fields.name")} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("auth.placeholders.name")}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              {t("auth.fields.password")} *
            </label>
            <span className={styles.passwordInputWrapper}>
              <input
                type={showPasswordPrimary ? "text" : "password"}
                id="login-password"
                name="password"
                placeholder={
                  showPasswordPrimary
                    ? t("auth.placeholders.password")
                    : "********"
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
              {t("auth.fields.confirmPassword")} *
            </label>
            <span className={styles.passwordInputWrapper}>
              <input
                type={showPasswordSecondary ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                placeholder={
                  showPasswordSecondary
                    ? t("auth.placeholders.password")
                    : "********"
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
              {t("auth.fields.phone")} (Opcional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t("auth.placeholders.phone")}
              className={styles.input}
            />
          </div>

          <Button
            label={t("auth.register.submit")}
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
          label={t("auth.register.google")}
          variant="secondary"
          size="width_full"
          Icon={Google}
        />

        <p className={styles.textCenter}>
          {t("auth.register.alreadyAccount")}{" "}
          <Link to="/login" className={styles.linkPrimary}>
            {t("auth.register.login")}
          </Link>
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <CarouselRegister slides={slides} />
      </div>
    </section>
  );
}

export default FormRegistration;
