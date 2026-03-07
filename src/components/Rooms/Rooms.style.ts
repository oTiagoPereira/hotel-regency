export const RoomsStyles = {
  container: "space-y-6",

  // Stats Section
  statsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
  statsCard: "bg-neutral p-4 rounded-xl border border-border-light shadow-sm flex items-center justify-between",
  statsInfo: "flex flex-col",
  statsLabel: "text-sm text-text-muted font-medium",
  statsValue: "text-2xl font-bold text-text-color",
  statsIconContainer: "p-3 rounded-lg flex items-center justify-center", // Dynamic color classes will be appended in component

  // Controls Section (Search, Filter, Add Button)

  // Cell Styles
  roomInfo: "flex items-center gap-3",
  roomBadge: "w-10 h-10 rounded-lg bg-primary text-neutral flex items-center justify-center font-bold text-xs",
  roomName: "font-medium text-text-color",
  priceText: "font-semibold text-text-color",

  // Actions
  actionsContainer: "flex items-center gap-2",
  actionButton: "p-1.5 text-text-muted hover:text-text-color/80 hover:bg-surface rounded-lg transition-colors",

};
