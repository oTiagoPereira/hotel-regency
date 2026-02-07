import Button from "../Button";
import ImageLobby from "../../assets/images/img-lobby.webp";
import { aboutUsStyles as styles } from "./AboutUs.style";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks/useIsVisible";
import { fadeInStagger } from "../../animations/fadeInStagger";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();
  const { t } = useTranslation();

  return (
    <section className={styles.aboutUsSection} ref={ref}>
      <div className={styles.container}>
        <motion.div
          variants={fade.item}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={styles.textContainer}
        >
          <div className={styles.textContent}>
            <h2 className={styles.heading}>{t("about.title")}</h2>
            <p className={styles.paragraph}>
              {t("about.p1")}
              <br />
              <br />
              {t("about.p2")}
              <br />
              <br />
              {t("about.p3")}
            </p>
            <Button label={t("about.cta")} variant="secondary" size="default" />
          </div>
        </motion.div>

        <motion.div
          variants={fade.item}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={styles.imageContainer}
        >
          <img
            src={ImageLobby}
            alt="Imagem da Recepção Hotel Regency Heights"
            className={styles.image}
            width={600}
            height={400}
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
