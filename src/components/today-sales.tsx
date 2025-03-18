import { Download, FileText, ShoppingBag, Tag, Users } from "lucide-react"
import { useState } from "react"

export default function TodaySales() {
  const [salesData, setSalesData] = useState([
    {
      title: "Total Sales",
      value: "$1k",
      change: "+8% from yesterday",
      icon: <FileText className="h-4 w-4 text-red-500" />,
      bgColor: "bg-red-50",
      iconBgColor: "bg-red-100",
    },
    {
      title: "Total Order",
      value: "300",
      change: "+5% from yesterday",
      icon: <ShoppingBag className="h-4 w-4 text-yellow-500" />,
      bgColor: "bg-yellow-50",
      iconBgColor: "bg-yellow-100",
    },
    {
      title: "Product Sold",
      value: "5",
      change: "+1.2% from yesterday",
      icon: <Tag className="h-4 w-4 text-green-500" />,
      bgColor: "bg-green-50",
      iconBgColor: "bg-green-100",
    },
    {
      title: "New Customers",
      value: "8",
      change: "+0.5% from yesterday",
      icon: <Users className="h-4 w-4 text-purple-500" />,
      bgColor: "bg-purple-50",
      iconBgColor: "bg-purple-100",
    },
  ])

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-max">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Today`s Sales</h2>
          <p className="text-sm text-gray-500">Sales Summary</p>
        </div>
        <button className="flex items-center text-sm bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm text-gray-700 hover:bg-gray-100">
          <Download className="h-4 w-4 mr-2" />
          Export
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4">
        {salesData?.map((item, index) => (
          <div key={index} className={`${item.bgColor} rounded-xl p-3 shadow-sm flex flex-col items-start`}>
            <div className={`${item.iconBgColor} h-8 w-8 rounded-full flex items-center justify-center mb-3`}>
              {item.icon}
            </div>
            <p className="text-xl font-bold text-gray-900 block">{item.value}</p>
            <p className="text-[14px] text-gray-600 block mt-2 mb-2">{item.title}</p>
            <p className="text-xs text-blue-500 block w-full mt-1">{item.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}