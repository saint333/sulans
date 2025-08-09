import { Header } from '@/presentation/components/layout/header';
import { Footer } from '@/presentation/components/layout/footer';
import { HeroSection } from '@/presentation/components/sections/hero-section';
import { StatsSection } from '@/presentation/components/sections/stats-section';

/**
 * Página principal de la aplicación
 * Arquitectura limpia: Esta página actúa como el controlador/presentador
 * que orquesta los componentes de la capa de presentación
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      
      <main>
        <HeroSection />
        <StatsSection />
        
        {/* Message Section */}
        <MessageSection />
      </main>
      
      <Footer />
    </div>
  );
}

/**
 * Sección de mensaje de agradecimiento
 */
function MessageSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-[#36d6fa] via-[#6366f1] to-[#36d6fa] rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Gracias por estos años increíbles
          </h3>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
            A nuestros profesores, familias y amigos: sin ustedes esto no habría sido posible. 
            Llevamos con nosotros todo lo aprendido y los momentos compartidos. 
            Este no es un adiós, es un &ldquo;hasta pronto&rdquo; mientras construimos nuestros sueños.
          </p>
        </div>
      </div>
    </section>
  );
}
