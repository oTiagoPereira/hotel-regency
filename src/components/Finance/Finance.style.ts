export const FinanceStyles = {
  container: "space-y-6",

  // Header Section
  header:
    "flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm",
  filtersLeft: "flex flex-wrap gap-3 w-full xl:w-auto items-center",
  dateInputGroup: "flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto",

  headerRight: "flex flex-wrap items-center gap-3 w-full xl:w-auto justify-end",

  // Metric Cards Grid
  metricsGrid: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6",
  metricCard:
    "bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-40 hover:shadow-md transition-shadow",
  metricHeader: "flex justify-between items-start",
  metricTitle: "text-sm font-medium text-gray-500",
  metricIcon: "p-2.5 rounded-lg bg-opacity-10",
  metricContent: "flex flex-col gap-2",
  metricValue: "text-2xl font-bold text-gray-900 tracking-tight",
  metricTrend: "text-sm font-medium flex items-center gap-1 mt-1",
  trendUp: "text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit",
  trendDown: "text-red-600 bg-red-50 px-2 py-0.5 rounded-full w-fit",

  // Charts Grid
  chartsGrid: "grid grid-cols-1 xl:grid-cols-2 gap-6",
  chartCard:
    "bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow",
  chartHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8",
  chartTitle: "text-lg font-bold text-gray-900",
  chartActions: "flex bg-gray-100 p-1 rounded-lg",
  chartButton:
    "px-3 py-1.5 text-xs font-medium rounded-md text-gray-600 hover:text-gray-900 transition-colors",
  chartButtonActive:
    "px-3 py-1.5 text-xs font-medium rounded-md bg-white text-gray-900 shadow-sm",
  chartContainer: "h-80 w-full",
};
