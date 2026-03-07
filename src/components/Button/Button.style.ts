export const baseStyles = "font-semibold rounded-lg focus:outline-none transition w-full h-auto px-4 py-3 text-base md:w-auto md:px-7 md:py-3 whitespace-nowrap";

export const variants = {
    primary: "bg-primary text-neutral hover:bg-primary-hover focus:ring-2 focus:ring-primary focus:ring-offset-1 cursor-pointer",
    secondary: "bg-transparent text-primary hover:bg-primary hover:text-text-neutral border border-primary border-1.5 focus:ring-2 focus:ring-primary focus:ring-offset-1 cursor-pointer",
    terciary: "bg-secondary text-primary hover:bg-secondary-hover focus:ring-2 focus:ring-secondary focus:ring-offset-1 cursor-pointer",
    danger: "bg-red-600 text-neutral hover:bg-red-700 focus:ring-2 focus:ring-error focus:ring-offset-1 cursor-pointer",
    disabled: "bg-primary text-text-neutral opacity-50 cursor-not-allowed",
    minimal: "bg-neutral text-text-color/80 hover:bg-surface border border-border-light hover:border-border-light/80 shadow-sm transition-all hover:shadow focus:ring-2 focus:ring-primary focus:ring-offset-1 cursor-pointer",
  };

export const sizes = {
  width_full: "w-full md:w-full",
  default: "w-auto md:w-auto",
  small: "w-auto md:w-auto px-3 py-1.5 text-sm h-9",
}
