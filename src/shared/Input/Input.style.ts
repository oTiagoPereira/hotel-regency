export const InputStyles = {
  container: "flex flex-col gap-1.5 w-full",
  label: "text-sm font-medium text-text-color/90",
  inputWrapper: "relative",
  input:
    "w-full pl-4 pr-4 py-3 border border-border-light rounded-lg text-base font-medium text-text-color/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm hover:shadow hover:border-border-light/80 disabled:bg-surface disabled:text-text-muted",
  inputError: "border-red-500 focus:ring-error",
  inputWithIcon: "pl-12",
  icon: "absolute left-4 top-3.5 text-text-muted pointer-events-none",
  error: "text-xs text-error mt-1",
  helperText: "text-xs text-text-muted mt-1",
};
