export const FilterRoomsStyles = {
  filterOpenButtonWrapper: "md:hidden p-4 text-end",
  mobileFilterContainer: (open: boolean) =>
    `fixed inset-0 bg-black bg-opacity-50 z-40 transform transition-transform duration-300 ease-out md:static md:bg-transparent md:z-40 text-start ${
      open ? "translate-y-0" : "translate-y-full"
    } md:translate-y-0`,
  asideContainer:
    "relative bg-neutral min-w-full h-full md:min-w-6/12 md:rounded-md shadow-md mx-auto py-5 px-5 text-text-color",
  headerMobile: "flex justify-start items-start mb-4 md:hidden relative",
  headerDesktop:
    "hidden md:flex flex-wrap justify-between items-center mb-4 gap-2",
  headerTitle: "text-2xl font-semibold",

  buttonPrimary:
    "bg-primary text-text-neutral px-3 py-1 rounded-md hover:bg-primary-hover cursor-pointer font-semibold",
  resetButtonMobile:
    "bg-primary text-text-neutral px-3 py-1 rounded-md hover:bg-primary-hover cursor-pointer font-semibold fixed min-w-[80px] text-center z-50 top-4 left-4",
  closeButtonMobile:
    "bg-primary text-text-neutral px-3 py-1 rounded-md hover:bg-primary-hover cursor-pointer font-semibold fixed min-w-[80px] text-center z-50 top-4 right-4",

  form: "space-y-6 mt-12 md:mt-2 h-[calc(100%-100px)] md:h-auto overflow-y-auto",
  label: "font-medium block mb-2",
  
  datePickerWrapper:
    "flex flex-wrap justify-between items-center gap-4",
  dateDisplayBox:
    "border border-border-light/80 rounded-md px-3 py-2 w-auto text-center cursor-pointer flex-grow",

  checkboxContainer: "flex flex-col gap-1",
  checkboxLabel: "flex items-center gap-2 cursor-pointer",
  checkboxInput: "accent-primary cursor-pointer",

  priceRangeLabel: "font-medium block mb-4",
  priceRangeValues: "flex justify-between mt-3 h-auto",
  priceBox: "flex flex-col gap-1",
  priceLabelText: "text-sm text-text-muted",
  priceValueText:
    "border border-border-light/80 rounded-md px-3 py-2 text-sm font-medium",
};
