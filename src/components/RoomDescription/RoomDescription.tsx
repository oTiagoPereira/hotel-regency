import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { AspectRatio, Bed, People } from "@mui/icons-material";
import roomsData from "./../../data/rooms.json";

import CarouselRegister from "../CarouselRegister";
import { AmenityIcon } from "../Icons/AmenityIcon";
import ReservationSummary from "../ReservationSummary";
import RoomRecommendation from "../RoomRecommendation";
import { RoomDescriptionStyle as Styles } from "./RoomDescription.style"
import RoomNotFound from "../RoomNotFound";


function RoomDescription() {
  const { id } = useParams<{ id: string }>();
  const room = roomsData.find((q) => q.id === Number(id));

  if (!room) {
    return (
      <RoomNotFound />
    );
  }

  const carouselSlidesFromGallery = room.gallery.map((imageUrl) => ({
    src: imageUrl,
    alt: `Imagem do quarto ${room.title}`,
    text: "",
  }));

  return (
    <section className={Styles.mainSection}>
      <div className={Styles.carouselWrapper}>
        <CarouselRegister
          slides={carouselSlidesFromGallery}
          showOnMobile={true}
        />
      </div>

      <div className={Styles.contentWrapper}>
        <div className={Styles.detailsColumn}>
          <div className={Styles.titleSection}>
            <h1 className={Styles.mainHeading}>{room.title}</h1>
            <span className={Styles.ratingWrapper}>
              <Rating value={room.ratings.average} precision={0.5} readOnly size="small"/>
              <p className={Styles.ratingValue}>{room.ratings.average}/5</p>
              <p className={Styles.ratingCount}>({room.ratings.count} Avaliações)</p>
            </span>
          </div>

          <div className={Styles.infoCardsWrapper}>
            <span className={Styles.infoCard}>
              <Bed />
              <p className={Styles.infoCardText}>
                {room.bed.amount} {room.bed.amount > 1 ? "Camas" : "Cama"} {room.bed.type}
              </p>
            </span>
            <span className={Styles.infoCard}>
              <People />
              <p className={Styles.infoCardText}>{room.people} Hóspedes</p>
            </span>
            <span className={Styles.infoCard}>
              <AspectRatio />
              <p className={Styles.infoCardText}>{room.meters} m²</p>
            </span>
          </div>

          <div className={Styles.subsection}>
            <h1 className={Styles.subheading}>Descrição do Quarto</h1>
            <p className={Styles.descriptionText}>{room.description}</p>
          </div>

          <div className={Styles.subsection}>
            <h1 className={Styles.subheading}>Comodidades do quarto</h1>
            <ul className={Styles.amenitiesList}>
              {room.amenities.map((amenity) => (
                <li key={amenity.key} className={Styles.amenityItem}>
                  <AmenityIcon iconKey={amenity.key} className={Styles.amenityIcon} />
                  <span className={Styles.amenityText}>{amenity.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={Styles.subsection}>
            <h1 className={Styles.subheading}>Regras da Hospedagem</h1>
            <div className={Styles.rulesWrapper}>
              <span className={Styles.rulesColumn}>
                <h2 className={Styles.rulesTitle}>Horários</h2>
                <p className={Styles.rulesText}>Check-in: <span className={Styles.rulesHighlight}>14:00</span></p>
                <p className={Styles.rulesText}>Check-out: <span className={Styles.rulesHighlight}>11:00</span></p>
              </span>
              <span className={Styles.rulesColumn}>
                <h2 className={Styles.rulesTitle}>Política para Crianças</h2>
                <p className={Styles.rulesText}>
                  Crianças são bem-vindas. Uma criança de até 6 anos pode ficar gratuitamente quando usando a cama existente.
                </p>
              </span>
            </div>
          </div>
        </div>

        <ReservationSummary
          room={{ id: room.id, title: room.title, value: room.value, Offer: room.Offer }}
        />
      </div>
      <RoomRecommendation />
    </section>
  );
}

export default RoomDescription;
