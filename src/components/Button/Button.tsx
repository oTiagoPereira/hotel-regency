import { baseStyles, variants, sizes } from "./Button.style";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "terciary" | "danger" | "disabled";
  size?: "width_full" | "default";
};

export const Button = ({
  label,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  size = "width_full",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${baseStyles} ${
        disabled ? variants.disabled : variants[variant]
      } ${sizes[size]}`}
    >
      {label}
    </button>
  );
};
