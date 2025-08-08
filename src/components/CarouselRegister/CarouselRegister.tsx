import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import HotelFront from "../../assets/images/img-hotel-front.webp";
import HotelSnack from "../../assets/images/img-snack.webp";
import HotelParty from "../../assets/images/img-party.webp";
import { CarouselRegisterStyles as styles } from "./CarouselRegister.style";

const slides = [
  {
    src: HotelFront,
    text: "Descubra o conforto e a elegância do nosso hotel.",
  },
  {
    src: HotelSnack,
    text: "Sabores que combinam com o pôr do sol.",
  },
  {
    src: HotelParty,
    text: "Salão de festas elegante e espaçoso, com decoração sofisticada e iluminação acolhedora.",
  },
];

function CarouselRegister() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => resetTimeout();
  }, [current]);

  function prevSlide() {
    resetTimeout();
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  function nextSlide() {
    resetTimeout();
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  return (
    <div className={styles.container}>
      <span className={styles.gradientOverlay}></span>

      <img
        src={slides[current].src}
        alt={slides[current].text}
        className={styles.image}
      />

      <div className={styles.textWrapper}>
        <p className={styles.text}>{slides[current].text}</p>
      </div>

      <button
        onClick={prevSlide}
        className={`${styles.button} ${styles.leftButton}`}
        aria-label="Previous Slide"
      >
        <ChevronLeft className={styles.icon} />
      </button>

      <button
        onClick={nextSlide}
        className={`${styles.button} ${styles.rightButton}`}
        aria-label="Next Slide"
      >
        <ChevronRight className={styles.icon} />
      </button>
    </div>
  );
}

export default CarouselRegister;
