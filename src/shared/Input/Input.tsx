import React, { type InputHTMLAttributes, forwardRef } from "react";
import { InputStyles as styles } from "./Input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      label,
      error,
      helperText,
      icon,
      className = "",
      containerClassName = "",
      ...rest
    } = props;
    const inputId = props.id || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className={`${styles.container} ${containerClassName}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <div className={styles.inputWrapper}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={`
              ${styles.input}
              ${icon ? styles.inputWithIcon : ""}
              ${error ? styles.inputError : ""}
              ${className}
            `}
            {...rest}
          />
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

Input.displayName = "Input";
