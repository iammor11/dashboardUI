"use client";
import { useEffect, useRef } from "react";

export default function TargetVsReality() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && chartRef.current) {
      const container = chartRef.current;
      container.innerHTML = "";

      // Create a bar chart container
      const chartContainer = document.createElement("div");
      chartContainer.className =
        "flex items-end h-42 gap-6 justify-center w-full";

      // Data
      const months = ["Jan", "Feb", "Mar"];
      const targetData = [40, 50, 20]; 
      const actualData = [30, 60, 50]; 

      months.forEach((month, index) => {
        const group = document.createElement("div");
        group.className = "flex flex-col items-center w-10";

        const barsContainer = document.createElement("div");
        barsContainer.className = "flex items-end gap-2 w-full justify-center";

        const targetBar = document.createElement("div");
        targetBar.className = "w-6 bg-yellow-400 rounded-t";
        targetBar.style.height = `${targetData[index] * 2}px`;

        const actualBar = document.createElement("div");
        actualBar.className = "w-6 bg-[#4ab58e] rounded-t";
        actualBar.style.height = `${actualData[index] * 2}px`;

        barsContainer.appendChild(actualBar);
        barsContainer.appendChild(targetBar);

        const label = document.createElement("div");
        label.className = "text-xs text-gray-500 mt-2";
        label.textContent = month;

        group.appendChild(barsContainer);
        group.appendChild(label);
        chartContainer.appendChild(group);
      });

      container.appendChild(chartContainer);
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold text-gray-900 mb-6 text-left">
        Target vs Reality
      </h2>
      <div ref={chartRef} className="w-full flex justify-center"></div>
      
      <div className="flex flex-col gap-3  pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-2">
              <span className="text-green-500 text-xl">📊</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Reality Sales</p>
              <p className="text-xs text-gray-400">Global</p>
            </div>
          </div>
          <p className="text-[16px] font-bold text-green-500">8,823</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-2">
              <span className="text-yellow-500 text-xl">🏆</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Target Sales</p>
              <p className="text-xs text-gray-400">Commercial</p>
            </div>
          </div>
          <p className="text-[16px] font-bold text-yellow-500">12,122</p>
        </div>
      </div>
    </div>
  );
}
