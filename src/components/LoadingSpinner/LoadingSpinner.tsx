import { LoadingSpinnerStyles as styles } from "./LoadingSpinner.style";

export const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
};
