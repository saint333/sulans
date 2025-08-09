import { Calendar, Users } from 'lucide-react';
import { APP_CONFIG, COLORS } from '../../../shared/constants/app.constants';
import { formatDate } from '../../../shared/utils/date.utils';

/**
 * Componente Hero Section - Sección principal de bienvenida
 */
export function HeroSection() {
  const graduationDate = new Date(APP_CONFIG.GRADUATION_DATE);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#36d6fa] via-[#6366f1] to-[#36d6fa] bg-clip-text text-transparent mb-6 animate-pulse">
          ¡Lo Logramos!
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Después de años de esfuerzo, risas, lágrimas y amistad, finalmente llegamos al final de esta etapa.
          Celebremos juntos nuestro logro.
        </p>

        <GraduationInfo 
          graduationDate={graduationDate}
          totalStudents={APP_CONFIG.TOTAL_STUDENTS}
        />
      </div>
    </section>
  );
}

/**
 * Componente de información de graduación
 */
interface GraduationInfoProps {
  graduationDate: Date;
  totalStudents: number;
}

function GraduationInfo({ graduationDate, totalStudents }: GraduationInfoProps) {
  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-xl border border-[#36d6fa]/20">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`
          }}
        >
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Graduación: {formatDate(graduationDate, 'long')}
        </span>
      </div>
      
      <div className="flex items-center justify-center gap-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(to right, ${COLORS.ACCENT_GREEN}, ${COLORS.PRIMARY})`
          }}
        >
          <Users className="h-6 w-6 text-white" />
        </div>
        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {totalStudents} Graduados Orgullosos
        </span>
      </div>
    </div>
  );
}
