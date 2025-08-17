"use client";

import { useTheme } from "@/presentation/components/layout/theme-provider";
import { usePathname } from "next/navigation";
import { LayoutDashboard } from "lucide-react";
import { Menu, X } from "lucide-react";

/**
 * Componente Header para el dashboard
 */
export function DashboardHeader({ isSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean; toggleSidebar: () => void }) {
  const { theme } = useTheme();
  const pathname = usePathname();

  const backgroundColor = theme === "dark" ? "bg-gray-900/80" : "bg-white/80";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";

  const title = getTitleFromPath(pathname);

  return (
    <header
      className={`sticky top-0 z-40 ${backgroundColor} backdrop-blur-md border-b border-gray-300 dark:border-gray-700 shadow-md transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full bg-gradient-to-r from-[#36d6fa] to-[#6366f1] text-white shadow-lg"
        >
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(to right, #36d6fa, #6366f1)",
          }}
        >
          <LayoutDashboard className="h-6 w-6 text-white" />
        </div>
        <h1 className={`text-2xl font-bold ${textColor}`}>{title}</h1>
      </div>
    </header>
  );
}

/**
 * Obtiene el título basado en la ruta actual
 */
function getTitleFromPath(pathname: string): string {
  const routes: Record<string, string> = {
    "/dashboard": "Inicio",
    "/dashboard/users": "Usuarios",
    "/dashboard/events": "Eventos",
    "/dashboard/gallery": "Galería",
    "/dashboard/messages": "Mensajes",
  };

  return routes[pathname] || "Dashboard";
}
