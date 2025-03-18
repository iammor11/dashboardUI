"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type UserType = {
  name: string
  role: string
  email: string
  avatar: string
  joinDate: string
  lastActive: string
  notifications: number
  tasks: number
}

const defaultUser: UserType = {
  name: "Musfiq",
  role: "Admin",
  email: "musfiq@syspay.com",
  avatar: "/placeholder.svg?height=80&width=80",
  joinDate: "Jan 12, 2023",
  lastActive: "Today at 2:34 PM",
  notifications: 5,
  tasks: 12,
}

type UserContextType = {
  user: UserType
  isProfileOpen: boolean
  toggleProfile: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user] = useState<UserType>(defaultUser)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen)

  return <UserContext.Provider value={{ user, isProfileOpen, toggleProfile }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

