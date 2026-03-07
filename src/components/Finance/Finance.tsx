import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import {
  AttachMoney,
  KingBed,
  Cancel,
  TrendingUp,
  FileDownload,
  Refresh,
  Search,
} from "@mui/icons-material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import { FinanceStyles as styles } from "./Finance.style";

export default function Finance() {
  const { t } = useTranslation();
  const [period, setPeriod] = useState("6m");
  // const [exportFormat, setExportFormat] = useState("pdf"); // Removido, pois usamos a seleção de ação única por enquanto, ou controlada com a redefinição

  const handleExport = (format: string) => {
    console.log(`Exporting as ${format}`);
    // Aqui a lógica de exportação
  };

  const revenueData = [
    { name: t("dashboard.finance.charts.months.jan"), value: 42000 },
    { name: t("dashboard.finance.charts.months.feb"), value: 38000 },
    { name: t("dashboard.finance.charts.months.mar"), value: 45000 },
    { name: t("dashboard.finance.charts.months.apr"), value: 52000 },
    { name: t("dashboard.finance.charts.months.may"), value: 48000 },
    { name: t("dashboard.finance.charts.months.jun"), value: 60000 },
  ];

  const occupancyData = [
    { name: t("dashboard.finance.charts.months.jan"), value: 82 },
    { name: t("dashboard.finance.charts.months.feb"), value: 78 },
    { name: t("dashboard.finance.charts.months.mar"), value: 85 },
    { name: t("dashboard.finance.charts.months.apr"), value: 88 },
    { name: t("dashboard.finance.charts.months.may"), value: 84 },
    { name: t("dashboard.finance.charts.months.jun"), value: 89 },
  ];

  const cancellationsData = [
    { name: t("dashboard.finance.charts.months.jan"), value: 5.2 },
    { name: t("dashboard.finance.charts.months.feb"), value: 4.8 },
    { name: t("dashboard.finance.charts.months.mar"), value: 6.1 },
    { name: t("dashboard.finance.charts.months.apr"), value: 4.0 },
    { name: t("dashboard.finance.charts.months.may"), value: 5.3 },
    { name: t("dashboard.finance.charts.months.jun"), value: 4.2 },
  ];

  const avgValueData = [
    { name: t("dashboard.finance.charts.months.jan"), value: 1120 },
    { name: t("dashboard.finance.charts.months.feb"), value: 1180 },
    { name: t("dashboard.finance.charts.months.mar"), value: 1210 },
    { name: t("dashboard.finance.charts.months.apr"), value: 1195 },
    { name: t("dashboard.finance.charts.months.may"), value: 1235 },
    { name: t("dashboard.finance.charts.months.jun"), value: 1247 },
  ];

  return (
    <div className={styles.container}>
      {/* Header Filters */}
      <div className={styles.header}>
        <div className={styles.filtersLeft}>
          <div className={styles.dateInputGroup}>
            <Input
              type="date"
              defaultValue="2025-01-01"
              containerClassName="w-auto"
            />
            <span className="text-text-muted">-</span>
            <Input
              type="date"
              defaultValue="2025-06-28"
              containerClassName="w-auto"
            />
          </div>
          <Select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            containerClassName="w-full sm:w-48"
          >
            <option value="1m">{t("dashboard.finance.filters.l1m")}</option>
            <option value="3m">{t("dashboard.finance.filters.l3m")}</option>
            <option value="6m">{t("dashboard.finance.filters.l6m")}</option>
            <option value="1y">{t("dashboard.finance.filters.l1y")}</option>
          </Select>
          <Button
            label={t("dashboard.finance.filters.apply")}
            Icon={Search}
            size="small"
            className="h-[50px]"
          />
          <Button
            label={t("dashboard.finance.filters.reset")}
            variant="minimal"
            Icon={Refresh}
            size="small"
            className="h-[50px]"
          />
        </div>
        <div className={styles.headerRight}>
          <Select
            value=""
            onChange={(e) => handleExport(e.target.value)}
            containerClassName="w-auto"
            icon={<FileDownload fontSize="small" />}
            iconClassName="text-primary"
            arrowClassName="text-primary"
            placeholder={t("dashboard.actions.export")}
          >
            <option value="pdf" className="text-primary">
              PDF
            </option>
            <option value="excel" className="text-primary">
              Excel
            </option>
            <option value="csv" className="text-primary">
              CSV
            </option>
          </Select>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>
              {t("dashboard.finance.metrics.totalRevenue")}
            </span>
            <div className={`${styles.metricIcon} bg-success-light text-success`}>
              <AttachMoney />
            </div>
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricValue}>R$ 284.750</span>
            <span className={styles.trendUp}>
              <TrendingUp fontSize="inherit" />
              +12.5% {t("dashboard.finance.metrics.vsLastMonth")}
            </span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>
              {t("dashboard.finance.metrics.occupancyRate")}
            </span>
            <div className={`${styles.metricIcon} bg-info-light text-info`}>
              <KingBed />
            </div>
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricValue}>87.3%</span>
            <span className={styles.trendUp}>
              <TrendingUp fontSize="inherit" />
              +3.2% {t("dashboard.finance.metrics.vsLastMonth")}
            </span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>
              {t("dashboard.finance.metrics.cancellations")}
            </span>
            <div className={`${styles.metricIcon} bg-error-light text-error`}>
              <Cancel />
            </div>
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricValue}>4.2%</span>
            <span className={styles.trendDown}>
              <TrendingUp
                fontSize="inherit"
                style={{ transform: "rotate(180deg)" }}
              />
              -1.1% {t("dashboard.finance.metrics.vsLastMonth")}
            </span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>
              {t("dashboard.finance.metrics.avgValue")}
            </span>
            <div
              className={`${styles.metricIcon} bg-accent-light text-accent`}
            >
              <TrendingUp />
            </div>
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricValue}>R$ 1.247</span>
            <span className={styles.trendUp}>
              <TrendingUp fontSize="inherit" />
              +8.4% {t("dashboard.finance.metrics.vsLastMonth")}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartTitle}>
              {t("dashboard.finance.charts.monthlyRevenue")}
            </h3>
            <div className={styles.chartActions}>
              <button 
                className={styles.chartButtonActive}
                aria-label={t("dashboard.finance.charts.filter6m", "Filtrar por 6 meses")}
                title={t("dashboard.finance.charts.filter6m", "Filtrar por 6 meses")}
              >
                6M
              </button>
              <button 
                className={styles.chartButton}
                aria-label={t("dashboard.finance.charts.filter1y", "Filtrar por 1 ano")}
                title={t("dashboard.finance.charts.filter1y", "Filtrar por 1 ano")}
              >
                1A
              </button>
            </div>
          </div>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  tickMargin={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `R$ ${value / 1000}k`}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  width={60}
                />
                <Tooltip
                  formatter={(value) => [
                    `R$ ${value}`,
                    t("dashboard.finance.charts.revenue"),
                  ]}
                  cursor={{ fill: "#EFF6FF" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                  barSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartTitle}>
              {t("dashboard.finance.charts.occupancyRate")}
            </h3>
            <span className="text-sm text-text-muted">
              {t("dashboard.finance.charts.avg")}: 87.3%
            </span>
          </div>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={occupancyData}
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  tickMargin={10}
                />
                <YAxis
                  domain={[0, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  width={40}
                />
                <Tooltip
                  formatter={(value) => [
                    `${value}%`,
                    t("dashboard.finance.charts.occupancy"),
                  ]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "#10B981",
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartTitle}>
              {t("dashboard.finance.charts.cancellationsPerMonth")}
            </h3>
            <span className="text-sm text-text-muted">
              {t("dashboard.finance.charts.goal")}: &lt; 5%
            </span>
          </div>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={cancellationsData}
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  tickMargin={10}
                />
                <YAxis
                  domain={[0, "auto"]}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  width={40}
                />
                <Tooltip
                  formatter={(value) => [
                    `${value}%`,
                    t("dashboard.finance.charts.rate"),
                  ]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#EF4444"
                  fill="#FEE2E2"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartTitle}>
              {t("dashboard.finance.charts.avgValuePerReservation")}
            </h3>
            <span className="text-sm text-text-muted">
              {t("dashboard.finance.charts.current")}: R$ 1.247
            </span>
          </div>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={avgValueData}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  tickMargin={10}
                />
                <YAxis
                  domain={["auto", "auto"]}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `R$ ${value}`}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  width={60}
                />
                <Tooltip
                  formatter={(value) => [
                    `R$ ${value}`,
                    t("dashboard.finance.charts.avgValue"),
                  ]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "#8B5CF6",
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
