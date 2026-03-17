import { fadeInStagger } from "@shared/animations/fadeInStagger";
import ImageHotel from "@/assets/images/img-hotel.webp";
import { useIsVisible } from "@shared";
import { Button } from "@shared";
import { HeroBannerStyles as styles } from "./HeroBanner.style";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function HeroBanner() {
  const fade = fadeInStagger();
  const { ref, inView } = useIsVisible();
  const { t } = useTranslation();

  return (
    <section className={styles.sectionStyle} ref={ref}>
      <link
        rel="preload"
        as="image"
        href={ImageHotel}
        imageSrcSet={ImageHotel}
        type="image/webp"
      />
      <motion.section
        variants={fade.container}
        ref={ref}
        className={styles.sectionStyle}
      >
        <div className={styles.containerStyle}>
          <motion.div
            variants={fade.item}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className={styles.contentStyle}
          >
            <h1 className={styles.titleStyle}>
              {t("hero.welcome")}
              <br />
              <span className={styles.highlightStyle}>
                {t("hero.hotelName")}
              </span>
              <br />
              {t("hero.hotel")}
            </h1>
            <p className={styles.descriptionStyle}>{t("hero.description")}</p>
            <Button
              label={t("hero.explore")}
              variant="primary"
              size="default"
            />
          </motion.div>

          <motion.div
            variants={fade.item}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className={styles.imageContainerStyle}
          >
            <img
              src={ImageHotel}
              alt="Imagem do Hotel Regency Heights"
              className={styles.imageStyle}
              width={800}
              height={350}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}

export default HeroBanner;
