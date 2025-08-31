
import { useState, useMemo, useEffect, useRef } from "react";
import { Range } from "react-range";
import Button from "../Button";
import { Close, FilterAlt, RestartAlt } from "@mui/icons-material";
import { FilterRoomsStyles } from "./FilterRooms.style";
import { format } from "date-fns";
import { getTrackBackground } from "react-range";
import type { DateRange } from "react-day-picker";
import DatePicker from "../CheckBox/dayPicker";

type RoomType = "Standard" | "Deluxe" | "Suite" | "Familiar";

const MIN = 0;
const MAX = 2000;
const STEP = 10;

const DEFAULT_ROOM_TYPES: RoomType[] = [];
const DEFAULT_CAPACITIES: number[] = [];
const DEFAULT_BED_COUNTS: number[] = [];
const DEFAULT_PRICE_RANGE: [number, number] = [350, 800];
const DEFAULT_DATE_RANGE: DateRange | undefined = undefined;

function FilterRooms() {
  const [roomTypes, setRoomTypes] = useState<RoomType[]>(DEFAULT_ROOM_TYPES);
  const [capacities, setCapacities] = useState<number[]>(DEFAULT_CAPACITIES);
  const [bedCounts, setBedCounts] = useState<number[]>(DEFAULT_BED_COUNTS);
  const [priceRange, setPriceRange] = useState<[number, number]>(
    DEFAULT_PRICE_RANGE
  );
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    DEFAULT_DATE_RANGE
  );
  const [openPicker, setOpenPicker] = useState<"checkin" | "checkout" | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const checkinRef = useRef<HTMLDivElement>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const datePickerWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openPicker) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        !(
          checkinRef.current &&
          checkinRef.current.contains(event.target as Node)
        ) &&
        !(
          checkoutRef.current &&
          checkoutRef.current.contains(event.target as Node)
        )
      ) {
        setOpenPicker(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openPicker]);

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
      dateRange,
      roomTypes,
      capacities,
      bedCounts,
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
    setBedCounts(DEFAULT_BED_COUNTS);
    setPriceRange(DEFAULT_PRICE_RANGE);
    setDateRange(DEFAULT_DATE_RANGE);
  };

  const handleDateSelect = (range: DateRange | undefined) => {
    if (!range) {
      setDateRange(undefined);
      return;
    }

    if (openPicker === "checkin") {
      if (
        range.from &&
        range.from < new Date(new Date().setHours(0, 0, 0, 0))
      ) {
        return;
      }

      if (range.from) {
        let newToDate = dateRange?.to;

        if (!newToDate || newToDate <= range.from) {
          newToDate = new Date(range.from);
          newToDate.setDate(newToDate.getDate() + 1);
        }

        setDateRange({ from: range.from, to: newToDate });
        setOpenPicker("checkout");
      } else {
        setDateRange(undefined);
      }
    } else if (openPicker === "checkout") {
      if (range.to && dateRange?.from && range.to <= dateRange.from) {
        return;
      }

      setDateRange(range);

      if (range.to) {
        setOpenPicker(null);
      }
    }
  };

  const handleOpenPicker = (field: "checkin" | "checkout") => {
    if (openPicker === field) {
      setOpenPicker(null);
      return;
    }

    if (field === "checkout" && !dateRange?.from) {
      setOpenPicker("checkin");
      return;
    }

    setOpenPicker(field);
  };

  const disabledCheckinDates = {
    before: new Date(new Date().setHours(0, 0, 0, 0)),
  };

  const disabledCheckoutDates = dateRange?.from
    ? {
        before: new Date(
          new Date(dateRange.from).setDate(dateRange.from.getDate() + 1)
        ),
      }
    : { before: new Date(new Date().setHours(0, 0, 0, 0)) };

  const hasChanges = useMemo(() => {
    const roomTypesChanged =
      roomTypes.length !== DEFAULT_ROOM_TYPES.length ||
      roomTypes.some((t) => !DEFAULT_ROOM_TYPES.includes(t));

    const capacitiesChanged =
      capacities.length !== DEFAULT_CAPACITIES.length ||
      capacities.some((c) => !DEFAULT_CAPACITIES.includes(c));

    const bedCountsChanged =
      bedCounts.length !== DEFAULT_BED_COUNTS.length ||
      bedCounts.some((b) => !DEFAULT_BED_COUNTS.includes(b));

    const priceChanged =
      priceRange[0] !== DEFAULT_PRICE_RANGE[0] ||
      priceRange[1] !== DEFAULT_PRICE_RANGE[1];

    const datesChanged = dateRange !== DEFAULT_DATE_RANGE;

    return (
      roomTypesChanged ||
      capacitiesChanged ||
      bedCountsChanged ||
      priceChanged ||
      datesChanged
    );
  }, [roomTypes, capacities, bedCounts, priceRange, dateRange]);

  const datePickerTopOffset = datePickerWrapperRef.current?.offsetTop ?? 0;

  return (
    <>
      <div className={FilterRoomsStyles.filterOpenButtonWrapper}>
        <button
          className={FilterRoomsStyles.buttonPrimary}
          onClick={() => setOpen(true)}
        >
          Filtros <FilterAlt />
        </button>
      </div>

      <div className={FilterRoomsStyles.mobileFilterContainer(open)}>
        <aside className={FilterRoomsStyles.asideContainer}>
          <div className={FilterRoomsStyles.headerMobile}>
            {hasChanges && (
              <button
                className={FilterRoomsStyles.resetButtonMobile}
                onClick={handleReset}
              >
                Resetar <RestartAlt />
              </button>
            )}
            <button
              onClick={() => setOpen(false)}
              className={FilterRoomsStyles.closeButtonMobile}
            >
              Fechar <Close />
            </button>
          </div>

          <div className={FilterRoomsStyles.headerDesktop}>
            <h1 className={FilterRoomsStyles.headerTitle}>Filtros</h1>
            {hasChanges && (
              <button
                className={FilterRoomsStyles.buttonPrimary}
                onClick={handleReset}
              >
                Resetar <RestartAlt />
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className={FilterRoomsStyles.form}>
            <div>
              <label className={FilterRoomsStyles.label}>Datas da Estadia</label>
              <div ref={datePickerWrapperRef} className={FilterRoomsStyles.datePickerWrapper}>
                <div
                  className={FilterRoomsStyles.dateDisplayBox}
                  onClick={() => handleOpenPicker("checkin")}
                  ref={checkinRef}
                >
                  {dateRange?.from
                    ? format(dateRange.from, "dd/MM/yyyy")
                    : "Check-in"}
                </div>
                <div
                  className={FilterRoomsStyles.dateDisplayBox}
                  onClick={() => handleOpenPicker("checkout")}
                  ref={checkoutRef}
                >
                  {dateRange?.to
                    ? format(dateRange.to, "dd/MM/yyyy")
                    : "Check-out"}
                </div>
              </div>
            </div>
            
            <div>
              <label className={FilterRoomsStyles.label}>Tipos de Quarto</label>
              <div className={FilterRoomsStyles.checkboxContainer}>
                {(["Standard", "Deluxe", "Suite", "Familiar"] as RoomType[]).map(
                  (type) => (
                    <label
                      key={type}
                      className={FilterRoomsStyles.checkboxLabel}
                    >
                      <input
                        type="checkbox"
                        checked={roomTypes.includes(type)}
                        onChange={() => handleCheckboxChange(setRoomTypes, type)}
                        className={FilterRoomsStyles.checkboxInput}
                      />
                      {type}
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label className={FilterRoomsStyles.label}>
                Hóspedes por Quarto
              </label>
              <div className={FilterRoomsStyles.checkboxContainer}>
                {[1, 2, 3, 4].map((cap) => (
                  <label key={cap} className={FilterRoomsStyles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={capacities.includes(cap)}
                      onChange={() => handleCheckboxChange(setCapacities, cap)}
                      className={FilterRoomsStyles.checkboxInput}
                    />
                    {cap} {cap > 1 ? "Pessoas" : "Pessoa"}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className={FilterRoomsStyles.label}>
                Quantidade de Camas
              </label>
              <div className={FilterRoomsStyles.checkboxContainer}>
                {[1, 2, 3, 4].map((beds) => (
                  <label key={beds} className={FilterRoomsStyles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={bedCounts.includes(beds)}
                      onChange={() => handleCheckboxChange(setBedCounts, beds)}
                      className={FilterRoomsStyles.checkboxInput}
                    />
                    {beds} {beds > 1 ? "Camas" : "Cama"}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className={FilterRoomsStyles.priceRangeLabel}>
                Faixa de Preço
              </label>
              <div>
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
                <div className={FilterRoomsStyles.priceRangeValues}>
                  <div className={FilterRoomsStyles.priceBox}>
                    <p className={FilterRoomsStyles.priceLabelText}>Mínimo</p>
                    <span className={FilterRoomsStyles.priceValueText}>
                      R$ {priceRange[0]},00
                    </span>
                  </div>
                  <div className={FilterRoomsStyles.priceBox}>
                    <p className={FilterRoomsStyles.priceLabelText}>Máximo</p>
                    <span className={FilterRoomsStyles.priceValueText}>
                      R$ {priceRange[1]},00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div
              ref={calendarRef}
              className="absolute z-50"
              style={{ top: datePickerTopOffset + 50 }}
            >
              {openPicker === "checkin" && (
                <DatePicker
                  mode="range"
                  selected={dateRange}
                  onSelect={handleDateSelect}
                  disabled={disabledCheckinDates}
                />
              )}
              {openPicker === "checkout" && (
                <DatePicker
                  mode="range"
                  selected={dateRange}
                  onSelect={handleDateSelect}
                  disabled={disabledCheckoutDates}
                />
              )}
            </div>

          <div className="mt-4">
          <Button
              label="Aplicar Filtros"
              size="width_full"
              variant="primary"
              onClick={() => handleSubmit}
              />
          </div>
        </aside>
      </div>
    </>
  );
}

export default FilterRooms;
