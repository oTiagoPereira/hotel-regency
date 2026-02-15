export const GuestsStyles = {
  container: "space-y-6 w-full",

  // Header
  header: "flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm",
  headerActions: "flex items-center gap-3 w-full md:w-auto",

  // Table
  tableContainer: "bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden",
  table: "w-full text-left border-collapse",
  thead: "bg-gray-50 border-b border-gray-100",
  th: "px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider",
  tr: "border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-0",
  td: "px-6 py-4 text-sm text-gray-600 align-middle",

  // Cell Content
  clientCell: "flex items-center gap-3",
  avatar: "w-10 h-10 rounded-full object-cover border border-gray-200",
  clientInfo: "flex flex-col",
  clientName: "font-medium text-gray-900",
  clientId: "text-xs text-gray-400",

  contactCell: "flex flex-col",
  email: "text-gray-900",
  phone: "text-xs text-gray-500",

  reservationsCell: "flex flex-col",
  resCount: "font-medium text-gray-900",
  resLabel: "text-xs text-gray-500",

  statusBadge: "px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1",
  statusActive: "bg-green-50 text-green-700 border border-green-100",
  statusInactive: "bg-gray-100 text-gray-600 border border-gray-200",
  statusSuspended: "bg-red-50 text-red-700 border border-red-100",

  actionsCell: "flex items-center gap-2",
  actionButton: "p-1.5 text-gray-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-all",

  // Pagination
  paginationContainer: "flex items-center justify-between border-t border-gray-100 bg-white px-4 py-3 sm:px-6",
  paginationInfo: "text-sm text-gray-700",
  paginationControls: "flex gap-2",
  paginationButton: "px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
  paginationCurrent: "px-3 py-1 bg-primary text-white rounded-md text-sm font-medium",
};
