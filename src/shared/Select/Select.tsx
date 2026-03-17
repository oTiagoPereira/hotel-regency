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
  (props, ref) => {
    const {
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
      ...rest
    } = props;
    const selectId = props.id || `select-${label?.replace(/\s+/g, "-").toLowerCase()}`;
    const errorId = `${selectId}-error`;
    const helperId = `${selectId}-helper`;

    return (
      <div className={`${styles.container} ${containerClassName}`}>
        {label && (
          <label htmlFor={selectId} className={styles.label}>
            {label}
          </label>
        )}

        <div className={styles.selectWrapper}>
          {icon && (
            <div className={`${styles.icon} ${iconClassName}`}>{icon}</div>
          )}
          <select
            ref={ref}
            id={selectId}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={`
              ${styles.select}
              ${icon ? styles.selectWithIcon : ""}
              ${error ? styles.selectError : ""}
              ${className}
            `}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled selected={!rest.value}>
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

        {error && (
          <p id={errorId} className={styles.error} role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className={styles.helperText}>
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
