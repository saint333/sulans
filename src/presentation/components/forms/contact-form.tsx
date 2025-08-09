'use client';
import { Button } from '@/presentation/components/ui/button';
import { Send } from 'lucide-react';

/**
 * Componente de formulario de contacto reutilizable
 */
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

export function ContactForm({ onSubmit, className = "space-y-6" }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para recopilar los datos del formulario
    if (onSubmit) {
      const formData = new FormData(e.target as HTMLFormElement);
      onSubmit({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      });
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            name="email"
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
          name="subject"
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
          name="message"
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
