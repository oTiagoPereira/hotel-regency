import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { AspectRatio, Bed, People } from "@mui/icons-material";
import roomsData from "@features/accommodation/data/rooms.json";
import { motion } from "framer-motion";
import { CarouselRegister } from "@features/auth";
import { AmenityIcon } from "@shared";
import { ReservationSummary } from "@features/booking";
import RoomRecommendation from "../RoomRecommendation";
import { RoomDescriptionStyle as Styles } from "./RoomDescription.style";
import RoomNotFound from "../RoomNotFound";
import { useIsVisible } from "@shared";
import { fadeInStagger } from "@shared/animations/fadeInStagger";
import { useTranslation } from "react-i18next";

function RoomDescription() {
  const fade = fadeInStagger();
  const { ref, inView } = useIsVisible();
  const { id } = useParams<{ id: string }>();
  const room = roomsData.find((q) => q.id === Number(id));
  const { t } = useTranslation();

  if (!room) {
    return <RoomNotFound />;
  }

  const carouselSlidesFromGallery = room.gallery.map((imageUrl) => ({
    src: imageUrl,
    alt: `Imagem do quarto ${room.title}`,
    text: "",
  }));

  return (
    <section ref={ref} className={Styles.mainSection}>
      <motion.div
        variants={fade.container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={Styles.carouselWrapper}
      >
        <CarouselRegister
          slides={carouselSlidesFromGallery}
          showOnMobile={true}
        />
      </motion.div>

      <motion.div
        variants={fade.item}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={Styles.contentWrapper}
      >
        <div className={Styles.detailsColumn}>
          <div className={Styles.titleSection}>
            <h1 className={Styles.mainHeading}>{t(`rooms_data.${room.id}.title`)}</h1>
            <span className={Styles.ratingWrapper}>
              <Rating
                value={room.ratings.average}
                precision={0.5}
                readOnly
                size="small"
              />
              <p className={Styles.ratingValue}>{room.ratings.average}/5</p>
              <p className={Styles.ratingCount}>
                ({room.ratings.count} {t("roomDetails.reviews")})
              </p>
            </span>
          </div>

          <div className={Styles.infoCardsWrapper}>
            <span className={Styles.infoCard}>
              <Bed />
              <p className={Styles.infoCardText}>
                {room.bed.amount}{" "}
                {room.bed.amount > 1
                  ? t("roomDetails.beds_plural")
                  : t("roomDetails.beds")}{" "}
                {room.bed.type}
              </p>
            </span>
            <span className={Styles.infoCard}>
              <People />
              <p className={Styles.infoCardText}>
                {room.people} {t("roomDetails.guests")}
              </p>
            </span>
            <span className={Styles.infoCard}>
              <AspectRatio />
              <p className={Styles.infoCardText}>{room.meters} m²</p>
            </span>
          </div>

          <div className={Styles.subsection}>
            <h1 className={Styles.subheading}>
              {t("roomDetails.description")}
            </h1>
            <p className={Styles.descriptionText}>{t(`rooms_data.${room.id}.description`)}</p>
          </div>

          <div className={Styles.subsection}>
            <h1 className={Styles.subheading}>{t("roomDetails.amenities")}</h1>
            <ul className={Styles.amenitiesList}>
              {room.amenities.map((amenity) => (
                <li key={amenity.key} className={Styles.amenityItem}>
                  <AmenityIcon
                    iconKey={amenity.key}
                    className={Styles.amenityIcon}
                  />
                  <span className={Styles.amenityText}>{t(`rooms_data.${room.id}.amenities.${amenity.key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={Styles.subsection}>
            <h1 className={Styles.subheading}>
              {t("roomDetails.rules.title")}
            </h1>
            <div className={Styles.rulesWrapper}>
              <span className={Styles.rulesColumn}>
                <h2 className={Styles.rulesTitle}>
                  {t("roomDetails.rules.schedules")}
                </h2>
                <p className={Styles.rulesText}>
                  {t("roomDetails.rules.checkin")}:{" "}
                  <span className={Styles.rulesHighlight}>14:00</span>
                </p>
                <p className={Styles.rulesText}>
                  {t("roomDetails.rules.checkout")}:{" "}
                  <span className={Styles.rulesHighlight}>11:00</span>
                </p>
              </span>
              <span className={Styles.rulesColumn}>
                <h2 className={Styles.rulesTitle}>
                  {t("roomDetails.rules.childrenPolicy.title")}
                </h2>
                <p className={Styles.rulesText}>
                  {t("roomDetails.rules.childrenPolicy.text")}
                </p>
              </span>
            </div>
          </div>
        </div>

        <ReservationSummary
          room={{
            id: room.id,
            title: room.title,
            value: room.value,
            Offer: room.Offer,
          }}
        />
      </motion.div>
      <RoomRecommendation currentRoomId={room.id} />
    </section>
  );
}

export default RoomDescription;
