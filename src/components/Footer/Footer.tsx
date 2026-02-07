import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FooterStyles as styles } from "./Footer.style";
import LanguageSwitcher from "../LanguageSwitcher";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.section}>
            <p className={styles.sectionTitle}>
              {t("footer.quickLinks.title")}
            </p>
            <ul className={styles.list}>
              <li>
                <Link to="/">{t("footer.quickLinks.home")}</Link>
              </li>
              <li>
                <Link to="/accommodation">
                  {t("footer.quickLinks.accommodation")}
                </Link>
              </li>
              <li>
                <Link to="/events">{t("footer.quickLinks.events")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.quickLinks.contact")}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>
              {t("footer.contactInfo.title")}
            </p>
            <ul className={styles.list}>
              <li>
                <a href="tel:+55 (00)00000-0000" rel="noopener noreferrer">
                  +55 (00)00000-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:regencyheights@outlook.com"
                  rel="noopener noreferrer"
                >
                  regencyheights@outlook.com
                </a>
              </li>
              <li>Rua Regency, Brasil</li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>{t("footer.policies.title")}</p>
            <ul className={styles.list}>
              <li>
                <Link to="/cancellation-policies">
                  {t("footer.policies.cancellation")}
                </Link>
              </li>
              <li>
                <Link to="privacy-policy">{t("footer.policies.privacy")}</Link>
              </li>
              <li>
                <Link to="terms-conditions">{t("footer.policies.terms")}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>{t("footer.social.title")}</p>
            <ul className={styles.list}>
              <li>
                <a
                  href="https://www.instagram.com/regencyheightshotel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/regencyheightshotel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/regencyheightshotel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>{t("footer.languages.title")}</p>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          {t("footer.copyright")} -{" "}
          <a
            href="https://github.com/oTiagoPereira"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiago Pereira
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
