import { Star, Restaurant, Spa } from "@mui/icons-material";
import { whyRegencyStyles as styles } from "./WhyRegency.style";
import type { JSX } from "@emotion/react/jsx-runtime";
import Carousel from "../Carousel";
import { motion } from "framer-motion";
import { fadeInStagger } from "../../animations/fadeInStagger";
import { useIsVisible } from "../../hooks/useIsVisible";

type CardProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
};

const Card = ({ title, description, icon }: CardProps) => {
  const fade = fadeInStagger(0.15);
  return (
    <motion.div variants={fade.item} className={styles.card}>
      <span className={styles.cardIcon}>{icon}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </motion.div>
  );
};

const cards = [
  {
    title: "Localização Premium",
    description:
      "Situado com vistas deslumbrantes e fácil acesso às atrações locais e pontos de referência.",
    icon: <Star />,
  },
  {
    title: "Jantar gourmet",
    description:
      "Experiências culinárias requintadas com ingredientes locais preparados por chefs premiados",
    icon: <Restaurant />,
  },
  {
    title: "Spa de bem-estar",
    description:
      "Tratamentos de spa completos e programas de bem-estar que renovam corpo e mente",
    icon: <Spa />,
  },
];

export default function WhyRegency() {
  const { ref, inView } = useIsVisible();
    const fade = fadeInStagger();

  const cardElements = cards.map((card, idx) => <Card key={idx} {...card} />);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            variants={fade.container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className={styles.title}
          >
            Por que escolher o Regency?
          </motion.h2>
          <p className={styles.subtitle}>
            Experimente a combinação perfeita de luxo, conforto e serviço
            excepcional que nos diferencia.
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
        transition={{delay: 0.9}}
        className="md:hidden">
          <Carousel
            items={cards.map((card, idx) => <Card key={idx} {...card} />)}
            showDots
            desktopGridCols=""
          />
        </motion.div>
      </div>
    </section>
  );
}
