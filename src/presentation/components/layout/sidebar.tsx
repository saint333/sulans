"use client";

import { useTheme } from "@/presentation/components/layout/theme-provider";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Camera,
  TrendingUp,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/shared/hooks/use-auth";
import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Componente Sidebar para el dashboard
 */
export function Sidebar() {
  const { theme } = useTheme();
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const backgroundColor = theme === "dark" ? "bg-gray-900/80" : "bg-white/80";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";

  return (
    <>
      {/* Botón de toggle para dispositivos móviles */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-gradient-to-r from-[#36d6fa] to-[#6366f1] text-white shadow-lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 h-screen w-64 ${backgroundColor} backdrop-blur-md border-r border-gray-300 dark:border-gray-700 shadow-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(to right, #36d6fa, #6366f1)",
              }}
            >
              <LayoutDashboard className="h-6 w-6 text-white" />
            </div>
            <h2 className={`text-xl font-bold ${textColor}`}>Dashboard</h2>
          </div>

          {/* Menús */}
          <nav className="space-y-4">
            <SidebarLink href="/dashboard" icon={<TrendingUp />}>
              Inicio
            </SidebarLink>
            <SidebarLink href="/dashboard/users" icon={<Users />}>
              Usuarios
            </SidebarLink>
            <SidebarLink href="/dashboard/events" icon={<Calendar />}>
              Eventos
            </SidebarLink>
            <SidebarLink href="/dashboard/gallery" icon={<Camera />}>
              Galería
            </SidebarLink>
            <SidebarLink href="/dashboard/messages" icon={<MessageSquare />}>
              Mensajes
            </SidebarLink>

            {/* Botón de cerrar sesión */}
            <button
              onClick={logout}
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[#36d6fa] transition-colors font-medium"
            >
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
}

/**
 * Componente para los links del Sidebar
 */
interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function SidebarLink({ href, icon, children }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[#36d6fa] transition-colors font-medium"
    >
      {icon}
      {children}
    </Link>
  );
}
