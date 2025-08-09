import { Button } from '@/presentation/components/ui/button';

/**
 * Componente Call to Action reutilizable
 */
interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  containerClassName?: string;
}

export function CallToAction({ 
  title, 
  description, 
  buttonText, 
  onButtonClick,
  buttonHref,
  containerClassName = "text-center mt-16"
}: CallToActionProps) {
  return (
    <div className={containerClassName}>
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-xl border border-[#36d6fa]/20">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
        {buttonHref ? (
          <Button variant="primary" size="lg" className="inline-flex">
            <a href={buttonHref}>{buttonText}</a>
          </Button>
        ) : (
          <Button variant="primary" size="lg" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}
