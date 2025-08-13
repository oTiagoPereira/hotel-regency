export const FilterRoomsStyles = {
  filterOpenButtonWrapper: "md:hidden p-4 text-end",
  buttonPrimary: "bg-primary text-text-neutral px-3 py-1 rounded-md hover:bg-primary-hover cursor-pointer font-semibold",
  fixedButton: "bg-primary text-text-neutral px-3 py-1 rounded-md hover:bg-primary-hover cursor-pointer font-semibold fixed min-w-[80px] text-center z-50",
  mobileFilterContainer: (open: boolean) =>
    `fixed inset-0 bg-transparent bg-opacity-50 z-10 transform transition-transform duration-300 ease-out md:static md:bg-transparent md:z-auto text-start ${
      open ? "translate-y-0" : "translate-y-full"
    } md:translate-y-0`,
  asideContainer: "bg-white min-w-full h-full md:min-w-6/12 md:rounded-md shadow-md mx-auto py-5 px-5 text-text-color overflow-y-auto",
  headerMobile: "flex justify-start items-start mb-4 md:hidden relative",
  headerDesktop: "hidden md:flex justify-between items-center mb-4",
  form: "space-y-6 mt-12 md:mt-2",
  label: "font-medium block mb-2",
  checkboxContainer: "flex flex-col gap-1",
  priceRangeLabel: "font-medium block mb-4",
  priceRangeValues: "flex justify-between mt-3 h-auto",
  priceBox: "flex flex-col gap-1",
  priceLabelText: "text-sm text-gray-500",
  priceValueText: "border border-gray-300 rounded-md px-3 py-2 text-sm font-medium",
};
