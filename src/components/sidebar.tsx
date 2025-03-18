"use client"

import Link from "next/link"
import { ShoppingBag, Package, ChartPie, Settings, LogOut } from "lucide-react"
import { useEffect } from "react"
import logo from '../assets/logo.png'
import Image from "next/image"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  className?: string
}

export default function Sidebar({ collapsed, onToggle, className }: SidebarProps) {
  const menuItems = [
    { icon: ChartPie, label: "Dashboard", href: "/", active: true },
    { icon: ShoppingBag, label: "Order", href: "/" },
    { icon: Package, label: "Products", href: "/" },
    { icon: Settings, label: "Settings", href: "/" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar")
      if (sidebar && !sidebar.contains(event.target as Node) && window.innerWidth < 1150 && !collapsed) {
        onToggle()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [collapsed, onToggle])

  return (
    <>
      {(!collapsed && typeof window === 'undefined') ? null : (!collapsed && window.innerWidth < 1150 && (
        <div className="fixed inset-0 bg-black/20 z-20 lg:hidden" onClick={onToggle} />
      ))}

      <aside
        id="sidebar"
        className={`bg-white text-[#737791]  transition-all duration-300 h-full z-30 fixed lg:relative ${className}`}
        style={{ flexShrink: 0 }}
      >
        <div className="p-4 flex items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            width={collapsed ? 40 : 120}
            height={collapsed ? 40 : 120}
            className="transition-all duration-300"
          />
        </div>

        <nav className="mt-8 w-[90%] mx-auto ">
          <ul className="space-y-2">
            {menuItems?.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center py-3 px-4 ${item.active
                    ? "bg-blue-700 text-white rounded-xl"
                    : "hover:bg-blue-700 hover:text-white rounded-xl"
                    } transition-colors duration-200 ${collapsed ? 'justify-center' : ''}`}
                >
                  <item.icon className="h-5 w-5" />
                  {!collapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-[90%] mx-auto mt-4">
          <Link
            href="/logout"
            className={`flex items-center py-3 px-4 hover:bg-blue-700 hover:text-white rounded-xl transition-colors duration-200 ${collapsed ? 'justify-center' : ''
              }`}
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span className="ml-3">Sign Out</span>}
          </Link>
        </div>

        {!collapsed && (
          <div className="absolute bottom-0 w-full p-4">
            <div className="bg-blue-700 rounded-lg p-4 text-center">
              <div className="bg-white h-10 w-10 rounded-full mx-auto flex items-center justify-center text-blue-600">
                <Package className="h-6 w-6" />
              </div>
              <p className="mt-2 text-sm text-white">Get unlimited access</p>
              <button className="mt-3 bg-white text-blue-600 rounded-lg py-2 px-4 text-sm font-bold w-full hover:bg-blue-50 transition-colors">
                Get Pro
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}