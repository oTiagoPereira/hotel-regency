export const SettingsStyles = {
  container: "space-y-6 w-full",

  header:
    "flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm",
  headerTitle: "text-2xl font-bold text-gray-900",
  headerSubtitle: "text-gray-500 text-sm mt-1",
  actions: "flex items-center gap-2",
  successMessage:
    "text-green-600 text-sm font-medium flex items-center gap-1 animate-fadeIn",

  tabsContainer:
    "bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto",
  tabsNav: "flex whitespace-nowrap p-1",
  tabButtonBase:
    "px-4 py-3 text-sm font-medium transition-colors flex items-center gap-2 rounded-lg flex-1 justify-center",
  tabButtonActive: "bg-blue-50 text-primary",
  tabButtonInactive: "text-gray-500 hover:bg-gray-50 hover:text-gray-700",

  contentContainer:
    "bg-white p-6 rounded-xl border border-gray-100 shadow-sm animate-fadeIn",
  sectionHeader:
    "text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-50",

  grid: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
  gridFull: "grid grid-cols-1 gap-6 mb-6",
  label: "block text-sm font-medium text-gray-700 mb-1.5",
  textarea:
    "block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2.5 border text-sm min-h-[120px]",
  helperText: "text-xs text-gray-500 mt-1",

  logoContainer: "flex items-center gap-4",
  logoPreview:
    "w-16 h-16 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 overflow-hidden",
  logoImage: "w-full h-full object-cover",

  placeholderContainer:
    "flex flex-col items-center justify-center py-20 text-gray-400",
  placeholderIcon: "w-16 h-16 mb-4 opacity-50",
  placeholderText: "text-lg font-medium",

  switchLabel: "relative inline-flex items-center cursor-pointer",
  switchInput: "sr-only peer",
  switchSlider:
    "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary",
  switchText: "ml-3 text-sm font-medium text-gray-900",

  card: "border border-gray-200 rounded-lg p-4 hover:border-blue-200 transition-colors cursor-pointer",
  cardActive: "border-2 border-primary bg-blue-50 rounded-lg p-4 cursor-pointer",
  cardTitle: "font-medium text-gray-900",
  cardDescription: "text-sm text-gray-500 mt-1",

  integrationItem:
    "flex items-center justify-between p-4 border border-gray-200 rounded-lg",
  integrationInfo: "flex items-center gap-4",
  integrationIcon:
    "w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500",
  integrationName: "font-medium text-gray-900",
  integrationStatus:
    "text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full",

  colorOption:
    "w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 ring-2 ring-offset-2",
  colorGrid: "flex gap-3 mt-2",

  paymentGrid: "grid grid-cols-2 md:grid-cols-4 gap-4",
  paymentCard:
    "relative flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all duration-200",
  paymentCardActive:
    "border-2 border-primary bg-blue-50/50 text-primary shadow-sm",
  paymentCardInactive:
    "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-400 grayscale",
  paymentIcon: "mb-3 transform transition-transform duration-200",
  paymentLabel: "text-sm font-medium text-center",
  checkIcon: "absolute top-2 right-2 text-primary w-5 h-5 animate-scaleIn",
};
