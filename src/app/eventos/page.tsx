import { Header } from '@/presentation/components/layout/header';
import { Footer } from '@/presentation/components/layout/footer';
import { Calendar, MapPin, Clock, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';
import { APP_CONFIG, COLORS } from '@/shared/constants/app.constants';
import { formatDate } from '@/shared/utils/date.utils';

/**
 * Página de eventos
 */
export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`
                }}
              >
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#36d6fa] to-[#6366f1] bg-clip-text text-transparent mb-4">
              Nuestros Eventos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Los momentos más importantes de nuestra promoción {APP_CONFIG.GRADUATION_YEAR}
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {events.map((event, index) => (
                <EventCard key={event.id} event={event} isLast={index === events.length - 1} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-xl border border-[#36d6fa]/20">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                ¿Tienes fotos de algún evento?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Comparte tus recuerdos con toda la promoción
              </p>
              <Button variant="primary" size="lg">
                Subir Fotos
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

/**
 * Tipos de eventos
 */
interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  type: 'graduation' | 'reunion' | 'celebration' | 'academic' | 'social';
  attendees: number;
  photos: number;
  featured: boolean;
}

/**
 * Componente de tarjeta de evento
 */
interface EventCardProps {
  event: Event;
  isLast: boolean;
}

function EventCard({ event, isLast }: EventCardProps) {
  const getEventColor = (type: Event['type']) => {
    switch (type) {
      case 'graduation': return COLORS.PRIMARY;
      case 'academic': return COLORS.SECONDARY;
      case 'social': return COLORS.ACCENT_GREEN;
      case 'celebration': return COLORS.ACCENT_ORANGE;
      default: return COLORS.PRIMARY;
    }
  };

  const getEventTypeLabel = (type: Event['type']) => {
    switch (type) {
      case 'graduation': return 'Graduación';
      case 'academic': return 'Académico';
      case 'social': return 'Social';
      case 'celebration': return 'Celebración';
      case 'reunion': return 'Reunión';
      default: return 'Evento';
    }
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
      )}
      
      <div className="flex gap-6">
        {/* Timeline dot */}
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10"
          style={{ backgroundColor: getEventColor(event.type) }}
        >
          <Calendar className="h-8 w-8 text-white" />
        </div>

        {/* Event card */}
        <Card className="flex-1 hover:scale-105 transition-all duration-300">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className="px-2 py-1 text-xs rounded-full text-white font-medium"
                    style={{ backgroundColor: getEventColor(event.type) }}
                  >
                    {getEventTypeLabel(event.type)}
                  </span>
                  {event.featured && (
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  )}
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="mt-2">{event.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{formatDate(event.date, 'medium')}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{event.attendees} asistentes</span>
              </div>
            </div>
            
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">
                Ver Fotos ({event.photos})
              </Button>
              <Button variant="ghost" size="sm">
                Compartir
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Mock data
const events: Event[] = [
  {
    id: '1',
    title: 'Ceremonia de Graduación',
    description: 'El momento más esperado: la entrega oficial de diplomas y el cierre de una etapa única.',
    date: new Date('2019-12-15'),
    location: 'Auditorio Principal del Colegio',
    type: 'graduation',
    attendees: 35,
    photos: 156,
    featured: true,
  },
  {
    id: '2',
    title: 'Viaje de Egresados',
    description: 'Una semana inolvidable en Bariloche con toda la promoción.',
    date: new Date('2019-11-20'),
    location: 'Bariloche, Río Negro',
    type: 'celebration',
    attendees: 32,
    photos: 487,
    featured: true,
  },
  {
    id: '3',
    title: 'Último Primer Día',
    description: 'El inicio de nuestro último año juntos como estudiantes.',
    date: new Date('2019-03-04'),
    location: 'Aulas del 5to Año',
    type: 'academic',
    attendees: 35,
    photos: 23,
    featured: false,
  },
  {
    id: '4',
    title: 'Feria de Ciencias 2019',
    description: 'Presentación de nuestros proyectos científicos ante toda la comunidad educativa.',
    date: new Date('2019-09-15'),
    location: 'Patio Central',
    type: 'academic',
    attendees: 150,
    photos: 89,
    featured: false,
  },
  {
    id: '5',
    title: 'Acto del 25 de Mayo',
    description: 'Representación teatral sobre la Revolución de Mayo.',
    date: new Date('2019-05-25'),
    location: 'Salón de Actos',
    type: 'social',
    attendees: 200,
    photos: 45,
    featured: false,
  },
];
