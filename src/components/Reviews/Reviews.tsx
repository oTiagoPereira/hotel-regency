import { useTranslation } from "react-i18next";
import { Star } from "@mui/icons-material";
import { ReviewsStyles as styles } from "./Reviews.style";

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      user: "Laura Oliveira",
      date: `2 ${t("dashboard.reviews.dates.daysAgo")}`,
      rating: 5,
      text: t("dashboard.reviews.item1"),
      avatar: "https://ui-avatars.com/api/?name=Laura+Oliveira",
    },
    {
      id: 2,
      user: "Marcos Pereira",
      date: `5 ${t("dashboard.reviews.dates.daysAgo")}`,
      rating: 4,
      text: t("dashboard.reviews.item2"),
      avatar: "https://ui-avatars.com/api/?name=Marcos+Pereira",
    },
    {
      id: 3,
      user: "Julia Silva",
      date: t("dashboard.reviews.dates.weekAgo"),
      rating: 5,
      text: t("dashboard.reviews.item3"),
      avatar: "https://ui-avatars.com/api/?name=Julia+Silva",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.userInfo}>
                <img
                  src={review.avatar}
                  alt={review.user}
                  className={styles.avatar}
                />
                <div>
                  <p className={styles.userName}>{review.user}</p>
                  <p className={styles.date}>{review.date}</p>
                </div>
              </div>
              <div className={styles.starsContainer}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fontSize="small"
                    className={
                      i < review.rating
                        ? styles.starActive
                        : styles.starInactive
                    }
                  />
                ))}
              </div>
            </div>
            <p className={styles.comment}>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
