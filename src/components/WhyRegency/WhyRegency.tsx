import { Star, Restaurant, Spa } from "@mui/icons-material";
import { whyRegencyStyles as styles } from "./WhyRegency.style";
import type { JSX } from "@emotion/react/jsx-runtime";
import Carousel from "../Carousel";

type CardProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
};

const Card = ({ title, description, icon }: CardProps) => (
  <div className={styles.card}>
    <span className={styles.cardIcon}>{icon}</span>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDesc}>{description}</p>
  </div>
);

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
  const cardElements = cards.map((card, idx) => <Card key={idx} {...card} />);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Por que escolher o Regency?</h2>
          <p className={styles.subtitle}>
            Experimente a combinação perfeita de luxo, conforto e serviço
            excepcional que nos diferencia.
          </p>
        </div>

        <Carousel
          items={cardElements}
          showDots
          desktopGridCols="md:grid-cols-3"
        />
      </div>
    </section>
  );
}
