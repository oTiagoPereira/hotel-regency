export const ReservationsStyles = {
  container: "space-y-6",

  // Header Section
  header: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
  headerTitle: "text-2xl font-bold text-gray-900",
  headerSubtitle: "text-gray-500 text-sm mt-1",

  // Filters Section
  filtersContainer: "bg-white p-4 rounded-xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end",
  filterGroup: "flex flex-col gap-1.5 ",
  filterLabel: "text-xs font-semibold text-gray-700",
  controlsContainer: "flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm",
  leftControls: "flex flex-col md:flex-row gap-4 w-full md:w-auto",

  // Stats Section
  statsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
  statsCard: "bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between",
  statsInfo: "flex flex-col",
  statsLabel: "text-sm text-gray-500 font-medium",
  statsValue: "text-2xl font-bold text-gray-900",
  statsIconContainer: "w-10 h-10 rounded-lg flex items-center justify-center", // Dynamic background colors

  // Table Section
  tableContainer: "bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden",
  tableHeader: "px-6 py-4 border-b border-gray-100 flex justify-between items-center",
  tableTitle: "text-lg font-bold text-gray-900",
  table: "w-full text-left border-collapse",
  thead: "bg-gray-50 border-b border-gray-100",
  th: "px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider",
  tbody: "divide-y divide-gray-100",
  tr: "hover:bg-gray-50 transition-colors",
  td: "px-6 py-4 text-sm text-gray-700 align-middle",

  // Table Cells
  clientCell: "flex items-center gap-3",
  clientAvatar: "w-10 h-10 rounded-full object-cover",
  clientInfo: "flex flex-col",
  clientName: "font-semibold text-gray-900",
  clientEmail: "text-xs text-gray-500",

  roomCell: "flex flex-col",
  roomName: "font-medium text-gray-900",
  roomGuests: "text-xs text-gray-500",

  statusBadge: "px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1",
  priceText: "font-semibold text-gray-900",

  // Actions
  actionsContainer: "flex items-center gap-2",
  actionButton: "p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",

  // Pagination
  paginationContainer: "flex items-center justify-between border-t border-gray-100 bg-white px-4 py-3 sm:px-6",
  paginationInfo: "text-sm text-gray-700",
  paginationControls: "flex gap-2",
  paginationButton: "px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
  paginationCurrent: "px-3 py-1 bg-primary text-white rounded-md text-sm font-medium",
};
