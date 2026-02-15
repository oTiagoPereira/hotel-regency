import React, { forwardRef, type SelectHTMLAttributes } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { SelectStyles as styles } from "./Select.style";

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  options?: SelectOption[];
  containerClassName?: string;
  placeholder?: string;
  iconClassName?: string;
  arrowClassName?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      icon,
      options,
      className = "",
      containerClassName = "",
      placeholder,
      children,
      iconClassName = "",
      arrowClassName = "",
      ...props
    },
    ref,
  ) => {
    return (
      <div className={`${styles.container} ${containerClassName}`}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={styles.selectWrapper}>
          {icon && (
            <div className={`${styles.icon} ${iconClassName}`}>{icon}</div>
          )}
          <select
            ref={ref}
            className={`
              ${styles.select}
              ${icon ? styles.selectWithIcon : ""}
              ${error ? styles.selectError : ""}
              ${className}
            `}
            {...props}
          >
            {placeholder && (
              <option value="" disabled selected={!props.value}>
                {placeholder}
              </option>
            )}
            {options
              ? options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))
              : children}
          </select>
          <div className={`${styles.arrowIcon} ${arrowClassName}`}>
            <KeyboardArrowDown fontSize="small" />
          </div>
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {!error && helperText && (
          <p className={styles.helperText}>{helperText}</p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
