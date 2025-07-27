export const baseStyles = "font-semibold rounded-lg focus:outline-none transition w-full h-auto px-4 py-3 text-md md:w-auto md:px-7 md:py-3";

export const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover cursor-pointer",
    secondary: "bg-transparent text-primary hover:bg-primary hover:text-text-neutral border border-primary border-1.5 cursor-pointer",
    terciary: "bg-secondary text-primary hover:bg-secondary-hover cursor-pointer",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400 cursor-pointer",
    disabled: "bg-primary text-text-neutral opacity-50 cursor-not-allowed",
  };

export const sizes = {
  width_full: "w-full md:w-full",
  default: "w-auto md:w-auto"
}
