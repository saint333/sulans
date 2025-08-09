import { Header } from '@/presentation/components/layout/header';
import { Footer } from '@/presentation/components/layout/footer';

/**
 * Layout común para todas las páginas
 */
interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      <main className={`py-20 px-4 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
