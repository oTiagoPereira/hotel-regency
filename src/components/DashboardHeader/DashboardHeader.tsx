import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Notifications, DarkMode } from "@mui/icons-material";
import { DashboardHeaderStyles as styles } from "./DashboardHeader.style";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const getHeaderInfo = () => {
    const path = location.pathname;

    if (path.includes("/dashboard/reservations")) {
      return {
        title: t("dashboard.menu.reservations"),
        subtitle: "Gerencie todas as reservas",
      };
    }
    if (path.includes("/dashboard/rooms")) {
      return {
        title: t("dashboard.menu.rooms"),
        subtitle: "Gerencie os quartos do hotel",
      };
    }
    if (path.includes("/dashboard/guests")) {
      return {
        title: t("dashboard.menu.guests"),
        subtitle: "Lista de hóspedes registrados",
      };
    }
    if (path.includes("/dashboard/finance")) {
      return {
        title: t("dashboard.menu.finance"),
        subtitle: "Relatórios e métricas financeiras",
      };
    }
    if (path.includes("/dashboard/reviews")) {
      return {
        title: t("dashboard.menu.reviews"),
        subtitle: "Feedback dos hóspedes",
      };
    }
    if (path.includes("/dashboard/users")) {
      return {
        title: t("dashboard.menu.users"),
        subtitle: "Gerencie a equipe do hotel",
      };
    }
    if (path.includes("/dashboard/settings")) {
      return {
        title: t("dashboard.menu.settings"),
        subtitle: "Ajustes do sistema",
      };
    }
    return {
      title: t("dashboard.menu.dashboard"),
      subtitle: "Visão geral do hotel",
    };
  };

  const { title, subtitle } = getHeaderInfo();

  const openProfile = () => {
    console.log("open profile");
  };

  return (
    <header className={styles.header}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <DarkMode />
        </button>
        <button className={styles.notificationButton}>
          <Notifications />
          <span className={styles.notificationDot}></span>
        </button>

        <div className={styles.divider}></div>

        <div className={styles.profileWrapper} onClick={openProfile}>
          <div className={styles.avatarWrapper}>
            <img
              src="https://ui-avatars.com/api/?name=Joao+Silva&background=0D8ABC&color=fff"
              alt="Avatar"
              className={styles.avatar}
            />
          </div>
          <div className={styles.profileInfo}>
            <p className={styles.profileName}>João Silva</p>
            <p className={styles.profileRole}>{t("dashboard.role.admin")}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
