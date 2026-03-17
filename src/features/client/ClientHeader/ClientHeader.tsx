import { useTranslation } from "react-i18next";
import { Menu, DarkMode, Notifications } from "@mui/icons-material";
import { LanguageSwitcher } from "@shared";
import { DashboardHeaderStyles as styles } from "@features/admin/DashboardHeader/DashboardHeader.style";
// Usaremos estilos compartilhados do DashboardHeader se possível, ou criaremos cópias simplificadas.

export default function ClientHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
        <button
          className={styles.menuButton}
          onClick={toggleSidebar}
          aria-label={t("dashboard.menu.openSidebar")}
        >
          <Menu />
        </button>
        <div className="min-w-0">
          <h2 className={styles.title}>{t("client.header.title")}</h2>
          <p className={styles.subtitle}>{t("client.header.subtitle")}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <LanguageSwitcher />
        <div className={styles.divider}></div>
        <button className={styles.actionButton} aria-label={t("dashboard.header.darkMode")}>
          <DarkMode />
        </button>
        <button className={styles.notificationButton} aria-label={t("dashboard.header.notifications")}>
          <Notifications />
          <span className={styles.notificationDot}></span>
        </button>
        <div className={styles.divider}></div>
        <div className={styles.profileWrapper}>
          <div className={styles.avatarWrapper}>
            <img
              src="https://ui-avatars.com/api/?name=Hospede+Cliente&background=10B981&color=fff"
              alt="Avatar"
              className={styles.avatar}
            />
          </div>
          <div className={styles.profileInfo}>
            <p className={styles.profileName}>Hóspede Silva</p>
            <p className={styles.profileRole}>{t("client.role.guest")}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
