'use client';
import { Button } from '@/presentation/components/ui/button';
import { Input } from '@/presentation/components/ui/input';
import { Textarea } from '@/presentation/components/ui/textarea';
import { Select } from '@/presentation/components/ui/select';
import { Send, User, Mail, MessageSquare, Tag } from 'lucide-react';

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
        <Input
          type="text"
          id="name"
          name="name"
          label="Nombre"
          placeholder="Tu nombre completo"
          icon={User}
          required
        />
        <Input
          type="email"
          id="email"
          name="email"
          label="Email"
          placeholder="tu@email.com"
          icon={Mail}
          required
        />
      </div>

      <Select
        id="subject"
        name="subject"
        label="Asunto"
        placeholder="Selecciona un tema"
        icon={Tag}
        options={[
          { value: 'reunion', label: 'Organizar reunión' },
          { value: 'eventos', label: 'Propuesta de evento' },
          { value: 'noticias', label: 'Compartir noticias' },
          { value: 'fotos', label: 'Enviar fotos' },
          { value: 'general', label: 'Consulta general' },
          { value: 'otro', label: 'Otro' },
        ]}
        required
      />

      <Textarea
        id="message"
        name="message"
        label="Mensaje"
        placeholder="Escribe tu mensaje aquí..."
        icon={MessageSquare}
        rows={5}
        required
      />

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
