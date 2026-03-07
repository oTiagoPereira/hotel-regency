import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../../styles/dayPicker.style.css";
import { ptBR } from "date-fns/locale";
import type { DateRange, Matcher } from "react-day-picker";

interface DayPickerProps {
    mode: "range";
    selected: DateRange | undefined;
    onSelect: (range: DateRange | undefined) => void;
    disabled?: Matcher | Matcher[];
  }

function DatePicker({ mode, selected, onSelect, disabled }: DayPickerProps) {
  return (
    <div
  className="absolute z-10 bg-secondary p-4 rounded-lg top-2 md:top-5 font-medium">
  <DayPicker
    mode={mode}
    locale={ptBR}
    selected={selected as DateRange}
    onSelect={onSelect}
    showOutsideDays
    disabled={disabled}
    modifiersClassNames={{
      selected: "bg-primary text-neutral",
      today: "text-primary font-bold",
      range_middle: "bg-primary",
      preview: "bg-primary text-neutral",
      range_start: "rounded-l-full bg-primary text-neutral",
      range_end: "rounded-r-full text-neutral",
    }}
    className="text-text-color"
  />
</div>

  );
}

export default DatePicker;
