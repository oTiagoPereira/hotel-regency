import { baseStyles, variants } from "./Button.style";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "terciary" | "danger" | "disabled";
};

export const Button = ({
  label,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${baseStyles} ${
        disabled ? variants.disabled : variants[variant]
      }`}
    >
      {label}
    </button>
  );
};
