import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import { Menu, Close } from "@mui/icons-material";

import { navbarStyles as styles } from "./NavBar.style.ts";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/hospedagem", label: "Hospedagem" },
  { path: "/eventos", label: "Eventos" },
  { path: "/contato", label: "Contato" },
  { path: "/sobre", label: "Saiba Mais" },
  { path: "/login", label: "Login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${styles.mobileLinkBase} ${
                  isActive
                    ? styles.mobileLinkActive
                    : styles.mobileLinkInactive
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
