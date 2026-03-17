import React from "react";
import { useTranslation } from "react-i18next";
import { TableStyles as styles } from "./Table.style";

export interface Column<T> {
  key: string;
  header: React.ReactNode;
  render?: (item: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string | number;
  title?: React.ReactNode;
  
  // Pagination
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
  
  // Override text
  resultsText?: string;
  
  // Container styling
  containerClassName?: string;
}

export function Table<T>({
  columns,
  data,
  keyExtractor,
  title,
  currentPage = 1,
  totalPages = 1,
  totalItems,
  itemsPerPage = 10,
  onPageChange,
  resultsText,
  containerClassName = "",
}: TableProps<T>) {
  const { t } = useTranslation();

  const actualTotalItems = totalItems ?? data.length;

  const startIdx = actualTotalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endIdx = Math.min(currentPage * itemsPerPage, actualTotalItems);

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages || totalPages === 0;

  return (
    <div className={`${styles.tableContainer} ${containerClassName}`}>
      {title && (
        <div className={styles.tableHeader}>
          {typeof title === "string" ? (
            <h3 className={styles.tableTitle}>{title}</h3>
          ) : (
            title
          )}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {columns.map((col) => (
                <th key={col.key} className={styles.th} scope="col">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {data.map((item) => (
              <tr key={keyExtractor(item)} className={styles.tr}>
                {columns.map((col) => (
                  <td key={col.key} className={styles.td}>
                    {col.render ? col.render(item) : String(item[col.key as keyof T] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center text-text-muted">
                  {t("dashboard.actions.noData") || "Nenhum dado encontrado"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.paginationContainer}>
        <span className={styles.paginationInfo} aria-live="polite">
          {t("dashboard.users.pagination.showing")} {startIdx}{" "}
          {t("dashboard.users.pagination.to")} {endIdx}{" "}
          {t("dashboard.users.pagination.of")} {actualTotalItems}{" "}
          {resultsText || t("dashboard.users.pagination.results")}
        </span>
        <nav className={styles.paginationControls} aria-label="Pagination">
          <button
            className={styles.paginationButton}
            disabled={isPrevDisabled}
            onClick={() => onPageChange?.(currentPage - 1)}
            aria-label={t("dashboard.users.pagination.prev")}
          >
            {t("dashboard.users.pagination.prev")}
          </button>
          
          <button 
            className={styles.paginationCurrent}
            aria-label={`${t("dashboard.users.pagination.currentPage", "Página atual: ")} ${currentPage}`}
            aria-current="page"
          >
            {currentPage}
          </button>
          
          {totalPages > 1 && currentPage < totalPages && (
            <button
              className={styles.paginationButton}
              onClick={() => onPageChange?.(currentPage + 1)}
              aria-label={`Go to page ${currentPage + 1}`}
            >
              {currentPage + 1}
            </button>
          )}

          {totalPages > 2 && currentPage < totalPages - 1 && (
            <button
              className={styles.paginationButton}
              onClick={() => onPageChange?.(currentPage + 2)}
              aria-label={`Go to page ${currentPage + 2}`}
            >
              {currentPage + 2}
            </button>
          )}
          
          <button
            className={styles.paginationButton}
            disabled={isNextDisabled}
            onClick={() => onPageChange?.(currentPage + 1)}
            aria-label={t("dashboard.users.pagination.next")}
          >
            {t("dashboard.users.pagination.next")}
          </button>
        </nav>
      </div>
    </div>
  );
}
