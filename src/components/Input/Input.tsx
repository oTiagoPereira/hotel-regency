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
  (
    {
      label,
      error,
      helperText,
      icon,
      className = "",
      containerClassName = "",
      ...props
    },
    ref,
  ) => {
    return (
      <div className={`${styles.container} ${containerClassName}`}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={styles.inputWrapper}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <input
            ref={ref}
            className={`
              ${styles.input}
              ${icon ? styles.inputWithIcon : ""}
              ${error ? styles.inputError : ""}
              ${className}
            `}
            {...props}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {!error && helperText && (
          <p className={styles.helperText}>{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
