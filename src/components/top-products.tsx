import { useState } from "react"

export default function TopProducts() {
  const [products, setProducts] = useState([
    {
      id: "01",
      name: "Home Decor Range",
      sales: 45,
      color: "bg-blue-500",
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",
    },
    {
      id: "02",
      name: "Disney Princess",
      sales: 29,
      color: "bg-green-500",
      bgColor: "bg-green-100",
      textColor: "text-green-500",
    },
    {
      id: "03",
      name: "Bathroom Essentials",
      sales: 18,
      color: "bg-purple-500",
      bgColor: "bg-purple-100",
      textColor: "text-purple-500",
    },

  ])

  return (
    <div className="bg-white p-2 pl-4 rounded-xl shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Top Products</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <th className="pb-3">#</th>
              <th className="pb-3">Name</th>
              <th className="pb-3">Popularity</th>
              <th className="pb-3">Sales</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr
                key={product.id}
                className="border-t border-gray-200 text-gray-700"
              >
                <td className="py-3 text-sm">{product.id}</td>
                <td className="py-3 text-sm font-medium">{product.name}</td>
                <td className="py-3">
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 relative">
                      <div
                        className={`${product.color} h-2 rounded-full`}
                        style={{ width: `${product.sales}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <span
                    className={`text-xs font-medium px-2 py-1 ${product.bgColor} ${product.textColor} rounded-full`}
                  >
                    {product.sales}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
