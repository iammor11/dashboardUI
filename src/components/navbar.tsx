/* eslint-disable @next/next/no-img-element */
"use client"
import { Search, Menu, ChevronDown } from "lucide-react"

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg text-sm w-64 focus:outline-none"
            />
          </div>

          <div className="flex items-center">
            <div className="flex items-center border-r pr-4 mr-4">
              <div className="flex items-center">
                <span className="text-sm font-medium">Eng (US)</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>

            <button
              className="flex items-center hover:bg-gray-50 rounded-lg p-1 transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://s3-alpha-sig.figma.com/img/1b73/04b2/85d08c0f8b29f8fc61ad6621680532e7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HebmvBulLISDoE3gGh9m9L-a502IQkuOMM~vuRDvBE1HWCCvqEgroDPwtVlpwtpmNcsLkB0O6X-JjlASIeghaTNMzTC8Jl9by32L4CXOW4bvcQxkIfY33S5bUWM~loWxkGGV6K1iOVRLD3qndqFZtJ-UQ7JWfCw5yrqsg1u8uMgG-2mSxMmHE55RIRLIgisbWtVYhfPnCIaBh8IN~JLuZmHKm3zJpPiikhG~cvbxvMQTuLnm2WdLfEHkiYT9TZ75gafMMYWP4IF9slrX0tyvfgtJZtUEfTaXrqL-xzqXE7Tys1PpKCwZAKQOlES0PpQ742g~P-ltUbloN5s-5ltvyQ__"  alt="profile" className="h-full w-full object-cover" />
              </div>
              <div className="ml-2 hidden md:block text-left">
                <p className="text-sm font-medium">Osama</p>
                <p className="text-xs text-gray-500">Full Stack</p>
              </div>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

