import {
  AspectRatio as AspectRatioIcon,
  Bed as BedIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import { Rating } from "@mui/material";
import { Button } from "@shared";
import { RoomsCardStyles as styles } from "./RoomsCard.style";
import type { Room } from "../types";
import { useTranslation } from "react-i18next";

type RoomsCardProps = {
  room: Room;
  labelButton: string;
  onClick?: () => void;
};

function RoomsCard({ room, labelButton, onClick }: RoomsCardProps) {
  const { title, thumb, value, bed, people, meters, ratings } = room;
  const { t } = useTranslation();

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={thumb}
          alt={title}
          className={styles.image}
          width={400}
          height={250}
          loading="lazy"
          decoding="async"
        />

        <span className={styles.priceTag}>
          <p>
            R${value}
            <span className="font-normal">{t("roomCard.night")}</span>
          </p>
        </span>
      </div>

      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{t(`rooms_data.${room.id}.title`)}</h3>

        <span className={styles.ratingWrapper}>
          <Rating
            name="rating"
            value={ratings.average}
            precision={0.5}
            readOnly
            size="small"
          />
        </span>

        <div className={styles.featuresWrapper}>
          <span className={styles.featureItem}>
            <BedIcon />
            <p>
              {bed.amount} {bed.type}
            </p>
          </span>
          <span className={styles.featureItem}>
            <PeopleIcon />
            <p>{people}</p>
          </span>
          <span className={styles.featureItem}>
            <AspectRatioIcon />
            <p>{meters} m²</p>
          </span>
        </div>

        <span className={styles.buttonWrapper}>
          <Button
            label={labelButton}
            variant="primary"
            onClick={onClick}
            size="width_full"
          />
        </span>
      </div>
    </div>
  );
}

export default RoomsCard;
