import { Header } from '@/presentation/components/layout/header';
import { Footer } from '@/presentation/components/layout/footer';
import { Users, MapPin, Mail, Phone, Briefcase, Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';
import { APP_CONFIG, COLORS } from '@/shared/constants/app.constants';
import Image from 'next/image';

/**
 * Página de estudiantes
 */
export default function StudentsPage() {
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
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#36d6fa] to-[#6366f1] bg-clip-text text-transparent mb-4">
              Nuestra Promoción
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Conoce a todos los compañeros de la promoción {APP_CONFIG.GRADUATION_YEAR}
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-[#36d6fa]/20">
              <div className="text-3xl font-bold text-[#36d6fa] mb-2">35</div>
              <div className="text-gray-600 dark:text-gray-400">Estudiantes</div>
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-[#36d6fa]/20">
              <div className="text-3xl font-bold text-[#36d6fa] mb-2">28</div>
              <div className="text-gray-600 dark:text-gray-400">En contacto</div>
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-[#36d6fa]/20">
              <div className="text-3xl font-bold text-[#36d6fa] mb-2">15</div>
              <div className="text-gray-600 dark:text-gray-400">Profesionales</div>
            </div>
          </div>

          {/* Filtros y búsqueda */}
          <div className="mb-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filtrar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grid de estudiantes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-xl border border-[#36d6fa]/20">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                ¿Falta tu información?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Actualiza tu perfil y mantén el contacto con tus compañeros
              </p>
              <Button variant="primary" size="lg">
                Actualizar mi perfil
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
 * Tipos de estudiante
 */
interface Student {
  id: string;
  name: string;
  avatar?: string;
  profession?: string;
  company?: string;
  location?: string;
  email?: string;
  phone?: string;
  quote?: string;
  status: 'active' | 'inactive';
}

/**
 * Componente de tarjeta de estudiante
 */
interface StudentCardProps {
  student: Student;
}

function StudentCard({ student }: StudentCardProps) {
  return (
    <Card className="hover:scale-105 transition-all duration-300 shadow-lg">
      <CardContent className="p-6">
        {/* Avatar y estado */}
        <div className="text-center mb-4">
          <div className="relative inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#36d6fa] to-[#6366f1] flex items-center justify-center text-white text-xl font-bold shadow-lg">
              {student.avatar ? (
                <Image
                  src={student.avatar}
                  alt={student.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              ) : (
                student.name.split(' ').map(n => n[0]).join('').slice(0, 2)
              )}
            </div>
            <div 
              className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                student.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
              }`}
              title={student.status === 'active' ? 'En contacto' : 'Sin contacto'}
            />
          </div>
        </div>

        {/* Información básica */}
        <div className="text-center mb-4">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-1">
            {student.name}
          </h3>
          {student.profession && (
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
              <Briefcase className="h-3 w-3" />
              {student.profession}
            </p>
          )}
          {student.company && (
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {student.company}
            </p>
          )}
        </div>

        {/* Ubicación */}
        {student.location && (
          <div className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-500 mb-4">
            <MapPin className="h-3 w-3" />
            {student.location}
          </div>
        )}

        {/* Cita */}
        {student.quote && (
          <div className="text-xs text-gray-600 dark:text-gray-400 italic text-center mb-4 border-l-2 border-[#36d6fa] pl-2">
            &ldquo;{student.quote}&rdquo;
          </div>
        )}

        {/* Acciones */}
        <div className="flex gap-2 justify-center">
          {student.email && (
            <Button 
              variant="ghost" 
              size="sm"
              className="p-2"
              title="Enviar email"
            >
              <Mail className="h-4 w-4" />
            </Button>
          )}
          {student.phone && (
            <Button 
              variant="ghost" 
              size="sm"
              className="p-2"
              title="Llamar"
            >
              <Phone className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Mock data
const students: Student[] = [
  {
    id: '1',
    name: 'María González',
    profession: 'Médica',
    company: 'Hospital Central',
    location: 'Buenos Aires',
    email: 'maria@email.com',
    phone: '+54 11 1234-5678',
    quote: 'Los mejores años de mi vida fueron en el colegio',
    status: 'active',
  },
  {
    id: '2',
    name: 'Juan Pérez',
    profession: 'Ingeniero',
    company: 'Tech Solutions',
    location: 'Córdoba',
    email: 'juan@email.com',
    status: 'active',
  },
  {
    id: '3',
    name: 'Ana López',
    profession: 'Diseñadora Gráfica',
    company: 'Freelance',
    location: 'Rosario',
    quote: 'Extraño nuestros recreos y charlas',
    status: 'active',
  },
  {
    id: '4',
    name: 'Carlos Rodríguez',
    profession: 'Abogado',
    location: 'Mendoza',
    status: 'inactive',
  },
  {
    id: '5',
    name: 'Laura Martínez',
    profession: 'Profesora',
    company: 'Escuela Primaria N°15',
    location: 'La Plata',
    email: 'laura@email.com',
    quote: 'Ahora enseño como nos enseñaron a nosotros',
    status: 'active',
  },
  {
    id: '6',
    name: 'Diego Fernández',
    profession: 'Contador',
    company: 'Estudio Contable',
    location: 'Santa Fe',
    status: 'active',
  },
  {
    id: '7',
    name: 'Sofía García',
    profession: 'Psicóloga',
    location: 'Tucumán',
    email: 'sofia@email.com',
    status: 'active',
  },
  {
    id: '8',
    name: 'Mateo Silva',
    profession: 'Desarrollador',
    company: 'Startup Tech',
    location: 'CABA',
    phone: '+54 11 9876-5432',
    status: 'active',
  },
];
