"use client"

import { useEffect, useRef } from "react"

export default function VisitorInsights() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && chartRef.current) {
      const container = chartRef.current
      container.innerHTML = ""

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("width", "100%")
      svg.setAttribute("height", "130px")
      svg.setAttribute("viewBox", "0 0 300 100")

      const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path1.setAttribute(
        "d",
        "M0,70 C20,60 40,50 60,40 C80,30 100,20 120,30 C140,40 160,50 180,40 C200,30 220,20 240,30 C260,40 280,50 300,60",
      )
      path1.setAttribute("fill", "none")
      path1.setAttribute("stroke", "#8b5cf6")
      path1.setAttribute("stroke-width", "2")

      const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path2.setAttribute(
        "d",
        "M0,50 C20,60 40,70 60,60 C80,50 100,40 120,50 C140,60 160,70 180,60 C200,50 220,40 240,50 C260,60 280,70 300,60",
      )
      path2.setAttribute("fill", "none")
      path2.setAttribute("stroke", "#ef4444")
      path2.setAttribute("stroke-width", "2")

      const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path3.setAttribute(
        "d",
        "M0,60 C20,50 40,40 60,50 C80,60 100,70 120,60 C140,50 160,40 180,50 C200,60 220,70 240,60 C260,50 280,40 300,50",
      )
      path3.setAttribute("fill", "none")
      path3.setAttribute("stroke", "#10b981")
      path3.setAttribute("stroke-width", "2")

      const dots1 = [
        [60, 40],
        [120, 30],
        [180, 40],
        [240, 30],
        [300, 60],
      ]

      dots1.forEach(([x, y]) => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        circle.setAttribute("cx", x.toString())
        circle.setAttribute("cy", y.toString())
        circle.setAttribute("r", "4")
        circle.setAttribute("fill", "white")
        circle.setAttribute("stroke", "#8b5cf6")
        circle.setAttribute("stroke-width", "2")
        svg.appendChild(circle)
      })

      const highlightedDot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      highlightedDot.setAttribute("cx", "180")
      highlightedDot.setAttribute("cy", "60")
      highlightedDot.setAttribute("r", "6")
      highlightedDot.setAttribute("fill", "#ec4899")
      highlightedDot.setAttribute("stroke", "white")
      highlightedDot.setAttribute("stroke-width", "2")
      svg.appendChild(highlightedDot)

      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      const xLabelsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
      xLabelsGroup.setAttribute("transform", "translate(0, 110)")

      months.forEach((month, index) => {
        const x = index * 25
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text")
        text.setAttribute("x", x.toString())
        text.setAttribute("y", "0")
        text.setAttribute("font-size", "8")
        text.setAttribute("text-anchor", "middle")
        text.setAttribute("fill", "#6b7280")
        text.textContent = month
        xLabelsGroup.appendChild(text)
      })

      const yValues = ["0", "100", "200", "300", "400"]
      const yLabelsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")

      yValues.forEach((value, index) => {
        const y = 100 - index * 25
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text")
        text.setAttribute("x", "-20")
        text.setAttribute("y", y.toString())
        text.setAttribute("font-size", "8")
        text.setAttribute("text-anchor", "end")
        text.setAttribute("fill", "#6b7280")
        text.textContent = value
        yLabelsGroup.appendChild(text)
      })

      svg.appendChild(path1)
      svg.appendChild(path2)
      svg.appendChild(path3)
      svg.appendChild(xLabelsGroup)
      svg.appendChild(yLabelsGroup)

      container.appendChild(svg)

      const legend = document.createElement("div")
      legend.className = "flex flex-wrap justify-center mt-4 gap-4"

      const legend1 = document.createElement("div")
      legend1.className = "flex items-center"
      const dot1 = document.createElement("div")
      dot1.className = "w-3 h-3 rounded-full bg-purple-500 mr-2"
      const text1 = document.createElement("span")
      text1.className = "text-xs text-gray-600"
      text1.textContent = "Loyal Customers"
      legend1.appendChild(dot1)
      legend1.appendChild(text1)

      const legend2 = document.createElement("div")
      legend2.className = "flex items-center"
      const dot2 = document.createElement("div")
      dot2.className = "w-3 h-3 rounded-full bg-red-500 mr-2"
      const text2 = document.createElement("span")
      text2.className = "text-xs text-gray-600"
      text2.textContent = "New Customers"
      legend2.appendChild(dot2)
      legend2.appendChild(text2)

      const legend3 = document.createElement("div")
      legend3.className = "flex items-center"
      const dot3 = document.createElement("div")
      dot3.className = "w-3 h-3 rounded-full bg-green-500 mr-2"
      const text3 = document.createElement("span")
      text3.className = "text-xs text-gray-600"
      text3.textContent = "Unique Customers"
      legend3.appendChild(dot3)
      legend3.appendChild(text3)

      legend.appendChild(legend1)
      legend.appendChild(legend2)
      legend.appendChild(legend3)
      container.appendChild(legend)
    }
  }, [])

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm h-full">
      <h2 className="text-lg font-semibold mb-4">Visitor Insights</h2>
      <div ref={chartRef} className="w-full h-max"></div>
    </div>
  )
}

