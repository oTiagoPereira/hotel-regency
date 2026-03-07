import React from "react";
import { Search } from "@mui/icons-material";
import { PageHeaderStyles as styles } from "./PageHeader.style";
import { Input } from "../Input/Input";

export interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  actions?: React.ReactNode;
  filters?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  actions,
  filters,
}: PageHeaderProps) {
  return (
    <div className={styles.header}>
      {/* Seção à esquerda: Título e Subtítulo OU Pesquisa */}
      <div className={styles.leftSection}>
        {title && (
          <div>
            <h1 className={styles.headerTitle}>{title}</h1>
            {subtitle && <p className={styles.headerSubtitle}>{subtitle}</p>}
          </div>
        )}

        {!title && searchPlaceholder !== undefined && (
          <div className={styles.searchContainer}>
            <Input
              placeholder={searchPlaceholder}
              icon={<Search fontSize="small" />}
              containerClassName="w-full"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Seção direita: Ações e filtros */}
      <div className={styles.rightSection}>
        {actions}
        {filters}
      </div>
    </div>
  );
}
