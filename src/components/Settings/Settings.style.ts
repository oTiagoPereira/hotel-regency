export const SettingsStyles = {
  container: "space-y-6 w-full",

  header:
    "flex justify-between items-center bg-neutral p-4 rounded-xl border border-border-light shadow-sm",
  headerTitle: "text-2xl font-bold text-text-color",
  headerSubtitle: "text-text-muted text-sm mt-1",
  actions: "flex items-center gap-2",
  successMessage:
    "text-success text-sm font-medium flex items-center gap-1 animate-fadeIn",

  tabsContainer:
    "bg-neutral rounded-xl border border-border-light shadow-sm overflow-x-auto",
  tabsNav: "flex whitespace-nowrap p-1",
  tabButtonBase:
    "px-4 py-3 text-sm font-medium transition-colors flex items-center gap-2 rounded-lg flex-1 justify-center",
  tabButtonActive: "bg-info-light text-primary",
  tabButtonInactive: "text-text-muted hover:bg-surface hover:text-text-color/90",

  contentContainer:
    "bg-neutral p-6 rounded-xl border border-border-light shadow-sm animate-fadeIn",
  sectionHeader:
    "text-lg font-bold text-text-color mb-6 pb-2 border-b border-gray-50",

  grid: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
  gridFull: "grid grid-cols-1 gap-6 mb-6",
  label: "block text-sm font-medium text-text-color/90 mb-1.5",
  textarea:
    "block w-full rounded-lg border-border-light shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2.5 border text-sm min-h-[120px]",
  helperText: "text-xs text-text-muted mt-1",

  logoContainer: "flex items-center gap-4",
  logoPreview:
    "w-16 h-16 rounded-lg bg-surface border border-border-light flex items-center justify-center text-text-muted overflow-hidden",
  logoImage: "w-full h-full object-cover",

  placeholderContainer:
    "flex flex-col items-center justify-center py-20 text-text-muted",
  placeholderIcon: "w-16 h-16 mb-4 opacity-50",
  placeholderText: "text-lg font-medium",

  switchLabel: "relative inline-flex items-center cursor-pointer",
  switchInput: "sr-only peer",
  switchSlider:
    "w-11 h-6 bg-border-light peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral after:border-border-light/80 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary",
  switchText: "ml-3 text-sm font-medium text-text-color",

  card: "border border-border-light rounded-lg p-4 hover:border-info-light transition-colors cursor-pointer",
  cardActive: "border-2 border-primary bg-info-light rounded-lg p-4 cursor-pointer",
  cardTitle: "font-medium text-text-color",
  cardDescription: "text-sm text-text-muted mt-1",

  integrationItem:
    "flex items-center justify-between p-4 border border-border-light rounded-lg",
  integrationInfo: "flex items-center gap-4",
  integrationIcon:
    "w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted",
  integrationName: "font-medium text-text-color",
  integrationStatus:
    "text-xs text-success font-medium bg-success-light px-2 py-1 rounded-full",

  colorOption:
    "w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 ring-2 ring-offset-2",
  colorGrid: "flex gap-3 mt-2",

  paymentGrid: "grid grid-cols-2 md:grid-cols-4 gap-4",
  paymentCard:
    "relative flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all duration-200",
  paymentCardActive:
    "border-2 border-primary bg-info-light/50 text-primary shadow-sm",
  paymentCardInactive:
    "border-border-light hover:border-border-light/80 hover:bg-surface text-text-muted grayscale",
  paymentIcon: "mb-3 transform transition-transform duration-200",
  paymentLabel: "text-sm font-medium text-center",
  checkIcon: "absolute top-2 right-2 text-primary w-5 h-5 animate-scaleIn",
};
