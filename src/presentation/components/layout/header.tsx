'use client';

import { GraduationCap, LogOut, User } from 'lucide-react';
import { COLORS, APP_CONFIG, NAVIGATION } from '../../../shared/constants/app.constants';
import { ThemeToggle } from '../layout/theme-toggle';
import { useAuth } from '@/shared/hooks/use-auth';
import { Button } from '@/presentation/components/ui/button';
import Link from 'next/link';

/**
 * Componente Header principal de la aplicación
 */
export function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-[#36d6fa]/20 dark:border-[#36d6fa]/30 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y título con link al inicio */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`
              }}
            >
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h1 
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`
              }}
            >
              {APP_CONFIG.APP_NAME} {APP_CONFIG.GRADUATION_YEAR}
            </h1>
          </Link>

          {/* Navegación */}
          <nav className="hidden md:flex gap-6 items-center">
            {/* Links públicos */}
            <HeaderLink href={NAVIGATION.CONTACT}>Contacto</HeaderLink>
            
            {/* Links privados - solo para usuarios autenticados */}
            {isAuthenticated && (
              <>
                <HeaderLink href={NAVIGATION.DASHBOARD}>Dashboard</HeaderLink>
                <HeaderLink href={NAVIGATION.GALLERY}>Galería</HeaderLink>
                <HeaderLink href={NAVIGATION.EVENTS}>Eventos</HeaderLink>
                <HeaderLink href={NAVIGATION.STUDENTS}>Estudiantes</HeaderLink>
              </>
            )}

            {/* Autenticación */}
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                {/* Información del usuario */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <User className="h-4 w-4" />
                  <span>Hola, {user?.name}</span>
                </div>
                
                {/* Botón de logout */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Salir
                </Button>
              </div>
            ) : (
              <HeaderLink href={NAVIGATION.LOGIN}>Iniciar Sesión</HeaderLink>
            )}

            <ThemeToggle />
          </nav>

          {/* Menú móvil - simplificado */}
          <div className="md:hidden flex items-center gap-2">
            {isAuthenticated && (
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="p-2"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            )}
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
      className="text-gray-600 dark:text-gray-300 hover:text-[#36d6fa] transition-colors font-medium"
    >
      {children}
    </Link>
  );
}
