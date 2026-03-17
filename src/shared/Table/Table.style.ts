export const TableStyles = {
  tableContainer: "bg-neutral rounded-xl border border-border-light shadow-sm overflow-hidden",
  tableHeader: "p-4 border-b border-border-light",
  tableTitle: "text-lg font-semibold text-text-color",
  table: "w-full text-left border-collapse whitespace-nowrap lg:whitespace-normal",
  thead: "bg-surface border-b border-border-light",
  th: "px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider",
  tbody: "divide-y divide-gray-100",
  tr: "hover:bg-surface transition-colors",
  td: "px-6 py-4 text-sm text-text-color/90 align-middle",
  
  // Pagination
  paginationContainer: "flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 border-t border-border-light bg-neutral px-4 py-3 sm:px-6",
  paginationInfo: "text-sm text-text-color/90",
  paginationControls: "flex gap-1 sm:gap-2 flex-wrap justify-center",
  paginationButton: "px-3 py-1 border border-border-light rounded-md text-sm font-medium text-text-color/90 hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed",
  paginationCurrent: "px-3 py-1 bg-primary text-neutral rounded-md text-sm font-medium",
};
