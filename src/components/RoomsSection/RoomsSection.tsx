import FilterRooms from "../FilterRooms";
import RoomsCard from "../RoomsCard";

function RoomSection() {
  return (
    <section className="w-full max-w-7xl mx-auto my-16 flex flex-col px-4 sm:px-6 lg:px-8 text-text-color text-center md:text-start font-body">
      <h1 className="text-3xl font-bold mb-2 font-heading">Nossos Quartos</h1>
      <p className="mb-6">
        Descubra o conforto e a elegância dos nossos quartos cuidadosamente
        projetados
      </p>

      <div className="flex flex-col md:flex-row gap-2 justify-between w-full">
        <div className="w-full md:w-1/3 md:max-w-xs">
          <FilterRooms />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full md:w-2/3 mx-auto lg:mx-0 lg:items-start justify-items-center">
          <RoomsCard
            title="Quarto Duplo"
            bed={2}
            meters={30}
            people={4}
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
            key={1}
            image="https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg"
          />
          <RoomsCard
            title="Quarto Duplo"
            bed={2}
            meters={30}
            people={4}
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
            key={1}
            image="https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg"
          />
          <RoomsCard
            title="Quarto Duplo"
            bed={2}
            meters={30}
            people={4}
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
            key={1}
            image="https://coralplaza.com.br/wp-content/uploads/2018/07/194920-tipos-de-quarto-de-hotel-como-escolher-o-melhor-na-sua-hospedagem-1.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default RoomSection;
