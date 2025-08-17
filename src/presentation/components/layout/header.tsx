"use client";

import { GraduationCap } from "lucide-react";
import {
  COLORS,
  APP_CONFIG,
  NAVIGATION,
} from "../../../shared/constants/app.constants";
import { ThemeToggle } from "../layout/theme-toggle";
import Link from "next/link";
import { useTheme } from "@/presentation/components/layout/theme-provider";
import { useHydration } from "@/shared/hooks/use-hydration";

/**
 * Componente Header principal de la aplicación
 */
export function Header() {
  const { theme } = useTheme();
  const hydrated = useHydration();

  const backgroundColor = theme === "dark" ? "bg-gray-900/80" : "bg-white/80";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";

  if (!hydrated) {
    return null; // Evita renderizar hasta que el cliente esté hidratado
  }

  return (
    <header
      className={`sticky top-0 z-50 ${backgroundColor} backdrop-blur-md border-b ${borderColor} shadow-md transition-colors duration-300`}
    >
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between flex-col sm:flex-row'>
          {/* Logo y título con link al inicio */}
          <Link
            href='/'
            className='flex items-center gap-3 hover:opacity-80 transition-opacity'
          >
            <div
              className='w-10 h-10 rounded-full flex items-center justify-center'
              style={{
                background: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`,
              }}
            >
              <GraduationCap className='h-6 w-6 text-white' />
            </div>
            <h1
              className='text-2xl font-bold bg-clip-text text-transparent'
              style={{
                backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`,
              }}
            >
              {APP_CONFIG.APP_NAME} {APP_CONFIG.GRADUATION_YEAR}
            </h1>
          </Link>

          {/* Navegación */}
          <nav className='hidden md:flex gap-6 items-center'>
            {/* Links públicos */}
            <HeaderLink href={NAVIGATION.CONTACT}>Contacto</HeaderLink>
            <HeaderLink href={NAVIGATION.LOGIN}>Iniciar Sesión</HeaderLink>
            <ThemeToggle />
          </nav>

          {/* Menú móvil - simplificado */}
          <div className='md:hidden flex items-center gap-2'>
            <HeaderLink href={NAVIGATION.LOGIN}>Iniciar Sesión</HeaderLink>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Componente Link del Header
 */
interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

function HeaderLink({ href, children }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className='text-gray-600 dark:text-gray-300 hover:text-[#36d6fa] transition-colors font-medium'
    >
      {children}
    </Link>
  );
}
