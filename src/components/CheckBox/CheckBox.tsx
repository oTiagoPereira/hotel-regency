import { useState, useRef, useEffect } from "react";
import { Bed, CalendarMonth, People } from "@mui/icons-material";
import { checkBoxStyles as styles } from "./CheckBox.style";
import Button from "../Button";
import DatePicker from "./dayPicker";
import type { DateRange } from "react-day-picker";

function CheckBox() {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [openPicker, setOpenPicker] = useState<"checkin" | "checkout" | null>(null);
  const [showPeopleBox, setShowPeopleBox] = useState(false);
  const [showBedsBox, setShowBedsBox] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [beds, setBeds] = useState(1);

  const checkinRef = useRef<HTMLDivElement>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const peopleBoxRef = useRef<HTMLDivElement>(null);
  const bedsBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openPicker) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        !(checkinRef.current && checkinRef.current.contains(event.target as Node)) &&
        !(checkoutRef.current && checkoutRef.current.contains(event.target as Node))
      ) {
        setOpenPicker(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openPicker]);

  useEffect(() => {
    if (!showPeopleBox) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        peopleBoxRef.current &&
        !peopleBoxRef.current.contains(event.target as Node)
      ) {
        setShowPeopleBox(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPeopleBox]);

  useEffect(() => {
    if (!showBedsBox) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        bedsBoxRef.current &&
        !bedsBoxRef.current.contains(event.target as Node)
      ) {
        setShowBedsBox(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showBedsBox]);

  const canAddAdult = () => {
    if (adults < 4 && children === 0) return true;
    if (adults < 2 && children <= 2) return true;
    if (adults === 2 && children < 2) return true;
    return false;
  };
  const canAddChild = () => {
    if (adults === 2 && children < 2) return true;
    if (adults < 2 && children < 2) return true;
    return false;
  };
  const canRemoveAdult = () => adults > 1;
  const canRemoveChild = () => children > 0;

  const handleOpenBedsBox = () => {
    setShowBedsBox((v) => !v);
    setShowPeopleBox(false);
    setOpenPicker(null);
  };
  const handleOpenPeopleBox = () => {
    setShowPeopleBox((v) => !v);
    setShowBedsBox(false);
    setOpenPicker(null);
  };

  const handleDateSelect = (range: DateRange | undefined) => {
    if (!range) {
      setSelectedRange(undefined);
      return;
    }
  
    if (openPicker === 'checkin') {
      if (range.from && range.from < new Date(new Date().setHours(0, 0, 0, 0))) {
        return;
      }
  
      if (range.from) {
        let newToDate = selectedRange?.to;
  
        if (!newToDate || newToDate <= range.from) {
          newToDate = new Date(range.from);
          newToDate.setDate(newToDate.getDate() + 1);
        }
        
        setSelectedRange({ from: range.from, to: newToDate });
        setOpenPicker('checkout');
      } else {
        setSelectedRange(undefined);
      }
    } else if (openPicker === 'checkout') {
      if (range.to && selectedRange?.from && range.to <= selectedRange.from) {
        return;
      }
      
      setSelectedRange(range);
      
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
    
    if (field === "checkout" && !selectedRange?.from) {
      setOpenPicker("checkin");
      return;
    }
  
    setOpenPicker(field);
    setShowPeopleBox(false);
    setShowBedsBox(false);
  };

  const disabledCheckinDates = {
    before: new Date(new Date().setHours(0, 0, 0, 0))
  };

  const disabledCheckoutDates = selectedRange?.from
    ? { before: new Date(new Date(selectedRange.from).setDate(selectedRange.from.getDate() + 1)) }
    : { before: new Date(new Date().setHours(0, 0, 0, 0)) };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>

        <div className="relative">
          <div
            className={styles.itemWrapper}
            onClick={() => handleOpenPicker("checkin")}
            ref={checkinRef}
          >
            <span>
              <CalendarMonth className={styles.iconClass} />
            </span>
            <div className={styles.textWrapper}>
              <span className="font-semibold">Check-In</span>
              <span>
                {selectedRange?.from
                  ? selectedRange.from.toLocaleDateString()
                  : "Selecione"}
              </span>
            </div>
          </div>
          {openPicker === "checkin" && (
            <div
              ref={calendarRef}
              className="absolute left-0 mt-2 z-50"
            >
              <DatePicker
                mode="range"
                selected={selectedRange}
                onSelect={handleDateSelect}
                disabled={disabledCheckinDates}
              />
            </div>
          )}
        </div>

        <span className={styles.divider}></span>

        <div className="relative">
          <div
            className={styles.itemWrapper}
            onClick={() => handleOpenPicker("checkout")}
            ref={checkoutRef}
          >
            <span>
              <CalendarMonth className={styles.iconClass} />
            </span>
            <div className={styles.textWrapper}>
              <span className="font-semibold">Check-Out</span>
              <span>
                {selectedRange?.to
                  ? selectedRange.to.toLocaleDateString()
                  : "Selecione"}
              </span>
            </div>
          </div>
          {openPicker === "checkout" && (
            <div
              ref={calendarRef}
              className="absolute left-0 mt-2 z-50"
            >
              <DatePicker
                mode="range"
                selected={selectedRange}
                onSelect={handleDateSelect}
                disabled={disabledCheckoutDates}
              />
            </div>
          )}
        </div>

        <span className={styles.divider}></span>

        <div className="relative">
          <div
            className={styles.itemWrapper}
            onClick={handleOpenBedsBox}
          >
            <span>
              <Bed className={styles.iconClass} />
            </span>
            <span className="text-text-neutral ml-2">{beds} Cama{beds > 1 ? "s" : ""}</span>
          </div>
          {showBedsBox && (
            <div
              ref={bedsBoxRef}
              className={styles.boxPopup}
            >
              <div className={styles.boxRow}>
                <span>Camas</span>
                <div className={styles.boxCounter}>
                  <button
                    className={styles.boxButton}
                    onClick={() => setBeds((b) => Math.max(1, b - 1))}
                    disabled={beds <= 1}
                  >-</button>
                  <span>{beds}</span>
                  <button
                    className={styles.boxButton}
                    onClick={() => setBeds((b) => Math.min(4, b + 1))}
                    disabled={beds >= 4}
                  >+</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <span className={styles.divider}></span>

        <div className="relative">
          <div
            className={styles.itemWrapper}
            onClick={handleOpenPeopleBox}
          >
            <span>
              <People className={styles.iconClass} />
            </span>
            <span className="text-text-neutral ml-2">
              {adults} Adulto{adults > 1 ? "s" : ""} e {children} Criança{children !== 1 ? "s" : ""}
            </span>
          </div>
          {showPeopleBox && (
            <div
              ref={peopleBoxRef}
              className={styles.boxPopup}
            >
              <div className={styles.boxRow}>
                <span>Adultos</span>
                <div className={styles.boxCounter}>
                  <button
                    className={styles.boxButton}
                    onClick={() => setAdults((a) => Math.max(1, a - 1))}
                    disabled={!canRemoveAdult()}
                  >-</button>
                  <span>{adults}</span>
                  <button
                    className={styles.boxButton}
                    onClick={() => setAdults((a) => canAddAdult() ? a + 1 : a)}
                    disabled={!canAddAdult()}
                  >+</button>
                </div>
              </div>
              <div className={styles.boxRow}>
                <span>Crianças</span>
                <div className={styles.boxCounter}>
                  <button
                    className={styles.boxButton}
                    onClick={() => setChildren((c) => Math.max(0, c - 1))}
                    disabled={!canRemoveChild()}
                  >-</button>
                  <span>{children}</span>
                  <button
                    className={styles.boxButton}
                    onClick={() => setChildren((c) => canAddChild() ? c + 1 : c)}
                    disabled={!canAddChild()}
                  >+</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <span className={styles.divider}></span>

        <div className={styles.buttonWrapper}>
          <Button label="Verificar disponibilidade" variant="terciary" />
        </div>
      </div>
    </section>
  );
}

export default CheckBox;
