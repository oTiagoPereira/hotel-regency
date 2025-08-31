import { useNavigate } from "react-router-dom";
import { fadeInStagger } from "../../animations/fadeInStagger";
import { useIsVisible } from "../../hooks/useIsVisible";
import Button from "../Button";
import { Carousel, RoomsCard } from "../index";
import { HomeRoomsStyles as styles } from "./HomeRooms.style";
import { motion } from "framer-motion";
import { useMemo } from "react";
import roomsData from "./../../data/rooms.json"

function HomeRooms() {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();
  const navigate = useNavigate()

  const cardElements = useMemo(
    () =>
      roomsData.slice(0,3).map((card) => (
        <motion.div key={card.id} variants={fade.item}>
            <RoomsCard key={card.id} {...card}
            bed={card.bed.amount} 
            people={card.people} 
            thumb={card.thumb}
            ratings={card.ratings.average}
            labelButton="Ver Detalhes" 
            onClick={() => {navigate(`/accommodation/${card.id}`)}} />
        </motion.div>
      )),
    [fade.item, navigate]
  );

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.title}>Quartos em destaque</h2>
        <p className={styles.description}>
          Escolha entre nossa seleção de quartos e suítes meticulosamente
          projetados para uma estadia confortável e luxuosa.
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
          items={roomsData.slice(0, 6).map((card) => (
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

      <div className={styles.buttonWrapper}>
        <Button
          label="Ver todos os quartos"
          variant="secondary"
          size="default"
          onClick={() => navigate("/accommodation")}
        />
      </div>
    </section>
  );
}

export default HomeRooms;
