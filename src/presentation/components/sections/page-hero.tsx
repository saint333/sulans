import { COLORS } from '@/shared/constants/app.constants';
import { LucideIcon } from 'lucide-react';

/**
 * Componente Hero reutilizable para páginas
 */
interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  containerClassName?: string;
}

export function PageHero({ 
  icon: Icon, 
  title, 
  description, 
  containerClassName = "container mx-auto" 
}: PageHeroProps) {
  return (
    <div className={containerClassName}>
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`
            }}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#36d6fa] to-[#6366f1] bg-clip-text text-transparent mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
