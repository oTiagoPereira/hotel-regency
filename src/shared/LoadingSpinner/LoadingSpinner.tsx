import { LoadingSpinnerStyles as styles } from "./LoadingSpinner.style";

export const LoadingSpinner = () => {
  return (
    <div className={styles.container} role="status" aria-live="polite">
      <div className={styles.spinner}></div>
      <span className="sr-only">Carregando...</span>
    </div>
  );
};
