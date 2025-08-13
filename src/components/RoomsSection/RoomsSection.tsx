import FilterRooms from "../FilterRooms";
import RoomsCard from "../RoomsCard";
import { RoomsSectionStyles as Styles } from "./RoomsSection.style"

function RoomSection() {
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
          <RoomsCard
            title="Quarto Duplo"
            bed={1}
            meters={30}
            people={2}
            value="500,00"
            key={1}
            image="https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg"
          />
          <RoomsCard
            title="Quarto Duplo"
            bed={2}
            meters={30}
            people={4}
            value="500,00"
            key={2}
            image="https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg"
          />
          <RoomsCard
            title="Quarto Duplo"
            bed={2}
            meters={30}
            people={4}
            value="500,00"
            key={3}
            image="https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg"
          />
          <RoomsCard
            title="Quarto Duplo"
            bed={2}
            meters={30}
            people={4}
            value="500,00"
            key={4}
            image="https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg"
          />
          <RoomsCard
            title="Quarto Duplo"
            bed={2}
            meters={30}
            people={4}
            value="500,00"
            key={5}
            image="https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg"
          />
          <RoomsCard
            title="Quarto Duplo"
            bed={2}
            meters={30}
            people={4}
            value="500,00"
            key={6}
            image="https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default RoomSection;
