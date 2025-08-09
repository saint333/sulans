import { GraduationCap } from 'lucide-react';
import { COLORS, APP_CONFIG, NAVIGATION } from '../../../shared/constants/app.constants';
import { ThemeToggle } from '../layout/theme-toggle';
import Link from 'next/link';

/**
 * Componente Header principal de la aplicación
 */
export function Header() {
  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-[#36d6fa]/20 dark:border-[#36d6fa]/30 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
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
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            <HeaderLink href={NAVIGATION.GALLERY}>Galería</HeaderLink>
            <HeaderLink href={NAVIGATION.EVENTS}>Eventos</HeaderLink>
            <HeaderLink href={NAVIGATION.STUDENTS}>Estudiantes</HeaderLink>
            <HeaderLink href={NAVIGATION.CONTACT}>Contacto</HeaderLink>
            <HeaderLink href={NAVIGATION.LOGIN}>Iniciar Sesión</HeaderLink>
            <ThemeToggle />
          </nav>

          <div className="md:hidden">
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
