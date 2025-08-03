import { fadeInStagger } from "../../animations/fadeInStagger";
import { useIsVisible } from "../../hooks/useIsVisible";
import Button from "../Button";
import { Carousel, RoomsCard } from "../index";
import { HomeRoomsStyles as styles } from "./HomeRooms.style";
import { motion } from "framer-motion";
import { useMemo } from "react";

const TextCards = [
  {
    title: "Suíte Luxo",
    bed: 1,
    people: 2,
    meters: 30,
    value: "500,00",
    image:
      "https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg",
  },
  {
    title: "Suíte Luxo",
    bed: 1,
    people: 2,
    meters: 30,
    value: "500,00",
    image:
      "https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg",
  },
  {
    title: "Suíte Luxo",
    bed: 1,
    people: 2,
    meters: 30,
    value: "500,00",
    image:
      "https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg",
  },
];

function HomeRooms() {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();

  const cardElements = useMemo(
    () =>
      TextCards.map((card, idx) => (
        <motion.div key={idx} variants={fade.item}>
          <RoomsCard {...card} />
        </motion.div>
      )),
    [fade.item]
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
          items={TextCards.map((card, idx) => (
            <RoomsCard key={idx} {...card} />
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
        />
      </div>
    </section>
  );
}

export default HomeRooms;
