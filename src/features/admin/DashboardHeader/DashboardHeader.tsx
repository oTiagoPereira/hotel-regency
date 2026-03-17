import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Notifications, DarkMode, Menu } from "@mui/icons-material";
import { useDashboard } from "@core/contexts/DashboardContext";
import { DashboardHeaderStyles as styles } from "./DashboardHeader.style";
import { LanguageSwitcher } from "@shared";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const { toggleSidebar } = useDashboard();

  const getHeaderInfo = () => {
    const defaultInfo = {
      title: t("dashboard.menu.dashboard"),
      subtitle: t("dashboard.header.subtitle_dashboard"),
    };

    const routeMap: Record<string, { title: string; subtitle: string }> = {
      "/dashboard/reservations": {
        title: t("dashboard.menu.reservations"),
        subtitle: t("dashboard.header.subtitle_reservations"),
      },
      "/dashboard/rooms": {
        title: t("dashboard.menu.rooms"),
        subtitle: t("dashboard.header.subtitle_rooms"),
      },
      "/dashboard/guests": {
        title: t("dashboard.menu.guests"),
        subtitle: t("dashboard.header.subtitle_guests"),
      },
      "/dashboard/finance": {
        title: t("dashboard.menu.finance"),
        subtitle: t("dashboard.header.subtitle_finance"),
      },
      "/dashboard/reviews": {
        title: t("dashboard.menu.reviews"),
        subtitle: t("dashboard.header.subtitle_reviews"),
      },
      "/dashboard/users": {
        title: t("dashboard.menu.users"),
        subtitle: t("dashboard.header.subtitle_users"),
      },
      "/dashboard/settings": {
        title: t("dashboard.menu.settings"),
        subtitle: t("dashboard.header.subtitle_settings"),
      },
    };

    const matchedRoute = Object.keys(routeMap).find((route) =>
      location.pathname.includes(route),
    );

    return matchedRoute ? routeMap[matchedRoute] : defaultInfo;
  };

  const { title, subtitle } = getHeaderInfo();

  const openProfile = () => {
    console.log("open profile");
  };

  return (
    <header className={styles.header}>
      <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
        <button
          className={styles.menuButton}
          onClick={toggleSidebar}
          aria-label={t("dashboard.menu.openSidebar", "Abrir menu lateral")}
        >
          <Menu />
        </button>
        <div className="min-w-0">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <LanguageSwitcher />

        <div className={styles.divider}></div>

        <button 
          className={styles.actionButton}
          aria-label={t("dashboard.header.darkMode", "Modo Escuro")}
          title={t("dashboard.header.darkMode", "Modo Escuro")}
        >
          <DarkMode />
        </button>
        <button 
          className={styles.notificationButton}
          aria-label={t("dashboard.header.notifications", "Notificações")}
          title={t("dashboard.header.notifications", "Notificações")}
        >
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
