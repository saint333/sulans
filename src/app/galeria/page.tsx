import { PageLayout } from '@/presentation/components/layout/page-layout';
import { PageHero } from '@/presentation/components/sections/page-hero';
import { CallToAction } from '@/presentation/components/sections/call-to-action';
import { Camera, Image as ImageIcon, Download, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';
import { APP_CONFIG } from '@/shared/constants/app.constants';

/**
 * Página de galería de fotos
 */
export default function GalleryPage() {
  return (
    <PageLayout>
      <PageHero
        icon={Camera}
        title="Galería de Recuerdos"
        description={`Revive los mejores momentos de nuestra promoción ${APP_CONFIG.GRADUATION_YEAR}`}
      />

      <div className="container mx-auto">
        {/* Filtros */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={filter.id === 'all' ? 'primary' : 'outline'}
              className="capitalize"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>

      <CallToAction
        title="¿Tienes más fotos?"
        description="Comparte tus recuerdos con toda la promoción y ayúdanos a completar nuestra colección."
        buttonText="Subir Fotos"
      />
    </PageLayout>
  );
}

/**
 * Tipos de foto
 */
interface Photo {
  id: string;
  title: string;
  category: 'graduation' | 'events' | 'trips' | 'daily' | 'sports';
  date: string;
  likes: number;
  downloads: number;
}

/**
 * Componente de tarjeta de foto
 */
interface PhotoCardProps {
  photo: Photo;
}

function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Card className="group overflow-hidden hover:scale-105 transition-all duration-300">
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          <ImageIcon className="h-12 w-12 text-gray-400" />
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardHeader className="p-4">
        <CardTitle className="text-sm font-medium">{photo.title}</CardTitle>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{photo.date}</span>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {photo.likes}
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

// Mock data
const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'graduation', label: 'Graduación' },
  { id: 'events', label: 'Eventos' },
  { id: 'trips', label: 'Viajes' },
  { id: 'daily', label: 'Día a día' },
  { id: 'sports', label: 'Deportes' },
];

const photos: Photo[] = [
  {
    id: '1',
    title: 'Ceremonia de Graduación',
    category: 'graduation',
    date: '15 Dic 2019',
    likes: 45,
    downloads: 12,
  },
  {
    id: '2',
    title: 'Viaje a Bariloche',
    category: 'trips',
    date: '20 Nov 2019',
    likes: 32,
    downloads: 8,
  },
  {
    id: '3',
    title: 'Feria de Ciencias',
    category: 'events',
    date: '15 Sep 2019',
    likes: 28,
    downloads: 5,
  },
  {
    id: '4',
    title: 'Recreo en el patio',
    category: 'daily',
    date: '10 Jun 2019',
    likes: 19,
    downloads: 3,
  },
  {
    id: '5',
    title: 'Torneo de fútbol',
    category: 'sports',
    date: '22 Ago 2019',
    likes: 25,
    downloads: 7,
  },
  {
    id: '6',
    title: 'Acto del 25 de Mayo',
    category: 'events',
    date: '25 May 2019',
    likes: 31,
    downloads: 9,
  },
];
