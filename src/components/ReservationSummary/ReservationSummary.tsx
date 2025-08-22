import { format, differenceInDays, subDays } from "date-fns";
import React, { useState, useEffect, useRef } from "react";
import type { DateRange } from "react-day-picker";
import {
  CreditCard,
  EventAvailable,
  LocalOffer,
  Security,
} from "@mui/icons-material";
import Button from "../Button";
import DatePicker from "../CheckBox/dayPicker";
import { ReservationSummaryStyle as Styles } from "./ReservationSummary.style"

interface ReservationCardProps {
  room: {
    id: number;
    title: string;
    value: number;
    Offer?: {
      hasOffer: boolean;
      discountPercentage: number;
    };
  };
}

const ReservationCard: React.FC<ReservationCardProps> = ({ room }) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [openPicker, setOpenPicker] = useState<"checkin" | "checkout" | null>(null);
  const checkinRef = useRef<HTMLDivElement>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

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

  const handleDateSelect = (range: DateRange | undefined) => {
    if (!range) return;
    if (openPicker === "checkin") {
      if (range.from && range.from < new Date(new Date().setHours(0, 0, 0, 0))) return;
      if (range.from) {
        let newToDate = dateRange?.to;
        if (!newToDate || newToDate <= range.from) {
          newToDate = new Date(range.from);
          newToDate.setDate(newToDate.getDate() + 1);
        }
        setDateRange({ from: range.from, to: newToDate });
        setOpenPicker("checkout");
      }
    } else if (openPicker === "checkout") {
      if (range.to && dateRange?.from && range.to <= dateRange.from) return;
      setDateRange(range);
      if (range.to) setOpenPicker(null);
    }
  };

  useEffect(() => {
    if (!openPicker) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        !checkinRef.current?.contains(event.target as Node) &&
        !checkoutRef.current?.contains(event.target as Node)
      ) {
        setOpenPicker(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openPicker]);

  const numberOfDays = dateRange?.from && dateRange?.to ? differenceInDays(dateRange.to, dateRange.from) : 0;
  const cancellationDate = dateRange?.from ? format(subDays(dateRange.from, 1), "dd/MM") : "";
  const isOfferValid = room.Offer?.hasOffer && room.Offer?.discountPercentage > 0;
  const originalSubtotal = room.value * numberOfDays;
  const discountValue = isOfferValid ? originalSubtotal * (room.Offer!.discountPercentage / 100) : 0;
  const subtotal = originalSubtotal - discountValue;
  const serviceFee = 89.9;
  const taxes = 119.99;
  const total = subtotal + serviceFee + taxes;

  return (
    <div className={Styles.cardContainer}>
      <div>
        {isOfferValid ? (
          <div className={Styles.priceHeader}>
            <h1 className={Styles.priceWithOffer}>
              R$ {room.value.toFixed(2)}
              <span className={Styles.perNightText}>/noite</span>
            </h1>
            <span className={Styles.offerBadge}>
              <LocalOffer fontSize="small" />
              <p>{room.Offer?.discountPercentage}% OFF</p>
            </span>
          </div>
        ) : (
          <h1 className={Styles.priceDefault}>R$ {room.value.toFixed(2)}</h1>
        )}
      </div>

      <div className={Styles.datePickerWrapper}>
        <div ref={checkinRef} onClick={() => handleOpenPicker("checkin")} className={Styles.dateInputBox}>
          <p className={Styles.dateInputLabel}>Check-in</p>
          {dateRange?.from ? format(dateRange.from, "dd/MM/yy") : ""}
        </div>
        <div ref={checkoutRef} onClick={() => handleOpenPicker("checkout")} className={Styles.dateInputBox}>
          <p className={Styles.dateInputLabel}>Check-out</p>
          {dateRange?.to ? format(dateRange.to, "dd/MM/yy") : ""}
        </div>
      </div>
      {openPicker && (
        <div ref={calendarRef} className={Styles.calendarContainer}>
          <DatePicker mode="range" selected={dateRange} onSelect={handleDateSelect} />
        </div>
      )}

      <>
        <span className={Styles.divider}></span>
        <div className={Styles.summaryContainer}>
          <span className={Styles.summaryRow}>
            <p className={Styles.summaryLabel}>
              R$ {room.value.toFixed(2)} x {numberOfDays} {numberOfDays !== 1 ? "noites" : "noite"}
            </p>
            <p className={Styles.summaryValue}>R$ {originalSubtotal.toFixed(2)}</p>
          </span>
          {isOfferValid && (
            <span className={Styles.summaryRowDiscount}>
              <p className={Styles.summaryValue}>Desconto ({room.Offer?.discountPercentage}%)</p>
              <p className={Styles.summaryValue}>- R$ {discountValue.toFixed(2)}</p>
            </span>
          )}
          <span className={Styles.summaryRow}>
            <p className={Styles.summaryLabel}>Taxa de serviço</p>
            <p className={Styles.summaryValue}>R$ {serviceFee.toFixed(2)}</p>
          </span>
          <span className={Styles.summaryRow}>
            <p className={Styles.summaryLabel}>Impostos</p>
            <p className={Styles.summaryValue}>R$ {taxes.toFixed(2)}</p>
          </span>
          <span className={Styles.dividerShort}></span>
          <span className={Styles.summaryRow}>
            <p className={Styles.summaryValue}>Total</p>
            <p className={Styles.summaryValue}>R$ {total.toFixed(2)}</p>
          </span>

          <span className={Styles.buttonWrapper}>
            <Button label="Reservar agora" onClick={() => console.log("Reservar!")} />
          </span>
          <div className={Styles.disclaimer}>
            <p>Você não será cobrado ainda</p>
          </div>

          <div className={Styles.featuresContainer}>
            {dateRange?.from && (
              <span className={Styles.featureItem}>
                <EventAvailable className={Styles.featureIcon} />
                <p>Cancelamento gratuito até {cancellationDate}</p>
              </span>
            )}

            <span className={Styles.featureItem}>
              <CreditCard className={Styles.featureIcon} />
              <p>Pague apenas na chegada</p>
            </span>
            <span className={Styles.featureItem}>
              <Security className={Styles.featureIcon} />
              <p>Reserva 100% segura</p>
            </span>
          </div>
        </div>
      </>
    </div>
  );
};

export default ReservationCard;