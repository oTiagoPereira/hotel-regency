import { useMemo, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Dashboard,
  CalendarMonth,
  Person,
  Logout,
  Close,
} from "@mui/icons-material";
import Logo from "@/assets/images/logo.svg";
import { DashboardSidebarStyles as styles } from "@features/admin/DashboardSidebar/DashboardSidebar.style";

interface ClientSidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

export default function ClientSidebar({ isSidebarOpen, closeSidebar }: ClientSidebarProps) {
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems: Array<{ path: string; label: string; icon: ReactNode }> = useMemo(
    () => [
      {
        path: "/client",
        label: "client.menu.dashboard",
        icon: <Dashboard />,
      },
      {
        path: "/client/reservations",
        label: "client.menu.reservations",
        icon: <CalendarMonth />,
      },
      {
        path: "/client/profile",
        label: "client.menu.profile",
        icon: <Person />,
      },
    ],
    [],
  );

  return (
    <>
      {isSidebarOpen && (
        <div className={styles.overlay} onClick={closeSidebar} aria-hidden="true" />
      )}

      <aside className={`${styles.aside} ${isSidebarOpen ? styles.mobileOpen : styles.mobileClosed}`}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logoWrapper}>
              <img src={Logo} alt="Logo" className={styles.logo} />
            </div>
            <div>
              <h1 className={styles.title}>Regency Hotel</h1>
              <span className={styles.subtitle}>{t("client.title", "Painel do Hóspede")}</span>
            </div>
          </div>
          <button
            className={styles.closeButton}
            onClick={closeSidebar}
            aria-label={t("dashboard.menu.closeSidebar", "Fechar menu")}
          >
            <Close fontSize="small" />
          </button>
        </div>

        <nav className={styles.nav}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== "/client");
            // Match exato pro index /client
            const finalActive = item.path === "/client" ? location.pathname === "/client" : isActive;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={`${styles.linkBase} ${finalActive ? styles.linkActive : styles.linkInactive}`}
              >
                <span className={finalActive ? styles.iconActive : styles.iconInactive}>
                  {item.icon}
                </span>
                {t(item.label, item.label)}
              </Link>
            );
          })}
        </nav>

        <div className={styles.footer}>
          <Link to="/">
            <button className={styles.logoutButton}>
              <Logout className={styles.logoutIcon} />
              <span>{t("dashboard.menu.logout", "Sair")}</span>
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}
