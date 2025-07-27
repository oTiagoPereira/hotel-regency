import Button from "../Button";
import { Carousel, RoomsCard } from "../index";
import { HomeRoomsStyles as styles } from "./HomeRooms.style";

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
  const cardElements = TextCards.map((card, idx) => (
    <RoomsCard key={idx} {...card} />
  ));

  return (
    <section className={styles.section}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.title}>Quartos em destaque</h2>
        <p className={styles.description}>
          Escolha entre nossa seleção de quartos e suítes meticulosamente
          projetados para uma estadia confortável e luxuosa.
        </p>
      </div>

      <Carousel
        items={cardElements}
        showDots
        desktopGridCols="md:grid-cols-3"
      />

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
