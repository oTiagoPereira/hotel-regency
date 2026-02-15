export const UsersStyles = {
  container: "space-y-6",

  // Header Section
  header: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
  headerTitle: "text-2xl font-bold text-gray-900",
  headerSubtitle: "text-gray-500 text-sm mt-1",

  // Stats Section
  statsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
  statsCard: "bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between",
  statsInfo: "flex flex-col",
  statsLabel: "text-sm text-gray-500 font-medium",
  statsValue: "text-2xl font-bold text-gray-900",
  statsIconContainer: "w-10 h-10 rounded-lg flex items-center justify-center",

  // Filters Section
  filtersContainer: "bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between",
  filtersRight: "flex flex-col md:flex-row gap-3 w-full md:w-auto",

  // Table Section
  tableContainer: "bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden",
  tableHeader: "px-6 py-4 border-b border-gray-100",
  tableTitle: "text-lg font-bold text-gray-900",
  table: "w-full text-left border-collapse",
  thead: "bg-gray-50 border-b border-gray-100",
  th: "px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider",
  tbody: "divide-y divide-gray-100",
  tr: "hover:bg-gray-50 transition-colors",
  td: "px-6 py-4 text-sm text-gray-700 align-middle",

  // Table Cells
  userCell: "flex items-center gap-3",
  userAvatar: "w-10 h-10 rounded-full object-cover",
  userInfo: "flex flex-col",
  userName: "font-semibold text-gray-900",
  userEmail: "text-xs text-gray-500",

  roleBadge: "px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1",
  accessBadge: "px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200",
  statusBadge: "px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1",

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
