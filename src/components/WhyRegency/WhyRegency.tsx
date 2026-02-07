import { Star, Restaurant, Spa } from "@mui/icons-material";
import { whyRegencyStyles as styles } from "./WhyRegency.style";
import type { JSX } from "@emotion/react/jsx-runtime";
import Carousel from "../CarouselHome";
import { motion } from "framer-motion";
import { fadeInStagger } from "../../animations/fadeInStagger";
import { useIsVisible } from "../../hooks/useIsVisible";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

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

export default function WhyRegency() {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();
  const { t } = useTranslation();

  const cards = useMemo(
    () => [
      {
        title: t("whyRegency.location.title"),
        description: t("whyRegency.location.desc"),
        icon: <Star />,
      },
      {
        title: t("whyRegency.dining.title"),
        description: t("whyRegency.dining.desc"),
        icon: <Restaurant />,
      },
      {
        title: t("whyRegency.wellness.title"),
        description: t("whyRegency.wellness.desc"),
        icon: <Spa />,
      },
    ],
    [t],
  );

  const cardElements = useMemo(
    () => cards.map((card, idx) => <Card key={idx} {...card} />),
    [cards],
  );

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
            {t("whyRegency.title")}
          </motion.h2>
          <p className={styles.subtitle}>{t("whyRegency.subtitle")}</p>
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
            items={cards.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
            showDots
            desktopGridCols=""
          />
        </motion.div>
      </div>
    </section>
  );
}
