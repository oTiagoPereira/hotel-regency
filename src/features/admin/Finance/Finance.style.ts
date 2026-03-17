export const FinanceStyles = {
  container: "space-y-6",

  // Header Section
  header:
    "flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-neutral p-6 rounded-xl border border-border-light shadow-sm",
  filtersLeft: "flex flex-wrap gap-3 w-full xl:w-auto items-center",
  dateInputGroup: "flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 w-full sm:w-auto",

  headerRight: "flex flex-wrap items-center gap-3 w-full xl:w-auto justify-end",

  // Metric Cards Grid
  metricsGrid: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6",
  metricCard:
    "bg-neutral p-6 rounded-xl border border-border-light shadow-sm flex flex-col justify-between h-40 hover:shadow-md transition-shadow",
  metricHeader: "flex justify-between items-start",
  metricTitle: "text-sm font-medium text-text-muted",
  metricIcon: "p-2.5 rounded-lg bg-opacity-10",
  metricContent: "flex flex-col gap-2",
  metricValue: "text-2xl font-bold text-text-color tracking-tight",
  metricTrend: "text-sm font-medium flex items-center gap-1 mt-1",
  trendUp: "text-success bg-success-light px-2 py-0.5 rounded-full w-fit",
  trendDown: "text-error bg-error-light px-2 py-0.5 rounded-full w-fit",

  // Charts Grid
  chartsGrid: "grid grid-cols-1 xl:grid-cols-2 gap-6",
  chartCard:
    "bg-neutral p-6 rounded-xl border border-border-light shadow-sm hover:shadow-md transition-shadow",
  chartHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8",
  chartTitle: "text-lg font-bold text-text-color",
  chartActions: "flex bg-surface p-1 rounded-lg",
  chartButton:
    "px-3 py-1.5 text-xs font-medium rounded-md text-text-color/80 hover:text-text-color transition-colors",
  chartButtonActive:
    "px-3 py-1.5 text-xs font-medium rounded-md bg-neutral text-text-color shadow-sm",
  chartContainer: "h-80 w-full",
};
