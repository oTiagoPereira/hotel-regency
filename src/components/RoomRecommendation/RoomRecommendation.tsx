import { useNavigate } from "react-router-dom";
import { fadeInStagger } from "../../animations/fadeInStagger";
import { useIsVisible } from "../../hooks/useIsVisible";
import { useMemo } from "react";
import { motion } from "framer-motion";
import roomsData from "./../../data/rooms.json";
import RoomsCard from "../RoomsCard";
import Carousel from "../CarouselHome";
import { RoomRecommendationStyle as Styles } from "./RoomRecommendation.style";

interface RoomRecommendationProps {
  currentRoomId: number;
}

function RoomRecommendation({ currentRoomId }: RoomRecommendationProps) {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();
  const navigate = useNavigate();

  const filteredRooms = useMemo(() => {
    return roomsData.filter((room) => room.id !== currentRoomId);
  }, [currentRoomId]);

  const cardElements = useMemo(
    () =>
      filteredRooms.slice(0, 3).map((card) => (
        <motion.div key={card.id} variants={fade.item}>
          <RoomsCard
            key={card.id}
            {...card}
            bed={card.bed.amount}
            people={card.people}
            thumb={card.thumb}
            ratings={card.ratings.average}
            labelButton="Ver Detalhes"
            onClick={() => {
              navigate(`/accommodation/${card.id}`);
            }}
          />
        </motion.div>
      )),
    [fade.item, navigate, filteredRooms]
  );
  return (
    <section className={Styles.section} ref={ref}>
      <h1 className={Styles.title}>
        Você também pode gostar
      </h1>

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
              key={card.id} {...card}
              bed={card.bed.amount} 
              people={card.people} 
              thumb={card.thumb}
              ratings={card.ratings.average}
              labelButton="Ver Detalhes" 
              onClick={() => {navigate(`/accommodation/${card.id}`)}}
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
