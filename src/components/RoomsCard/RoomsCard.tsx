import { AspectRatio, Bed, People } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { Button } from "../index";
import { RoomsCardStyles as styles } from "./RoomsCard.style";

type RoomsCardProps = {
  title: string;
  image: string;
  value: string;
  bed: number;
  people: number;
  meters: number;
};

function RoomsCard({
  title,
  image,
  value,
  bed,
  people,
  meters,
}: RoomsCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
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
          <Rating name="rating" value={4.3} precision={0.5} readOnly />
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
            label="Reservar"
            variant="primary"
            onClick={() => alert(`Reservando ${title}`)}
            size="width_full"
          />
        </span>
      </div>
    </div>
  );
}

export default RoomsCard;
