import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterRooms from "../FilterRooms";
import RoomsCard from "../RoomsCard";
import { RoomsSectionStyles as Styles } from "./RoomsSection.style";
import roomsData from "./../../data/rooms.json";
import { useIsVisible } from "../../hooks/useIsVisible";
import { fadeInStagger } from "../../animations/fadeInStagger";
import { motion } from "framer-motion";
import Button from "../Button";
import { useTranslation } from "react-i18next";

function RoomSection() {
  const fade = fadeInStagger();
  const { ref, inView } = useIsVisible();
  const startingItems = 6;
  const itemsLoad = 4;
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState<number>(startingItems);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsLoad);
  };

  return (
    <section ref={ref} className={Styles.section}>
      <h1 className={Styles.heading}>{t("accommodation.title")}</h1>
      <p className={Styles.subheading}>{t("accommodation.subtitle")}</p>

      <div className={Styles.mainWrapper}>
        <motion.div
          variants={fade.item}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={Styles.filterWrapper}
        >
          <FilterRooms />
        </motion.div>

        <div className={Styles.boxRooms}>
          <motion.div
            variants={fade.item}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className={Styles.gridWrapper}
          >
            {roomsData.slice(0, visibleItems).map((card) => (
              <RoomsCard
                key={card.id}
                room={card}
                labelButton={t("accommodation.detailsButton")}
                onClick={() => {
                  navigate(`/accommodation/${card.id}`);
                }}
              />
            ))}
          </motion.div>
          {visibleItems < roomsData.length && (
            <div className={Styles.loadMore}>
              <Button
                label={t("accommodation.loadMore")}
                onClick={loadMoreItems}
                variant="secondary"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default RoomSection;
