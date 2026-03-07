export const ReservationsStyles = {
  container: "space-y-6",

  // Filters Section
  filtersContainer: "bg-neutral p-4 rounded-xl border border-border-light shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end",
  filterGroup: "flex flex-col gap-1.5 ",
  filterLabel: "text-xs font-semibold text-text-color/90",

  // Stats Section
  statsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
  statsCard: "bg-neutral p-4 rounded-xl border border-border-light shadow-sm flex items-center justify-between",
  statsInfo: "flex flex-col",
  statsLabel: "text-sm text-text-muted font-medium",
  statsValue: "text-2xl font-bold text-text-color",
  statsIconContainer: "w-10 h-10 rounded-lg flex items-center justify-center", // Dynamic background colors

  // Table Cells
  clientCell: "flex items-center gap-3",
  clientAvatar: "w-10 h-10 rounded-full object-cover",
  clientInfo: "flex flex-col",
  clientName: "font-semibold text-text-color",
  clientEmail: "text-xs text-text-muted",

  roomCell: "flex flex-col",
  roomName: "font-medium text-text-color",
  roomGuests: "text-xs text-text-muted",

  priceText: "font-semibold text-text-color",

  // Actions
  actionsContainer: "flex items-center gap-2",
  actionButton: "p-1.5 text-text-muted hover:text-text-color/80 hover:bg-surface rounded-lg transition-colors",

};
