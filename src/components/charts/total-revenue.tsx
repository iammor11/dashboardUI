"use client";
import { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartData = {
  name: string;
  online: number;
  offline: number;
};

const data: ChartData[] = [
  { name: "Monday", online: 13000, offline: 11000 },
  { name: "Tuesday", online: 15000, offline: 10000 },
  { name: "Wednesday", online: 5000, offline: 22000 },
  { name: "Thursday", online: 14000, offline: 6000 },
  { name: "Friday", online: 11000, offline: 9500 },
  { name: "Saturday", online: 15000, offline: 12000 },
  { name: "Sunday", online: 20000, offline: 10000 },
];

export default function TotalRevenueChart() {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    setChartData(
      data.map((item) => ({
        ...item,
        online: item.online / 1000,
        offline: item.offline / 1000,
      }))
    );
  }, []);

  return (
    <div className="w-full max-w-full mx-auto pt-2 pb-2 bg-white rounded-xl shadow-md h-max">
      <h2 className="text-xl font-bold ml-3 text-[#0D0E51] mb-4">
        Total Revenue
      </h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            className="right-[20px]"
            barCategoryGap="20%"
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{ fontSize: 10 }}
              angle={-20}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}k`}
              tick={{ fontSize: 13 }}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              contentStyle={{
                fontSize: "14px",
                padding: "8px",
                borderRadius: "4px",
              }}
            />

            <Bar
              name="Online Sales"
              dataKey="online"
              fill="#007BFF"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Bar
              name="Offline Sales"
              dataKey="offline"
              fill="#00e096"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ paddingTop: 20 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
