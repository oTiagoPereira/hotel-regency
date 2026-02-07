import {
  FitnessCenter,
  ForkLeft,
  LocalBar,
  LocalParking,
  Poll,
  RoomService,
  Spa,
  Wifi,
  type SvgIconComponent,
} from "@mui/icons-material";
import { useState, memo, useMemo } from "react";
import Button from "../Button";
import { amenitiesStyle as styles } from "./Amenities.style";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks/useIsVisible";
import { fadeInStagger } from "../../animations/fadeInStagger";
import { useTranslation } from "react-i18next";

type AmenitiesCardProps = {
  title: string;
  description: string;
  Icon: SvgIconComponent;
};

const AmenitiesCard = memo(
  ({ title, description, Icon }: AmenitiesCardProps) => {
    const fade = fadeInStagger();
    return (
      <motion.div variants={fade.item} className={styles.card}>
        <span className={styles.iconWrapper}>
          <Icon />
        </span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </motion.div>
    );
  },
);

function Amenities() {
  const [showAll, setShowAll] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const displayAll = isDesktop || showAll;

  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();
  const { t } = useTranslation();

  const amenitiesList = useMemo(
    () => [
      {
        title: t("amenities.items.wifi.title"),
        description: t("amenities.items.wifi.desc"),
        Icon: Wifi,
      },
      {
        title: t("amenities.items.pool.title"),
        description: t("amenities.items.pool.desc"),
        Icon: Poll,
      },
      {
        title: t("amenities.items.dining.title"),
        description: t("amenities.items.dining.desc"),
        Icon: ForkLeft,
      },
      {
        title: t("amenities.items.spa.title"),
        description: t("amenities.items.spa.desc"),
        Icon: Spa,
      },
      {
        title: t("amenities.items.fitness.title"),
        description: t("amenities.items.fitness.desc"),
        Icon: FitnessCenter,
      },
      {
        title: t("amenities.items.bar.title"),
        description: t("amenities.items.bar.desc"),
        Icon: LocalBar,
      },
      {
        title: t("amenities.items.parking.title"),
        description: t("amenities.items.parking.desc"),
        Icon: LocalParking,
      },
      {
        title: t("amenities.items.concierge.title"),
        description: t("amenities.items.concierge.desc"),
        Icon: RoomService,
      },
    ],
    [t],
  );

  const half = Math.ceil(amenitiesList.length / 2);

  const cardElements = useMemo(
    () =>
      (displayAll ? amenitiesList : amenitiesList.slice(0, half)).map(
        (card, idx) => <AmenitiesCard key={idx} {...card} />,
      ),
    [displayAll, half, amenitiesList],
  );

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{t("amenities.title")}</h2>
          <p className={styles.paragraph}>{t("amenities.subtitle")}</p>
        </div>
        <motion.div
          className={styles.grid}
          variants={fade.container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {cardElements}
        </motion.div>
        <span className={styles.buttonWrapper}>
          {!displayAll ? (
            <Button
              label={t("amenities.viewMore")}
              variant="primary"
              onClick={() => setShowAll(true)}
            />
          ) : (
            !isDesktop && (
              <Button
                label={t("amenities.viewLess")}
                variant="secondary"
                onClick={() => setShowAll(false)}
              />
            )
          )}
        </span>
      </div>
    </section>
  );
}

export default Amenities;
