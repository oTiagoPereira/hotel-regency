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
import { useState } from "react";
import Button from "../Button";
import { amenitiesStyle as styles } from "./Amenities.style";
import { useMediaQuery } from "@mui/material";

type AmenitiesCardProps = {
  title: string;
  description: string;
  Icon: SvgIconComponent;
};

const AmenitiesCard = ({ title, description, Icon }: AmenitiesCardProps) => {
  return (
    <div className={styles.card}>
      <span className={styles.iconWrapper}>
        <Icon />
      </span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

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
    Icon: ForkLeft,
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

  const cardElements = displayAll
    ? amenitiesList.map((card, idx) => <AmenitiesCard key={idx} {...card} />)
    : amenitiesList
        .slice(0, half)
        .map((card, idx) => <AmenitiesCard key={idx} {...card} />);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Comodidades do Hotel</h2>
          <p className={styles.paragraph}>
            Desfrute das nossas instalações premium concebidas para melhorar a
            sua estadia e proporcionar o máximo conforto.
          </p>
        </div>
        <div className={styles.grid}>{cardElements}</div>
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
