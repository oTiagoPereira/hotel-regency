import { baseStyles, variants, sizes } from "./Button.style";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "secondary"
    | "terciary"
    | "danger"
    | "disabled"
    | "minimal";
  size?: "width_full" | "default" | "small";
  Icon?: React.ElementType;
  className?: string;
  ariaLabel?: string;
};

export const Button = ({
  label,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  size = "width_full",
  Icon,
  className = "",
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel || label}
      aria-disabled={disabled}
      className={`${baseStyles} ${
        disabled ? variants.disabled : variants[variant]
      } ${sizes[size]} ${className}`}
    >
      {Icon && <Icon />}
      {Icon ? <span className="ml-2">{label}</span> : label}
    </button>
  );
};
