import { Star } from "@mui/icons-material";
import { ReviewsStyles as styles } from "./Reviews.style";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      user: "Laura Oliveira",
      date: "2 dias atrás",
      rating: 5,
      text: "Serviço impecável e quartos muito confortáveis! Com certeza voltarei.",
      avatar: "https://ui-avatars.com/api/?name=Laura+Oliveira",
    },
    {
      id: 2,
      user: "Marcos Pereira",
      date: "5 dias atrás",
      rating: 4,
      text: "Localização perfeita e café da manhã delicioso. O único ponto negativo foi o check-in demorado.",
      avatar: "https://ui-avatars.com/api/?name=Marcos+Pereira",
    },
    {
      id: 3,
      user: "Julia Silva",
      date: "1 semana atrás",
      rating: 5,
      text: "Amei a experiência, o SPA é incrível.",
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
