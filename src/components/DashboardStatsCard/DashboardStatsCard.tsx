import type { ReactNode } from "react";
import { DashboardStatsCardStyles as styles } from "./DashboardStatsCard.style";

interface StatsCardProps {
  title: string;
  value: string;
  subtext?: string;
  subtextClass?: string;
  icon: ReactNode;
  iconBgClass: string;
  iconColorClass: string;
}

export default function StatsCard({
  title,
  value,
  subtext,
  subtextClass,
  icon,
  iconBgClass,
  iconColorClass,
}: StatsCardProps) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>{title}</p>
        <h3 className={styles.value}>{value}</h3>
        {subtext && (
          <p
            className={`${styles.subtextBase} ${subtextClass || styles.subtextDefault}`}
          >
            {subtext}
          </p>
        )}
      </div>
      <div className={`${styles.iconWrapper} ${iconBgClass} ${iconColorClass}`}>
        {icon}
      </div>
    </div>
  );
}
