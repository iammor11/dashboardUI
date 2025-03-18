"use client"
import Image from "next/image"
import world from "../../assets/image.png"

export default function SalesMapping() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Sales Mapping by Country
      </h2>

      <div className="w-full flex justify-center">
        <Image
          src={world}
          alt="Sales Mapping by Country"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  )
}
