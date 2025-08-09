import { Header } from '@/presentation/components/layout/header';
import { Footer } from '@/presentation/components/layout/footer';
import { Camera, Image as ImageIcon, Download, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';
import { APP_CONFIG, COLORS } from '@/shared/constants/app.constants';

/**
 * Página de galería de fotos
 */
export default function GalleryPage() {
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
                <Camera className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#36d6fa] to-[#6366f1] bg-clip-text text-transparent mb-4">
              Galería de Recuerdos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Los mejores momentos de nuestra promoción {APP_CONFIG.GRADUATION_YEAR}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <FilterButton active>Todos</FilterButton>
            <FilterButton>Graduación</FilterButton>
            <FilterButton>Eventos</FilterButton>
            <FilterButton>Recreos</FilterButton>
            <FilterButton>Viajes</FilterButton>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="primary" size="lg">
              Cargar más fotos
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

/**
 * Componente de filtro
 */
interface FilterButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

function FilterButton({ children, active = false }: FilterButtonProps) {
  return (
    <Button 
      variant={active ? "primary" : "outline"}
      className="transition-all duration-300"
    >
      {children}
    </Button>
  );
}

/**
 * Componente de tarjeta de foto
 */
interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  likes: number;
}

interface PhotoCardProps {
  photo: Photo;
}

function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          <ImageIcon className="h-16 w-16 text-gray-400" />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <CardHeader className="p-4">
        <CardTitle className="text-sm font-medium">{photo.title}</CardTitle>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{photo.category}</span>
          <div className="flex items-center gap-1">
            <Heart className="h-3 w-3" />
            <span>{photo.likes}</span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

// Mock data
const photos: Photo[] = [
  { id: '1', url: '', title: 'Ceremonia de Graduación', category: 'Graduación', likes: 45 },
  { id: '2', url: '', title: 'Foto Grupal 5to Año', category: 'Graduación', likes: 38 },
  { id: '3', url: '', title: 'Viaje de Egresados', category: 'Viajes', likes: 52 },
  { id: '4', url: '', title: 'Recreo Divertido', category: 'Recreos', likes: 23 },
  { id: '5', url: '', title: 'Acto Patrio', category: 'Eventos', likes: 31 },
  { id: '6', url: '', title: 'Feria de Ciencias', category: 'Eventos', likes: 28 },
  { id: '7', url: '', title: 'Último Día de Clases', category: 'Recreos', likes: 67 },
  { id: '8', url: '', title: 'Entrega de Diplomas', category: 'Graduación', likes: 89 },
];
