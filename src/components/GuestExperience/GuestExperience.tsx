import { Rating } from "@mui/material";
import Carousel from "../Carousel";
import { GuestExperienceStyles as styles } from "./GuestExperience.style";

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
  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <Rating name="rating" value={rating} precision={0.5} readOnly />
      <p className={styles.cardText}>{review}</p>
    </div>
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
  const cardElements = guestExperienceText.map((card) => (
    <GuestExperienceCard key={card.name} {...card} />
  ));

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>Experiências dos Hóspedes</h2>
        <p className={styles.sectionDescription}>
          Descubra o que nossos hóspedes têm a dizer sobre suas memoráveis
          estadias no Regency.
        </p>
      </div>

      <Carousel
        items={cardElements}
        showDots
        desktopGridCols="md:grid-cols-3"
      />
    </section>
  );
}

export default GuestExperience;
