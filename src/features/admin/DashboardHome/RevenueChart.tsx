import { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useTranslation } from "react-i18next";

const data = [
  { name: "01", value: 12500 },
  { name: "05", value: 15200 },
  { name: "10", value: 18900 },
  { name: "15", value: 14500 },
  { name: "20", value: 21000 },
  { name: "25", value: 24500 },
  { name: "30", value: 19800 },
];

interface RevenueChartProps {
  period?: string;
}

function RevenueChart({ period = "30days" }: RevenueChartProps) {
  // Simulating different data based on period
  const displayData =
    period === "30days"
      ? data
      : period === "6months"
        ? [
            { name: "Jan", value: 145000 },
            { name: "Fev", value: 132000 },
            { name: "Mar", value: 158000 },
            { name: "Abr", value: 149000 },
            { name: "Mai", value: 165000 },
            { name: "Jun", value: 178000 },
          ]
        : [
            { name: "Jan", value: 145000 },
            { name: "Fev", value: 132000 },
            { name: "Mar", value: 158000 },
            { name: "Abr", value: 149000 },
            { name: "Mai", value: 165000 },
            { name: "Jun", value: 178000 },
            { name: "Jul", value: 185000 },
            { name: "Ago", value: 192000 },
            { name: "Set", value: 188000 },
            { name: "Out", value: 195000 },
            { name: "Nov", value: 205000 },
            { name: "Dez", value: 218000 },
          ];

  const { t } = useTranslation();

  const formatCurrency = (value?: number) => {
    if (value === undefined) return "";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div style={{ width: "100%", flex: 1, minHeight: 0 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={displayData}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb" // Color da linha de grade
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            dy={10}
          />
          <YAxis hide={true} />
          <Tooltip
            cursor={{ fill: "#f3f4f6" }}
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            itemStyle={{ color: "#1f2937", fontWeight: 600 }}
            formatter={(value?: number) => [
              formatCurrency(value),
              t("dashboard.stats.revenue"),
            ]}
            labelStyle={{ color: "#6b7280", marginBottom: "0.25rem" }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} animationDuration={1500}>
            {displayData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  index === displayData.length - 1 ? "#2f4f4f" : "#2f4f4fbd"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(RevenueChart);
