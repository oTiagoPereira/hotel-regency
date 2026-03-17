import { useNavigate } from "react-router-dom";
import { fadeInStagger } from "@shared/animations/fadeInStagger";
import { useIsVisible } from "@shared";
import { Button } from "@shared";
import Carousel from "../CarouselHome/CarouselHome";
import { RoomsCard } from "@features/accommodation";
import { HomeRoomsStyles as styles } from "./HomeRooms.style";
import { motion } from "framer-motion";
import { useMemo } from "react";
import roomsData from "@features/accommodation/data/rooms.json";
import { useTranslation } from "react-i18next";

function HomeRooms() {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const cardElements = useMemo(
    () =>
      roomsData.slice(0, 3).map((card) => (
        <motion.div key={card.id} variants={fade.item}>
          <RoomsCard
            key={card.id}
            room={card}
            labelButton={t("homeRooms.details")}
            onClick={() => {
              navigate(`/accommodation/${card.id}`);
            }}
          />
        </motion.div>
      )),
    [fade.item, navigate, t],
  );

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.title}>{t("homeRooms.title")}</h2>
        <p className={styles.description}>{t("homeRooms.subtitle")}</p>
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
          items={roomsData.slice(0, 6).map((card) => (
            <RoomsCard
              key={card.id}
              room={card}
              labelButton={t("homeRooms.details")}
              onClick={() => {
                navigate(`/accommodation/${card.id}`);
              }}
            />
          ))}
          showDots
          desktopGridCols=""
        />
      </motion.div>

      <div className={styles.buttonWrapper}>
        <Button
          label={t("homeRooms.viewAll")}
          variant="secondary"
          size="default"
          onClick={() => navigate("/accommodation")}
        />
      </div>
    </section>
  );
}

export default HomeRooms;
