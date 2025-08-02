import Button from "../Button";
import ImageLobby from "../../assets/images/img-lobby.webp";
import { aboutUsStyles as styles } from "./AboutUs.style";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks/useIsVisible";
import { fadeInStagger } from "../../animations/fadeInStagger";

function AboutUs() {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();

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
            <h2 className={styles.heading}>Sobre Nós</h2>
            <p className={styles.paragraph}>
              Aninhado entre montanhas majestosas e o azul infinito do mar, o
              Regency não é apenas um hotel – é um refúgio onde o tempo
              desacelera e cada detalhe foi pensado para encantar.
              <br />
              <br />
              Dos quartos banhados por luz natural às experiências gastronômicas
              que celebram sabores locais e internacionais, cada momento aqui é
              uma celebração do bem-viver.
              <br />
              <br />
              Seja para negócios ou lazer, nossa equipe está pronta para
              transformar sua estadia em uma lembrança inesquecível – com a
              sofisticação e o cuidado que você merece.
            </p>
            <Button label="Saiba mais sobre nós" variant="secondary" size="default" />
          </div>
        </motion.div>

        <div className={styles.imageContainer}>
          <img
            src={ImageLobby}
            alt="Imagem do Hotel Regency Heights"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
