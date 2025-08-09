import { PageLayout } from '@/presentation/components/layout/page-layout';
import { PageHero } from '@/presentation/components/sections/page-hero';
import { ContactForm } from '@/presentation/components/forms/contact-form';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, Users, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { APP_CONFIG, COLORS } from '@/shared/constants/app.constants';

/**
 * Página de contacto
 */
export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        icon={MessageCircle}
        title="Contáctanos"
        description="Mantengamos el contacto. Escríbenos para organizar reuniones, compartir noticias o simplemente saludar."
        containerClassName="container mx-auto max-w-6xl"
      />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6" style={{ color: COLORS.PRIMARY }} />
                  Envíanos un mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            {/* Coordinadores */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="h-5 w-5" style={{ color: COLORS.PRIMARY }} />
                  Coordinadores de la Promoción
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {coordinators.map((coordinator, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      {coordinator.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {coordinator.role}
                    </p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${coordinator.email}`} className="hover:text-[#36d6fa]">
                          {coordinator.email}
                        </a>
                      </div>
                      {coordinator.phone && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Phone className="h-4 w-4" />
                          <a href={`tel:${coordinator.phone}`} className="hover:text-[#36d6fa]">
                            {coordinator.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Redes sociales */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Síguenos en redes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#36d6fa] hover:shadow-md transition-all"
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: link.color }}
                      >
                        <link.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          {link.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ubicación */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <MapPin className="h-5 w-5" style={{ color: COLORS.PRIMARY }} />
                  Nuestro lugar de encuentro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Colegio Secundario - Promoción {APP_CONFIG.GRADUATION_YEAR}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Av. Principal 123, Centro<br />
                    Ciudad, Provincia<br />
                    Argentina
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

// Datos mock
const coordinators = [
  {
    name: 'María González',
    role: 'Coordinadora Principal',
    email: 'maria.gonzalez@email.com',
    phone: '+54 11 1234-5678',
  },
  {
    name: 'Juan Pérez',
    role: 'Coordinador de Eventos',
    email: 'juan.perez@email.com',
    phone: '+54 11 8765-4321',
  },
  {
    name: 'Ana López',
    role: 'Coordinadora de Comunicaciones',
    email: 'ana.lopez@email.com',
  },
];

const socialLinks = [
  {
    name: 'Facebook',
    description: 'Grupo cerrado de la promoción',
    url: 'https://facebook.com/promocion2019',
    icon: Facebook,
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    description: 'Fotos y recuerdos',
    url: 'https://instagram.com/promocion2019',
    icon: Instagram,
    color: '#E4405F',
  },
  {
    name: 'WhatsApp',
    description: 'Chat grupal',
    url: 'https://wa.me/group/chat',
    icon: MessageCircle,
    color: '#25D366',
  },
];
