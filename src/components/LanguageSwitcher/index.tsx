import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <div>
      <Button
        id="language-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        sx={{ color: "inherit" }}
      >
        {i18n.language.toUpperCase()}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        <MenuItem onClick={() => changeLanguage("pt")}>PT</MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>EN</MenuItem>
        <MenuItem onClick={() => changeLanguage("es")}>ES</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
