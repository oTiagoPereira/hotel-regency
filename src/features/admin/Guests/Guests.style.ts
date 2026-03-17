export const GuestsStyles = {
  container: "space-y-6 w-full",

  // Cell Content
  clientCell: "flex items-center gap-3",
  avatar: "w-10 h-10 rounded-full object-cover border border-border-light",
  clientInfo: "flex flex-col",
  clientName: "font-medium text-text-color",
  clientId: "text-xs text-text-muted",

  contactCell: "flex flex-col",
  email: "text-text-color",
  phone: "text-xs text-text-muted",

  reservationsCell: "flex flex-col",
  resCount: "font-medium text-text-color",
  resLabel: "text-xs text-text-muted",

  actionsCell: "flex items-center gap-2",
  actionButton: "p-1.5 text-text-muted hover:text-primary hover:bg-info-light rounded-lg transition-all",

};
