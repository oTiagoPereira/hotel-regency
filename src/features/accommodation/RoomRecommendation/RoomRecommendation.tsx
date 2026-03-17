import { useNavigate } from "react-router-dom";
import { fadeInStagger } from "@shared/animations/fadeInStagger";
import { useIsVisible } from "@shared";
import { useMemo } from "react";
import { motion } from "framer-motion";
import roomsData from "@features/accommodation/data/rooms.json";
import { RoomsCard } from "@features/accommodation";
import Carousel from "../CarouselHome";
import { RoomRecommendationStyle as Styles } from "./RoomRecommendation.style";
import { useTranslation } from "react-i18next";

interface RoomRecommendationProps {
  currentRoomId: number;
}

function RoomRecommendation({ currentRoomId }: RoomRecommendationProps) {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const filteredRooms = useMemo(() => {
    return roomsData.filter((room) => room.id !== currentRoomId);
  }, [currentRoomId]);

  const cardElements = useMemo(
    () =>
      filteredRooms.slice(0, 3).map((card) => (
        <motion.div key={card.id} variants={fade.item}>
          <RoomsCard
            key={card.id}
            room={card}
            labelButton={t("accommodation.detailsButton")}
            onClick={() => {
              navigate(`/accommodation/${card.id}`);
            }}
          />
        </motion.div>
      )),
    [fade.item, navigate, filteredRooms, t],
  );
  return (
    <section className={Styles.section} ref={ref}>
      <h1 className={Styles.title}>{t("recommendation.title")}</h1>

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
          items={filteredRooms.slice(0, 6).map((card) => (
            <RoomsCard
              key={card.id}
              room={card}
              labelButton={t("accommodation.detailsButton")}
              onClick={() => {
                navigate(`/accommodation/${card.id}`);
              }}
            />
          ))}
          showDots
          desktopGridCols=""
        />
      </motion.div>
    </section>
  );
}

export default RoomRecommendation;
