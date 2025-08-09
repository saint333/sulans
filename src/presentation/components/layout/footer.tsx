import { GraduationCap, Heart } from 'lucide-react';
import { APP_CONFIG, SOCIAL_LINKS } from '../../../shared/constants/app.constants';

/**
 * Componente Footer de la aplicación
 */
export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-[#36d6fa] to-[#6366f1] rounded-full flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-[#36d6fa] to-[#6366f1] bg-clip-text text-transparent">
            {APP_CONFIG.APP_NAME} {APP_CONFIG.GRADUATION_YEAR}
          </span>
        </div>
        
        <p className="text-gray-400 mb-6">
          &ldquo;El futuro pertenece a aquellos que creen en la belleza de sus sueños&rdquo; - Eleanor Roosevelt
        </p>
        
        <div className="flex justify-center gap-6 mb-6">
          <FooterLink href={SOCIAL_LINKS.FACEBOOK}>Facebook</FooterLink>
          <FooterLink href={SOCIAL_LINKS.INSTAGRAM}>Instagram</FooterLink>
          <FooterLink href={SOCIAL_LINKS.WHATSAPP}>WhatsApp</FooterLink>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-red-500" /> para la {APP_CONFIG.APP_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * Componente Link del Footer
 */
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#36d6fa] transition-colors font-medium"
    >
      {children}
    </a>
  );
}
