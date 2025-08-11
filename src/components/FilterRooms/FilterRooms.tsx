import { useState, useMemo, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import Button from "../Button";
import { Close, FilterAlt, RestartAlt } from "@mui/icons-material";

type RoomType = "Standard" | "Deluxe" | "Suite" | "Familiar";

const MIN = 0;
const MAX = 2000;
const STEP = 10;

const DEFAULT_ROOM_TYPES: RoomType[] = [];
const DEFAULT_CAPACITIES: number[] = [];
const DEFAULT_PRICE_RANGE: [number, number] = [350, 800];

function FilterRooms() {
  const [roomTypes, setRoomTypes] = useState<RoomType[]>(DEFAULT_ROOM_TYPES);
  const [capacities, setCapacities] = useState<number[]>(DEFAULT_CAPACITIES);
  const [priceRange, setPriceRange] =
    useState<[number, number]>(DEFAULT_PRICE_RANGE);
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = <T,>(
    setter: React.Dispatch<React.SetStateAction<T[]>>,
    value: T
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      roomTypes,
      capacities,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);


  const handleReset = () => {
    setRoomTypes(DEFAULT_ROOM_TYPES);
    setCapacities(DEFAULT_CAPACITIES);
    setPriceRange(DEFAULT_PRICE_RANGE);
  };

  const hasChanges = useMemo(() => {
    const roomTypesChanged =
      roomTypes.length !== DEFAULT_ROOM_TYPES.length ||
      roomTypes.some((t) => !DEFAULT_ROOM_TYPES.includes(t));

    const capacitiesChanged =
      capacities.length !== DEFAULT_CAPACITIES.length ||
      capacities.some((c) => !DEFAULT_CAPACITIES.includes(c));

    const priceChanged =
      priceRange[0] !== DEFAULT_PRICE_RANGE[0] ||
      priceRange[1] !== DEFAULT_PRICE_RANGE[1];

    return roomTypesChanged || capacitiesChanged || priceChanged;
  }, [roomTypes, capacities, priceRange]);

  return (
    <>
      <div className="md:hidden p-4 text-end">
        <button
          className="bg-primary text-text-neutral px-3 py-1 rounded-md hover:bg-primary-hover cursor-pointer font-semibold"
          onClick={() => setOpen(true)}
        >
          Filtros{"  "}
          <FilterAlt />
        </button>
      </div>

      {/* Container do filtro mobile */}
      <div
        className={`fixed inset-0 bg-transparent bg-opacity-50 z-10 transform transition-transform duration-300 ease-out md:static md:bg-transparent md:z-auto ${
          open ? "translate-y-0" : "translate-y-full"
        } md:translate-y-0`}
      >
        <aside className="bg-white w-full h-full md:h-auto md:max-w-xl md:w-full md:rounded-md shadow-md mx-auto py-5 px-5 text-gray-800 overflow-y-auto">
          <div className="flex justify-start items-center mb-4 md:hidden relative">
            {hasChanges && (
              <button
                className="bg-primary text-text-neutral px-3 py-1 rounded-md hover:bg-primary-hover cursor-pointer font-semibold fixed top-4 left-4 z-50 min-w-[80px] text-center"
                onClick={handleReset}
              >
                Resetar{"  "}
                <RestartAlt />
              </button>
            )}
            <button
              onClick={() => setOpen(false)}
              className="bg-primary text-text-neutral px-3 py-1 rounded-md hover:bg-primary-hover cursor-pointer font-semibold fixed top-4 right-4 z-50 min-w-[80px] text-center"
            >
              Fechar{"  "}
              <Close />
            </button>
          </div>

          <div className="hidden md:flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Filtros</h1>
            {hasChanges && (
              <button
                className="bg-primary text-text-neutral px-3 py-1 rounded-md hover:bg-primary-hover cursor-pointer font-semibold"
                onClick={handleReset}
              >
                Resetar{"  "}
                <RestartAlt />
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-12">
            <div>
              <label className="font-medium block mb-2">Tipos de Quarto</label>
              <div className="flex flex-col gap-1">
                {(
                  ["Standard", "Deluxe", "Suite", "Familiar"] as RoomType[]
                ).map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={roomTypes.includes(type)}
                      onChange={() => handleCheckboxChange(setRoomTypes, type)}
                      className="accent-primary"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="font-medium block mb-2">
                Capacidade de Hóspedes
              </label>
              <div className="flex flex-col gap-1">
                {[1, 2, 3, 4].map((cap) => (
                  <label key={cap} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={capacities.includes(cap)}
                      onChange={() => handleCheckboxChange(setCapacities, cap)}
                      className="accent-primary"
                    />
                    {cap} {cap > 1 ? "Pessoas" : "Pessoa"}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="font-medium block mb-4">Faixa de Preço</label>
              <div className="px-2">
                <Range
                  values={priceRange}
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  onChange={(values) => setPriceRange([values[0], values[1]])}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        width: "100%",
                        background: getTrackBackground({
                          values: priceRange,
                          colors: ["#ccc", "#2f4f4f", "#ccc"],
                          min: MIN,
                          max: MAX,
                        }),
                        borderRadius: "4px",
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#2f4f4f",
                      }}
                    />
                  )}
                />
                <div className="flex justify-between mt-3">
                  <div>
                    <p className="text-sm text-gray-500">Mínimo</p>
                    <span className="font-medium">R$ {priceRange[0]},00</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Máximo</p>
                    <span className="font-medium">R$ {priceRange[1]},00</span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              label="Aplicar Filtros"
              size="width_full"
              variant="primary"
            />
          </form>
        </aside>
      </div>
    </>
  );
}

export default FilterRooms;
