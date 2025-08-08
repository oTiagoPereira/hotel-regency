import { Rating } from "@mui/material";
import Carousel from "../CarouselHome";
import { GuestExperienceStyles as styles } from "./GuestExperience.style";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks/useIsVisible";
import { fadeInStagger } from "../../animations/fadeInStagger";
import { useMemo } from "react";

type GuestExperienceCardProps = {
  name: string;
  rating: number;
  review: string;
};

const GuestExperienceCard = ({
  name,
  rating,
  review,
}: GuestExperienceCardProps) => {
  const fade = fadeInStagger(1.0);
  return (
    <motion.div variants={fade.item} className={styles.cardWrapper}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <Rating name="rating" value={rating} precision={0.5} readOnly />
      <p className={styles.cardText}>{review}</p>
    </motion.div>
  );
};

const guestExperienceText = [
  {
    name: "João Silva",
    rating: 4.5,
    review:
      "Uma experiência incrível! O hotel é maravilhoso e o atendimento é excepcional.",
  },
  {
    name: "Maria Oliveira",
    rating: 5,
    review:
      "Adorei minha estadia! Quartos confortáveis e uma vista deslumbrante.",
  },
  {
    name: "Carlos Pereira",
    rating: 4,
    review: "Excelente localização e serviços de qualidade. Recomendo!",
  },
];

function GuestExperience() {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();

  const cardElements = useMemo(
    () =>
      guestExperienceText.map((card) => (
        <GuestExperienceCard key={card.name} {...card} />
      )),
    []
  );

  return (
    <section className={styles.sectionWrapper} ref={ref}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>Experiências dos Hóspedes</h2>
        <p className={styles.sectionDescription}>
          Descubra o que nossos hóspedes têm a dizer sobre suas memoráveis
          estadias no Regency.
        </p>
      </div>

      <motion.div
        className="hidden md:grid md:grid-cols-3 gap-6"
        variants={fade.container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {cardElements}
      </motion.div>

      <motion.div
        variants={fade.container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        transition={{ delay: 0.9 }}
        className="md:hidden"
      >
        <Carousel
          items={guestExperienceText.map((card) => (
            <GuestExperienceCard key={card.name} {...card} />
          ))}
          showDots
          desktopGridCols=""
        />
      </motion.div>
    </section>
  );
}

export default GuestExperience;
