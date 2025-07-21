import type { JSX } from "@emotion/react/jsx-runtime";
import { Star, Restaurant, Spa } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import { whyRegencyStyles as styles } from "./WhyRegency.style";

type CardProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
};

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className={styles.card}>
      <span className={styles.cardIcon}>
        {icon}
      </span>
      <h3 className={styles.cardTitle}>
        {title}
      </h3>
      <p className={styles.cardDesc}>{description}</p>
    </div>
  );
};

const cards = [
  {
    title: "Localização Premium",
    description: "Situado com vistas deslumbrantes e fácil acesso às atrações locais e pontos de referência.",
    icon: <Star />,
  },
  {
    title: "Jantar gourmet",
    description: "Experiências culinárias requintadas com ingredientes locais preparados por chefs premiados",
    icon: <Restaurant />,
  },
  {
    title: "Spa de bem-estar",
    description: "Tratamentos de spa completos e programas de bem-estar que renovam corpo e mente",
    icon: <Spa />,
  },
];

function WhyRegency() {
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
      carousel.addEventListener('scroll', handleScroll, { passive: true });
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Por que escolher o Regency?
          </h2>
          <p className={styles.subtitle}>
            Experimente a combinação perfeita de luxo, conforto e serviço
            excepcional que nos diferencia.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className={styles.mobileCarouselWrapper}>
          <div
            ref={carouselRef}
            className={styles.mobileCarousel}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={styles.mobileCardWrapper}
              >
                <Card {...card} />
              </div>
            ))}
          </div>

          <div className={styles.dotsWrapper}>
            {cards.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${activeIndex === idx ? "bg-primary" : "bg-neutral"}`}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Ir para o card ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className={styles.desktopGrid}>
          {cards.map((card, idx) => (
            <div key={idx}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyRegency;
