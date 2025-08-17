"use client";
import React, { useState } from "react";
import { Sidebar } from "@/presentation/components/layout/sidebar";
import { ProtectedRoute } from "@/presentation/components";
import { useTheme } from "@/presentation/components/layout/theme-provider";
import { DashboardHeader } from "@/presentation/components/layout/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const backgroundColor = theme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <ProtectedRoute>
      <div className={`flex ${backgroundColor} ${textColor}`}>
        {isSidebarOpen && <Sidebar />}
        <div className="flex-1 p-4">
          <DashboardHeader
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <main>{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
