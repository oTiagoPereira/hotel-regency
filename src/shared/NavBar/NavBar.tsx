import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo from "@/assets/images/logo.svg";
import { Menu, Close } from "@mui/icons-material";

import { navbarStyles as styles } from "./NavBar.style.ts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { path: "/", label: t("navbar.home") },
    { path: "/accommodation", label: t("navbar.rooms") },
    { path: "/contact", label: t("navbar.contact") },
    { path: "/login", label: t("navbar.login") },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logoLink}>
              <img
                src={Logo}
                alt="Imagem da logo Regency Hotel"
                className={styles.logoImage}
              />
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={styles.mobileButton}
              aria-label={isOpen ? t("navbar.closeMenu", "Fechar menu") : t("navbar.openMenu", "Abrir menu")}
              aria-expanded={isOpen}
            >
              <span
                className={`${isOpen ? "hidden" : "block"} ${styles.mobileIcon}`}
              >
                <Menu />
              </span>
              <span
                className={`${isOpen ? "block" : "hidden"} ${styles.mobileIcon}`}
              >
                <Close />
              </span>
            </button>
          </div>

          <div className={styles.desktopMenu}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`${styles.navLinkBase} ${
                    isActive ? styles.navLinkActive : styles.navLinkInactive
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu} role="menu">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`${styles.mobileLinkBase} ${
                  isActive ? styles.mobileLinkActive : styles.mobileLinkInactive
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
