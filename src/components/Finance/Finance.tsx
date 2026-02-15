import { useState } from "react";
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
  const [period, setPeriod] = useState("6m");
  // const [exportFormat, setExportFormat] = useState("pdf"); // Removed as we use single action select for now, or controlled with reset

  const handleExport = (format: string) => {
    console.log(`Exporting as ${format}`);
    // Here logic to export
    // Reset selection effectively by not keeping state or resetting it in a real implementation
    // For this UI demo, we can just let it be selected or force reset if we controlled it fully
  };

  const revenueData = [
    { name: "Jan", value: 42000 },
    { name: "Fev", value: 38000 },
    { name: "Mar", value: 45000 },
    { name: "Abr", value: 52000 },
    { name: "Mai", value: 48000 },
    { name: "Jun", value: 60000 },
  ];

  const occupancyData = [
    { name: "Jan", value: 82 },
    { name: "Fev", value: 78 },
    { name: "Mar", value: 85 },
    { name: "Abr", value: 88 },
    { name: "Mai", value: 84 },
    { name: "Jun", value: 89 },
  ];

  const cancellationsData = [
    { name: "Jan", value: 5.2 },
    { name: "Fev", value: 4.8 },
    { name: "Mar", value: 6.1 },
    { name: "Abr", value: 4.0 },
    { name: "Mai", value: 5.3 },
    { name: "Jun", value: 4.2 },
  ];

  const avgValueData = [
    { name: "Jan", value: 1120 },
    { name: "Fev", value: 1180 },
    { name: "Mar", value: 1210 },
    { name: "Abr", value: 1195 },
    { name: "Mai", value: 1235 },
    { name: "Jun", value: 1247 },
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
            <span className="text-gray-400">-</span>
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
            <option value="1m">Último mês</option>
            <option value="3m">Últimos 3 meses</option>
            <option value="6m">Últimos 6 meses</option>
            <option value="1y">Último ano</option>
          </Select>
          <Button
            label="Aplicar Filtros"
            Icon={Search}
            size="small"
            className="h-[50px]"
          />
          <Button
            label="Resetar Filtros"
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
            placeholder="Exportar"
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
            <span className={styles.metricTitle}>Receita Total</span>
            <div className={`${styles.metricIcon} bg-green-100 text-green-700`}>
              <AttachMoney />
            </div>
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricValue}>R$ 284.750</span>
            <span className={styles.trendUp}>
              <TrendingUp fontSize="inherit" />
              +12.5% vs mês anterior
            </span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>Taxa de Ocupação</span>
            <div className={`${styles.metricIcon} bg-blue-100 text-blue-600`}>
              <KingBed />
            </div>
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricValue}>87.3%</span>
            <span className={styles.trendUp}>
              <TrendingUp fontSize="inherit" />
              +3.2% vs mês anterior
            </span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>Cancelamentos</span>
            <div className={`${styles.metricIcon} bg-red-100 text-red-600`}>
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
              -1.1% vs mês anterior
            </span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>Valor Médio/Reserva</span>
            <div
              className={`${styles.metricIcon} bg-purple-100 text-purple-600`}
            >
              <TrendingUp />
            </div>
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricValue}>R$ 1.247</span>
            <span className={styles.trendUp}>
              <TrendingUp fontSize="inherit" />
              +8.4% vs mês anterior
            </span>
          </div>
        </div>
      </div>

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartTitle}>Receita Mensal</h3>
            <div className={styles.chartActions}>
              <button className={styles.chartButtonActive}>6M</button>
              <button className={styles.chartButton}>1A</button>
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
                  formatter={(value) => [`R$ ${value}`, "Receita"]}
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
            <h3 className={styles.chartTitle}>Taxa de Ocupação</h3>
            <span className="text-sm text-gray-500">Média: 87.3%</span>
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
                  formatter={(value) => [`${value}%`, "Ocupação"]}
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
            <h3 className={styles.chartTitle}>Cancelamentos por Mês</h3>
            <span className="text-sm text-gray-500">Meta: &lt; 5%</span>
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
                  formatter={(value) => [`${value}%`, "Taxa"]}
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
            <h3 className={styles.chartTitle}>Valor Médio por Reserva</h3>
            <span className="text-sm text-gray-500">Atual: R$ 1.247</span>
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
                  formatter={(value) => [`R$ ${value}`, "Valor Médio"]}
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
