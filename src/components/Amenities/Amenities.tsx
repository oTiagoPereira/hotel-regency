import {
  FitnessCenter,
  LocalBar,
  LocalParking,
  Poll,
  Restaurant,
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

type AmenitiesCardProps = {
  title: string;
  description: string;
  Icon: SvgIconComponent;
};

const AmenitiesCard = memo(({ title, description, Icon }: AmenitiesCardProps) => {
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
});

const amenitiesList = [
  {
    title: "Wi-Fi de Alta Velocidade",
    description: "Gratuita em toda a propriedade.",
    Icon: Wifi,
  },
  {
    title: "Piscina Infinita",
    description: "Com vistas panorâmicas para o mar.",
    Icon: Poll,
  },
  {
    title: "Refeições Finas",
    description: "Restaurantes premiados.",
    Icon: Restaurant,
  },
  {
    title: "Spa Luxuoso",
    description: "Tratamentos de bem-estar de serviço completo.",
    Icon: Spa,
  },
  {
    title: "Centro Fitness",
    description: "Equipamento de última geração.",
    Icon: FitnessCenter,
  },
  {
    title: "Bar Rooftop",
    description: "Coquetéis artesanais com vista.",
    Icon: LocalBar,
  },
  {
    title: "Estacionamento com Valet",
    description: "Gratuita para os hóspedes.",
    Icon: LocalParking,
  },
  {
    title: "Concierge",
    description: "24/7 serviço personalizado.",
    Icon: RoomService,
  },
];

function Amenities() {
  const [showAll, setShowAll] = useState(false);
  const half = Math.ceil(amenitiesList.length / 2);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const displayAll = isDesktop || showAll;

  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();

  const cardElements = useMemo(
    () =>
      (displayAll ? amenitiesList : amenitiesList.slice(0, half)).map(
        (card, idx) => <AmenitiesCard key={idx} {...card} />
      ),
    [displayAll, half]
  );

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Comodidades do Hotel</h2>
          <p className={styles.paragraph}>
            Desfrute das nossas instalações premium concebidas para melhorar a
            sua estadia e proporcionar o máximo conforto.
          </p>
        </div>
        <motion.div
          className={styles.grid}
          variants={fade.container}
          initial="hidden"
          animate={ inView ? "show" : "hidden"}
        >
          {cardElements}
        </motion.div>
        <span className={styles.buttonWrapper}>
          {!displayAll ? (
            <Button
              label="Ver mais"
              variant="primary"
              onClick={() => setShowAll(true)}
            />
          ) : (
            !isDesktop && (
              <Button
                label="Ver menos"
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
