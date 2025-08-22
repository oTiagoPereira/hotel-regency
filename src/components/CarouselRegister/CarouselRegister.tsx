import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { CarouselRegisterStyles as styles } from "./CarouselRegister.style";

type SlideItem = {
  src: string;
  alt?: string;
  text?: string;
}

type CarouselProps = {
  showOnMobile?: boolean;
  slides: SlideItem[];
}

function CarouselRegister({ slides, showOnMobile = false }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  useEffect(() => {
    if (slides.length === 0) return;

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => resetTimeout();
  }, [current, slides.length]);

  function prevSlide() {
    if (slides.length === 0) return;
    resetTimeout();
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  function nextSlide() {
    if (slides.length === 0) return;
    resetTimeout();
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className={`
      ${styles.base} 
      ${!showOnMobile ? styles.desktopOnly : ''}
    `}>
      <span className={styles.gradientOverlay}></span>

      <img
        src={slides[current].src}
        alt={slides[current].alt || 'Imagem do carrossel'}
        className={styles.image}
        loading="lazy"
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