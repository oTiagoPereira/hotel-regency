import { memo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

const data = [
  { name: "Seg", value: 45 },
  { name: "Ter", value: 52 },
  { name: "Qua", value: 48 },
  { name: "Qui", value: 61 },
  { name: "Sex", value: 75 },
  { name: "Sáb", value: 85 },
  { name: "Dom", value: 68 },
];

interface OccupancyChartProps {
  period?: string;
}

function OccupancyChart({ period = "7days" }: OccupancyChartProps) {
  const displayData =
    period === "7days"
      ? data
      : [
          { name: "Week 1", value: 65 },
          { name: "Week 2", value: 58 },
          { name: "Week 3", value: 72 },
          { name: "Week 4", value: 81 },
        ];

  const { t } = useTranslation();

  return (
    <div style={{ width: "100%", flex: 1, minHeight: 0 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={displayData}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2f4f4fcd" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2f4f4f" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            dy={10}
          />
          <YAxis hide={true} domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            itemStyle={{ color: "#1f2937", fontWeight: 600 }}
            formatter={(value?: number) => [
              `${value}%`,
              t("dashboard.stats.occupancy"),
            ]}
            labelStyle={{ color: "#6b7280", marginBottom: "0.25rem" }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2f4f4f"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorOccupancy)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(OccupancyChart);
