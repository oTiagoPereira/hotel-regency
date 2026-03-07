import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = i18n.language?.split("-")[0] || "pt";

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        className="flex items-center gap-1.5 p-2 text-text-muted hover:bg-surface hover:text-text-color/90 rounded-lg transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        title="Idioma"
      >
        <LanguageIcon fontSize="small" />
        <span className="text-sm font-semibold uppercase">{currentLang}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-neutral rounded-xl shadow-xl border border-border-light py-2 z-50 transform origin-top-right transition-all">
          <button
            onClick={() => changeLanguage("pt")}
            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-surface flex items-center gap-3 transition-colors ${currentLang === "pt" ? "bg-info-light/50 text-info font-medium" : "text-text-color/90"}`}
          >
            <span className="text-lg leading-none">🇧🇷</span> Português
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-surface flex items-center gap-3 transition-colors ${currentLang === "en" ? "bg-info-light/50 text-info font-medium" : "text-text-color/90"}`}
          >
            <span className="text-lg leading-none">🇺🇸</span> English
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-surface flex items-center gap-3 transition-colors ${currentLang === "es" ? "bg-info-light/50 text-info font-medium" : "text-text-color/90"}`}
          >
            <span className="text-lg leading-none">🇪🇸</span> Español
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
