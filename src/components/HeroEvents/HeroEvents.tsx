import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import ImgHeroBanner from "../../assets/images/img-hall-banner.webp";
import ImgBarAtrio from "../../assets/images/img-bar-atrio.webp";
import ImgJardimBeiraRio from "../../assets/images/img-Jardim-beira-rio.webp";
import { heroEventsStyles, sectionTitleStyles } from "./HeroEvents.style";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks/useIsVisible";
import { fadeInStagger } from "../../animations/fadeInStagger";

// NOTE: Imagens que serao substituidas
import ImgNoiteRitmo from "../../assets/images-fakes/img-noites-ritmo.png";
import ImgSaborEspumante from "../../assets/images-fakes/img-sabor-espumante.png";

// NOTE: Eventos fakes com imagens que serao substituidas
const eventsData = [
  {
    image: ImgNoiteRitmo,
    title: "Noites de Ritmo",
    day: "Sábado",
    data: "14/10/2025",
    time: "19h - 23h",
  },
  {
    image: ImgSaborEspumante,
    title: "Sabor de Espumante",
    day: "Sábado",
    data: "07/11/2025",
    time: "19h - 23h",
  },
];

// NOTE: Atividades fakes com imagens que serao substituidas
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Atividade 1",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Atividade 2",
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Atividade 3",
    className: "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1664790560123-c5f839457591?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Atividade 4",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1516600164266-f3b8166ae679?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Atividade 5",
    className: "col-span-1 row-span-1",
  },
];

interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  className = "",
}) => {
  const { ref, inView } = useIsVisible();
  const fade = fadeInStagger();

  return (
    <motion.span
      ref={ref}
      variants={fade.container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={`${sectionTitleStyles.container} ${className}`}
    >
      <motion.p variants={fade.item} className={sectionTitleStyles.subtitle}>
        {subtitle}
      </motion.p>
      <motion.h2 variants={fade.item} className={sectionTitleStyles.title}>
        {title}
      </motion.h2>
    </motion.span>
  );
};

function Events() {
  const { t } = useTranslation();
  const { ref: heroRef, inView: heroInView } = useIsVisible();
  const { ref: eventsRef, inView: eventsInView } = useIsVisible();
  const { ref: locationsRef, inView: locationsInView } = useIsVisible();
  const { ref: bookingRef, inView: bookingInView } = useIsVisible();
  const { ref: galleryRef, inView: galleryInView } = useIsVisible();

  const fade = fadeInStagger();

  return (
    <main className={heroEventsStyles.mainContainer}>
      <motion.section
        ref={heroRef}
        variants={fade.container}
        initial="hidden"
        animate={heroInView ? "show" : "hidden"}
        className={heroEventsStyles.heroSection}
        style={{ backgroundImage: `url(${ImgHeroBanner})` }}
      >
        <div className={heroEventsStyles.heroOverlay}></div>
        <motion.div variants={fade.item} className={heroEventsStyles.heroContent}>
          <h1 className={heroEventsStyles.heroTitle}>
            Eventos Extraordinários
          </h1>
          <p className={heroEventsStyles.heroSubtitle}>
            Junte-se a nós para eventos vibrantes e entretenimento ao vivo,
            fazendo com que todas as noites brilhem em nosso salão
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        ref={eventsRef}
        variants={fade.container}
        initial="hidden"
        animate={eventsInView ? "show" : "hidden"}
        className={heroEventsStyles.eventsSection}
      >
        <div className={heroEventsStyles.sectionContainer}>
          <SectionTitle subtitle="EVENTOS" title="Nossa Linha de Eventos" />
          <motion.div
            variants={fade.container}
            className={heroEventsStyles.eventsContainer}
          >
            {eventsData.map((event, index) => (
              <motion.div
                key={index}
                variants={fade.item}
                className={heroEventsStyles.eventCard}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className={heroEventsStyles.eventImage}
                />
                <div className={heroEventsStyles.eventDetails}>
                  <h3 className={heroEventsStyles.eventTitle}>
                    {event.title}
                  </h3>
                  <p className={heroEventsStyles.eventInfo}>
                    {event.day} {event.data}
                  </p>
                  <p className={heroEventsStyles.eventInfo}>{event.time}</p>
                </div>
                <div className={heroEventsStyles.eventButtonContainer}>
                  <Button label={t("events.bookNow", "Reserve Agora")} variant="secondary" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={locationsRef}
        variants={fade.container}
        initial="hidden"
        animate={locationsInView ? "show" : "hidden"}
        className={heroEventsStyles.locationsSection}
      >
        <SectionTitle
          subtitle="NOSSOS LOCAIS"
          title="Cenários Perfeitos para Seu Evento"
          className={heroEventsStyles.locationsTitle}
        />
        <motion.div
          variants={fade.container}
          className={heroEventsStyles.locationsContainer}
        >
          <motion.div variants={fade.item} className={heroEventsStyles.locationCard}>
            <div className={heroEventsStyles.locationImageContainer}>
              <img
                src={ImgJardimBeiraRio}
                alt="Jardim à Beira-Rio"
                className={heroEventsStyles.locationImage}
              />
            </div>
            <div className={heroEventsStyles.locationDetails}>
              <p className={heroEventsStyles.locationSubtitle}>Local</p>
              <h3 className={heroEventsStyles.locationTitle}>
                Jardim à Beira-Rio
              </h3>
              <p className={heroEventsStyles.locationDescription}>
                Um cenário ao ar livre de tirar o fôlego, perfeito para
                reuniões íntimas, coquetéis e jantares ao ar livre. Nosso jardim
                oferece um refúgio exuberante e verde com vistas deslumbrantes
                para o rio.
              </p>
              <div className={heroEventsStyles.locationButtonContainer}>
                <Button
                  label={t("events.bookNow", "Reservar Agora")}
                  variant="secondary"
                  type="button"
                  size="default"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fade.item}
            className={heroEventsStyles.locationCardReversed}
          >
            <div className={heroEventsStyles.locationImageContainer}>
              <img
                src={ImgBarAtrio}
                alt="Bar do Átrio"
                className={heroEventsStyles.locationImage}
              />
            </div>
            <div className={heroEventsStyles.locationDetails}>
              <p className={heroEventsStyles.locationSubtitle}>Local</p>
              <h3 className={heroEventsStyles.locationTitle}>Bar do Átrio</h3>
              <p className={heroEventsStyles.locationDescription}>
                Um espaço interior elegante com um toque clássico. O Bar do
                Átrio é ideal para celebrações sofisticadas e eventos
                corporativos, oferecendo um layout personalizável para atender
                às suas necessidades.
              </p>
              <div className={heroEventsStyles.locationButtonContainer}>
                <Button
                  label={t("events.bookNow", "Reservar Agora")}
                  variant="secondary"
                  type="button"
                  size="default"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={bookingRef}
        variants={fade.container}
        initial="hidden"
        animate={bookingInView ? "show" : "hidden"}
        className={heroEventsStyles.bookingSection}
      >
        <div className={heroEventsStyles.sectionContainer}>
          <SectionTitle
            subtitle="RESERVA"
            title="Reserve o Espaço para Seu Evento"
          />

          <motion.form
            variants={fade.item}
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={heroEventsStyles.bookingForm}
          >
            <div className={heroEventsStyles.formRow}>
              <div className={heroEventsStyles.formField}>
                <label className={heroEventsStyles.formLabel}>
                  Quantidade de Pessoas
                </label>
                <input
                  type="number"
                  name="people"
                  required
                  placeholder="Quantidade de Pessoas"
                  className={heroEventsStyles.formInput}
                />
              </div>

              <div className={heroEventsStyles.formField}>
                <label className={heroEventsStyles.formLabel}>Data</label>
                <input
                  type="date"
                  name="data"
                  required
                  className={heroEventsStyles.formInput}
                />
              </div>

              <div className={heroEventsStyles.formField}>
                <label className={heroEventsStyles.formLabel}>Hora</label>
                <input
                  type="time"
                  name="hora"
                  required
                  className={heroEventsStyles.formInput}
                />
              </div>

              <div className={heroEventsStyles.formField}>
                <label className={heroEventsStyles.formLabel}>Local</label>
                <select
                  name="local"
                  required
                  className={heroEventsStyles.formInput}
                >
                  <option value="">Selecione um local</option>
                  <option value="jardim">Jardim à Beira-Rio</option>
                  <option value="bar">Bar do Átrio</option>
                </select>
              </div>
            </div>

            <div className={heroEventsStyles.formButtonContainer}>
              <Button
                label={t("events.makeReservation", "Fazer Reserva")}
                variant="primary"
                type="submit"
                size="default"
              />
            </div>
          </motion.form>
        </div>
      </motion.section>

      <motion.section
        ref={galleryRef}
        variants={fade.container}
        initial="hidden"
        animate={galleryInView ? "show" : "hidden"}
        className={heroEventsStyles.gallerySection}
      >
        <div className={heroEventsStyles.sectionContainer}>
          <SectionTitle
            subtitle="GALERIA"
            title="Acompanhe Nossas Atividades"
          />
          <motion.div
            variants={fade.container}
            className={heroEventsStyles.galleryContainer}
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                variants={fade.item}
                className={img.className}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={heroEventsStyles.galleryImage}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

export default Events;
