import { Link } from "react-router-dom";
import { FooterStyles as styles } from "./Footer.style";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.section}>
            <p className={styles.sectionTitle}>Navegação rápida</p>
            <ul className={styles.list}>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">Hospedagem</Link>
              </li>
              <li>
                <Link to="/amenities">Eventos</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
              <li>
                <Link to="/learn-more">Saiba mais</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Informações de Contato</p>
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
            <p className={styles.sectionTitle}>Políticas</p>
            <ul className={styles.list}>
              <li>
                <Link to="/cancellation-policies">
                  Políticas de cancelamento e reservas
                </Link>
              </li>
              <li>
                <Link to="privacy-policy">Política de privacidade</Link>
              </li>
              <li>
                <Link to="terms-conditions">Termos e condições</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Redes Sociais</p>
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
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © 2025 Regency Heights -{" "}
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
