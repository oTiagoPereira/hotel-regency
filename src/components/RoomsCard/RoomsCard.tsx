import { AspectRatio, Bed, People } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { Button } from "../index";
import { RoomsCardStyles as styles } from "./RoomsCard.style";

type RoomsCardProps = {
  id: number;
  title: string;
  thumb: string | undefined;
  value: number;
  bed: number;
  people: number;
  meters: number;
  labelButton: string;
  ratings: number;
  onClick?: () => void;
};

function RoomsCard({
  title,
  thumb,
  value,
  bed,
  people,
  meters,
  labelButton,
  ratings,
  onClick
}: RoomsCardProps) {
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
            <span className="font-normal">/Noite</span>
          </p>
        </span>
      </div>

      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>

        <span className={styles.ratingWrapper}>
          <Rating name="rating" value={ratings} precision={0.5} readOnly size="small"/>
        </span>

        <div className={styles.featuresWrapper}>
          <span className={styles.featureItem}>
            <Bed />
            <p>{bed}</p>
          </span>
          <span className={styles.featureItem}>
            <People />
            <p>{people}</p>
          </span>
          <span className={styles.featureItem}>
            <AspectRatio />
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
