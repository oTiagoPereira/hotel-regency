import { useMemo, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Dashboard,
  CalendarMonth,
  Hotel,
  People,
  AttachMoney,
  Star,
  Settings,
  Logout,
  Close,
} from "@mui/icons-material";
import Logo from "../../assets/images/logo.svg";
import { DashboardSidebarStyles as styles } from "./DashboardSidebar.style";
import { useDashboard } from "../../contexts/DashboardContext";

export default function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { isSidebarOpen, closeSidebar } = useDashboard();

  const menuItems: Array<{ path: string; label: string; icon: ReactNode }> =
    useMemo(
      () => [
        {
          path: "/dashboard",
          label: "dashboard.menu.dashboard",
          icon: <Dashboard />,
        },
        {
          path: "/dashboard/reservations",
          label: "dashboard.menu.reservations",
          icon: <CalendarMonth />,
        },
        {
          path: "/dashboard/rooms",
          label: "dashboard.menu.rooms",
          icon: <Hotel />,
        },
        {
          path: "/dashboard/guests",
          label: "dashboard.menu.guests",
          icon: <People />,
        },
        {
          path: "/dashboard/finance",
          label: "dashboard.menu.finance",
          icon: <AttachMoney />,
        },
        {
          path: "/dashboard/reviews",
          label: "dashboard.menu.reviews",
          icon: <Star />,
        },
        {
          path: "/dashboard/users",
          label: "dashboard.menu.users",
          icon: <People />,
        },
        {
          path: "/dashboard/settings",
          label: "dashboard.menu.settings",
          icon: <Settings />,
        },
      ],
      [], 
    );

  return (
    <>
      {isSidebarOpen && (
        <div
          className={styles.overlay}
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`${styles.aside} ${isSidebarOpen ? styles.mobileOpen : styles.mobileClosed}`}
      >
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logoWrapper}>
              <img src={Logo} alt="Logo" className={styles.logo} />
            </div>
            <div>
              <h1 className={styles.title}>Regency Hotel</h1>
              <span className={styles.subtitle}>{t("dashboard.title")}</span>
            </div>
          </div>
          <button
            className={styles.closeButton}
            onClick={closeSidebar}
            aria-label={t("dashboard.menu.closeSidebar", "Fechar menu")}
            title={t("dashboard.menu.closeSidebar", "Fechar menu")}
          >
            <Close fontSize="small" />
          </button>
        </div>

        <nav className={styles.nav}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={`${styles.linkBase} ${
                  isActive ? styles.linkActive : styles.linkInactive
                }`}
              >
                <span
                  className={isActive ? styles.iconActive : styles.iconInactive}
                >
                  {item.icon}
                </span>
                {t(item.label)}
              </Link>
            );
          })}
        </nav>

        <div className={styles.footer}>
          <button className={styles.logoutButton}>
            <Logout className={styles.logoutIcon} />
            <span>{t("dashboard.menu.logout")}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
