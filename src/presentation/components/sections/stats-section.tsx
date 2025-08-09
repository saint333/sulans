import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { COLORS } from '../../../shared/constants/app.constants';

/**
 * Sección de estadísticas de la promoción
 */
export function StatsSection() {
  const stats = [
    {
      id: '1',
      number: '5',
      title: 'Años Juntos',
      description: 'Desde primero de secundaria hasta graduarnos',
      gradient: `linear-gradient(to bottom right, ${COLORS.PRIMARY}, ${COLORS.PRIMARY_LIGHT})`,
      borderColor: `${COLORS.PRIMARY}/20`,
    },
    {
      id: '2',
      number: '35',
      title: 'Compañeros',
      description: 'Amigos que se convirtieron en familia',
      gradient: `linear-gradient(to bottom right, ${COLORS.ACCENT_GREEN}, ${COLORS.PRIMARY})`,
      borderColor: `${COLORS.ACCENT_GREEN}/20`,
    },
    {
      id: '3',
      number: '∞',
      title: 'Recuerdos',
      description: 'Momentos que nunca olvidaremos',
      gradient: `linear-gradient(to bottom right, ${COLORS.SECONDARY}, ${COLORS.PRIMARY})`,
      borderColor: `${COLORS.SECONDARY}/20`,
    },
    {
      id: '4',
      icon: <Star className="h-8 w-8 text-white" />,
      title: 'Futuro Brillante',
      description: 'Listos para conquistar el mundo',
      gradient: `linear-gradient(to bottom right, ${COLORS.ACCENT_ORANGE}, ${COLORS.PRIMARY})`,
      borderColor: `${COLORS.ACCENT_ORANGE}/20`,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
      <div className="container mx-auto">
        <h3 
          className="text-3xl font-bold text-center bg-clip-text text-transparent mb-12"
          style={{
            backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`
          }}
        >
          Nuestro Recorrido
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Componente individual de estadística
 */
interface StatCardProps {
  number?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
}

function StatCard({ number, icon, title, description, gradient, borderColor }: StatCardProps) {
  return (
    <Card 
      className="text-center hover:scale-105 transition-transform duration-300 dark:bg-gray-800/80"
      style={{ borderColor }}
    >
      <CardHeader>
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
          style={{ background: gradient }}
        >
          {number ? (
            <span className="text-2xl font-bold text-white">{number}</span>
          ) : (
            icon
          )}
        </div>
        <CardTitle className="text-xl text-gray-800 dark:text-gray-200">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
