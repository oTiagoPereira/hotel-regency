export const UsersStyles = {
  container: "space-y-6",

  // Stats Section
  statsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
  statsCard: "bg-neutral p-4 rounded-xl border border-border-light shadow-sm flex items-center justify-between",
  statsInfo: "flex flex-col",
  statsLabel: "text-sm text-text-muted font-medium",
  statsValue: "text-2xl font-bold text-text-color",
  statsIconContainer: "w-10 h-10 rounded-lg flex items-center justify-center",

  // Table Cells
  userCell: "flex items-center gap-3",
  userAvatar: "w-10 h-10 rounded-full object-cover",
  userInfo: "flex flex-col",
  userName: "font-semibold text-text-color",
  userEmail: "text-xs text-text-muted",

  // Actions
  actionsContainer: "flex items-center gap-2",
  actionButton: "p-1.5 text-text-muted hover:text-text-color/80 hover:bg-surface rounded-lg transition-colors",

};
