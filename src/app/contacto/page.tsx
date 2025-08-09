import { Header } from '@/presentation/components/layout/header';
import { Footer } from '@/presentation/components/layout/footer';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, Users, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';
import { APP_CONFIG, COLORS } from '@/shared/constants/app.constants';

/**
 * Página de contacto
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`
                }}
              >
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#36d6fa] to-[#6366f1] bg-clip-text text-transparent mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mantengamos el contacto. Escríbenos para organizar reuniones, compartir noticias o simplemente saludar.
            </p>
          </div>

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
      </main>
      
      <Footer />
    </div>
  );
}

/**
 * Componente del formulario de contacto
 */
function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:bg-gray-700 dark:text-white"
            placeholder="Tu nombre completo"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:bg-gray-700 dark:text-white"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Asunto
        </label>
        <select
          id="subject"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:bg-gray-700 dark:text-white"
        >
          <option value="">Selecciona un tema</option>
          <option value="reunion">Organizar reunión</option>
          <option value="eventos">Propuesta de evento</option>
          <option value="noticias">Compartir noticias</option>
          <option value="fotos">Enviar fotos</option>
          <option value="general">Consulta general</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:bg-gray-700 dark:text-white"
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        className="w-full"
      >
        <Send className="h-5 w-5 mr-2" />
        Enviar mensaje
      </Button>
    </form>
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
