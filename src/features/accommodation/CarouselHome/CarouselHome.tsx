import { useRef, useState, useEffect, type ReactNode } from "react";
import { CarouselStyles as styles } from "./CarouselHome.style";

type CarouselProps = {
  items: ReactNode[];
  showDots?: boolean;
  desktopGridCols?: string;
  sectionClassName?: string;
  gridWrapperClassName?: string;
};

export default function Carousel({
  items,
  showDots = true,
  desktopGridCols = "md:grid-cols-3",
  sectionClassName = "",
  gridWrapperClassName = "",
}: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(idx);
  };

  const scrollToIndex = (idx: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    carouselRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll, { passive: true });
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={`${styles.container} ${sectionClassName}`}>
      <div className={styles.mobileWrapper}>
        <div
          ref={carouselRef}
          className={styles.mobileCarousel}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} className={styles.mobileCard}>
              {item}
            </div>
          ))}
        </div>

        {showDots && (
          <div className={styles.dotsWrapper}>
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dotBase} ${
                  activeIndex === idx ? "bg-primary" : "bg-gray-400"
                }`}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Ir para o item ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div
        className={`${styles.desktopWrapperBase} ${desktopGridCols} ${gridWrapperClassName}`}
      >
        {items.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
}
