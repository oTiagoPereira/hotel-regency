import { Rating } from "@mui/material";
import Carousel from "../CarouselHome";
import { GuestExperienceStyles as styles } from "./GuestExperience.style";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks/useIsVisible";
import { fadeInStagger } from "../../animations/fadeInStagger";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

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

function GuestExperience() {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();
  const { t } = useTranslation();

  const guestExperienceText = useMemo(
    () => [
      {
        name: "João Silva",
        rating: 4.5,
        review: t("reviews.item1"),
      },
      {
        name: "Maria Oliveira",
        rating: 5,
        review: t("reviews.item2"),
      },
      {
        name: "Carlos Pereira",
        rating: 4,
        review: t("reviews.item3"),
      },
    ],
    [t],
  );

  const cardElements = useMemo(
    () =>
      guestExperienceText.map((card) => (
        <GuestExperienceCard key={card.name} {...card} />
      )),
    [guestExperienceText],
  );

  return (
    <section className={styles.sectionWrapper} ref={ref}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>{t("reviews.title")}</h2>
        <p className={styles.sectionDescription}>{t("reviews.subtitle")}</p>
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
