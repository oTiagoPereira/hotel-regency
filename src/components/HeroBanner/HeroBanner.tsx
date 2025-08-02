import { fadeInStagger } from "../../animations/fadeInStagger";
import ImageHotel from "../../assets/images/img-hotel.svg";
import { useIsVisible } from "../../hooks/useIsVisible";
import Button from "../Button";
import { HeroBannerStyles as styles } from "./HeroBanner.style";
import { motion } from "framer-motion";

function HeroBanner() {
  const fade = fadeInStagger();
  const { ref, inView } = useIsVisible();

  return (
    <motion.section
      variants={fade.container}
      ref={ref}
      className={styles.sectionStyle}
    >
      <div
        className={styles.containerStyle}
      >
        <motion.div
        variants={fade.item}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={styles.contentStyle}>
          <h1 className={styles.titleStyle}>
            Bem-Vindo ao
            <br />
            <span className={styles.highlightStyle}> Regency Heights </span>
            <br />
            Hotel
          </h1>
          <p className={styles.descriptionStyle}>
            Onde o luxo encontra o conforto. Nossa equipe está preparada para
            proporcionar uma experiência inesquecível, com serviço personalizado
            e atenção aos mínimos detalhes.
          </p>
          <Button
            label="Explore Nossas Suítes"
            variant="primary"
            size="default"
          />
        </motion.div>

        <motion.div
        variants={fade.item}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={styles.imageContainerStyle}>
          <img
            src={ImageHotel}
            alt="Imagem do Hotel Regency Heights"
            className={styles.imageStyle}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroBanner;
