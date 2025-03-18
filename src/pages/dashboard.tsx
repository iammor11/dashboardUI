"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import TotalRevenue from "../components/charts/total-revenue";
import CustomerSatisfaction from "../components/charts/customer-satisfaction";
import TargetVsReality from "../components/charts/target-vs-reality";
import VisitorInsights from "../components/charts/visitor-insights";
import SalesMapping from "../components/charts/sales-mapping";
import VolumeVsService from "../components/charts/volume-vs-service";
import Sidebar from "../components/sidebar";
import TodaySales from "../components/today-sales";
import TopProducts from "../components/top-products";
import { UserProvider } from "@/context/user-context";

export default function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1150);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <UserProvider>
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        {isMobile && !isSidebarCollapsed && (
          <div className="fixed  bg-black/50 z-40" onClick={toggleSidebar} />
        )}

        <Sidebar
          collapsed={isSidebarCollapsed}
          onToggle={toggleSidebar}
          className={
            isMobile
              ? `w-64 transform ${
                  isSidebarCollapsed ? "-translate-x-full" : "translate-x-0"
                }`
              : `${isSidebarCollapsed ? "w-16" : "w-[17%]"}`
          }
        />

        <div
          className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
            !isMobile && !isSidebarCollapsed ? "" : "ml-0"
          }`}
          style={{
            width:
              !isMobile && !isSidebarCollapsed ? "calc(100% - 16rem)" : "100%",
          }}
        >
          <Navbar onMenuClick={toggleSidebar} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <TodaySales />
              </div>
              <div className="lg:col-span-1">
                <VisitorInsights />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="md:col-span-2 lg:col-span-2">
                <TotalRevenue />
              </div>
              <div className="md:col-span-1 lg:col-span-1">
                <CustomerSatisfaction />
              </div>
              <div className="md:col-span-1 lg:col-span-1">
                <TargetVsReality />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="md:col-span-2 lg:col-span-2">
                <TopProducts />
              </div>
              <div className="md:col-span-1 lg:col-span-1">
                <SalesMapping />
              </div>
              <div className="md:col-span-1 lg:col-span-1">
                <VolumeVsService />
              </div>
            </div>
          </main>
        </div>
      </div>
    </UserProvider>
  );
}
