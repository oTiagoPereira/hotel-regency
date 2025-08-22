import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterRooms from "../FilterRooms";
import RoomsCard from "../RoomsCard";
import { RoomsSectionStyles as Styles } from "./RoomsSection.style";
import roomsData from "./../../data/rooms.json";

function RoomSection() {
  const startingItems = 8;
  const itemsLoad = 4;

  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState<number>(startingItems);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsLoad);
  };

  return (
    <section className={Styles.section}>
      <h1 className={Styles.heading}>Nossos Quartos</h1>
      <p className={Styles.subheading}>
        Descubra o conforto e a elegância dos nossos quartos cuidadosamente
        projetados
      </p>

      <div className={Styles.mainWrapper}>
        <div className={Styles.filterWrapper}>
          <FilterRooms />
        </div>

        <div className={Styles.gridWrapper}>
          {roomsData.slice(0, visibleItems).map((card) => (
            <RoomsCard
              key={card.id}
              {...card}
              bed={card.bed.amount}
              people={card.people}
              thumb={card.thumb}
              ratings={card.ratings.average}
              labelButton="Ver Detalhes"
              onClick={() => {
                navigate(`/accommodation/${card.id}`);
              }}
            />
          ))}
          {visibleItems < roomsData.length && (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button onClick={loadMoreItems}>Carregar Mais</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default RoomSection;
