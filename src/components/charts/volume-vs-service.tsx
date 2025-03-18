"use client"

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer} from "recharts"

const data = [
  { name: "Jan", Volume: 1135 },
  { name: "Feb", Volume: 1500 },
  { name: "Mar", Volume: 1100 },
  { name: "Apr", Volume: 900 },
  { name: "May", Volume: 800 },
  { name: "Jun", Volume: 950 },
]

export default function VolumeVsService() {
  return (
    <div className="bg-white p-4 pt-6 rounded-xl shadow-md w-full max-w-sm mx-auto">
      <h2 className="text-lg font-bold text-gray-900 mb-3">Volume vs Service Level</h2>

      <div className="w-full h-24">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6b7280" }} />
            <Tooltip />
            <Bar dataKey="Volume" fill="#007bff" barSize={6} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-gray-600 text-xs">Volume</span>
          <span className="ml-1 text-sm font-bold mr-2">135</span>
          <div className="w-3 h-3 rounded-full bg-[#4ab58e] mr-2"></div>
          <span className="text-gray-600 text-xs">Services</span>
          <span className="ml-1 text-sm font-bold">190</span>
        </div>
      </div>
    </div>
  )
}
