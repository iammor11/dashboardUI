import React from "react";
import { Tooltip, ResponsiveContainer,  CartesianGrid, Area, AreaChart } from "recharts";

const data = [
  { lastMonth: 3000, thisMonth: 4000 },
  { lastMonth: 3100, thisMonth: 4200 },
  { lastMonth: 3200, thisMonth: 4300 },
  { lastMonth: 3004, thisMonth: 4504 },
];

const SatisfactionChart = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-5 shadow-lg rounded-xl">
      <h2 className="text-lg font-bold text-gray-900 text-left mb-4">Customer Satisfaction</h2>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00e096" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#00e096" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip  contentStyle={{ fontSize: "14px", padding: "8px", borderRadius: "4px" }}/>
          
          <Area type="monotone" dataKey="thisMonth" stroke="#00e096" fill="url(#colorThisMonth)" strokeWidth={3} dot={{ r: 4 }} />
          <Area type="monotone" dataKey="lastMonth" stroke="#3b82f6" fill="url(#colorLastMonth)" strokeWidth={3} dot={{ r: 4 }} />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-2 flex justify-around text-gray-700 text-sm">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1">
            <span className="w-4 h-1 bg-blue-500 rounded"></span>
            <span>Last Month</span>
          </div>
          <span className="text-[16px] font-bold">$3,004</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1">
            <span className="w-4 h-1 bg-green-500 rounded"></span>
            <span >This Month</span>
          </div>
          <span className="text-lg font-bold text-[16px]">$4,504</span>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionChart;
