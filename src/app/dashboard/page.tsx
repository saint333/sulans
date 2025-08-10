'use client';

import { PageLayout } from '@/presentation/components/layout/page-layout';
import { ProtectedRoute } from '@/presentation/components/auth/protected-route';
import { useAuth } from '@/shared/hooks/use-auth';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Camera, 
  Mail, 
  TrendingUp, 
  Clock,
  Star,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { COLORS } from '@/shared/constants/app.constants';
import Link from 'next/link';

/**
 * Página de Dashboard
 */
export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

/**
 * Contenido del Dashboard (protegido)
 */
function DashboardContent() {
  const { user } = useAuth();

  return (
    <PageLayout>
      <div className="container mx-auto py-8">
        {/* Header del Dashboard */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`
              }}
            >
              <LayoutDashboard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Bienvenido de vuelta, {user?.name}
              </p>
            </div>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={Users}
              title="Compañeros"
              value="35"
              subtitle="En la promoción"
              color="blue"
            />
            <StatCard
              icon={Calendar}
              title="Eventos"
              value="12"
              subtitle="Este año"
              color="green"
            />
            <StatCard
              icon={Camera}
              title="Fotos"
              value="284"
              subtitle="En la galería"
              color="purple"
            />
            <StatCard
              icon={MessageSquare}
              title="Mensajes"
              value="47"
              subtitle="Sin leer"
              color="orange"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Accesos rápidos */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-[#36d6fa]" />
                  Accesos Rápidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <QuickAccessCard
                    href="/estudiantes"
                    icon={Users}
                    title="Ver Compañeros"
                    description="Explora el directorio de la promoción"
                  />
                  <QuickAccessCard
                    href="/galeria"
                    icon={Camera}
                    title="Galería de Fotos"
                    description="Revive los mejores momentos"
                  />
                  <QuickAccessCard
                    href="/eventos"
                    icon={Calendar}
                    title="Próximos Eventos"
                    description="Mantente al día con las actividades"
                  />
                  <QuickAccessCard
                    href="/contacto"
                    icon={Mail}
                    title="Enviar Mensaje"
                    description="Contacta con la organización"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Panel lateral */}
          <div className="space-y-6">
            {/* Actividad reciente */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#36d6fa]" />
                  Actividad Reciente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ActivityItem
                  icon={Camera}
                  text="Se agregaron 8 fotos nuevas a la galería"
                  time="Hace 2 horas"
                />
                <ActivityItem
                  icon={Users}
                  text="María González actualizó su perfil"
                  time="Hace 5 horas"
                />
                <ActivityItem
                  icon={Calendar}
                  text="Nuevo evento: Reunión de fin de año"
                  time="Hace 1 día"
                />
                <ActivityItem
                  icon={MessageSquare}
                  text="3 mensajes nuevos en el grupo"
                  time="Hace 2 días"
                />
              </CardContent>
            </Card>

            {/* Próximos eventos */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#36d6fa]" />
                  Próximos Eventos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <EventPreview
                  title="Reunión de Promoción"
                  date="15 Ago 2025"
                  location="Centro Cultural"
                />
                <EventPreview
                  title="Cena de Reencuentro"
                  date="10 Sep 2025"
                  location="Restaurante El Encuentro"
                />
                <EventPreview
                  title="Picnic Familiar"
                  date="5 Oct 2025"
                  location="Parque Central"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

/**
 * Componente de tarjeta de estadística
 */
interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  subtitle: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

function StatCard({ icon: Icon, title, value, subtitle, color }: StatCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {value}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {subtitle}
            </p>
          </div>
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorClasses[color]} flex items-center justify-center`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Componente de acceso rápido
 */
interface QuickAccessCardProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function QuickAccessCard({ href, icon: Icon, title, description }: QuickAccessCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer border-2 hover:border-[#36d6fa]/50">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#36d6fa] to-[#6366f1] flex items-center justify-center">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                {title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

/**
 * Componente de item de actividad
 */
interface ActivityItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  time: string;
}

function ActivityItem({ icon: Icon, text, time }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-[#36d6fa]/10 flex items-center justify-center">
        <Icon className="h-4 w-4 text-[#36d6fa]" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-900 dark:text-gray-100">{text}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">{time}</p>
      </div>
    </div>
  );
}

/**
 * Componente de preview de evento
 */
interface EventPreviewProps {
  title: string;
  date: string;
  location: string;
}

function EventPreview({ title, date, location }: EventPreviewProps) {
  return (
    <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
      <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
        {title}
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
        📅 {date} • 📍 {location}
      </p>
    </div>
  );
}
