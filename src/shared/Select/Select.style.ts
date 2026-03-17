export const SelectStyles = {
  container: "flex flex-col gap-1.5 w-full",
  label: "text-sm font-medium text-text-color/90",
  selectWrapper: "relative",
  select:
    "w-full pl-4 pr-10 py-3 border border-border-light rounded-lg text-base font-medium text-text-color/90 bg-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm hover:shadow hover:border-border-light/80 disabled:bg-surface disabled:text-text-muted appearance-none cursor-pointer",
  selectError: "border-red-500 focus:ring-error",
  selectWithIcon: "pl-12",
  icon: "absolute left-4 top-[50%] -translate-y-[50%] text-text-muted pointer-events-none",
  arrowIcon: "absolute right-4 top-[50%] -translate-y-[50%] text-text-muted pointer-events-none",
  error: "text-xs text-error mt-1",
  helperText: "text-xs text-text-muted mt-1",
};
