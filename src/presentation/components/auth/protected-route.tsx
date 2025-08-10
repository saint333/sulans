'use client';

import { useAuth } from '@/shared/hooks/use-auth';
import { ReactNode } from 'react';
import { Card, CardContent } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';
import { Lock, LogIn } from 'lucide-react';
import Link from 'next/link';

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#36d6fa] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#36d6fa] to-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Acceso Restringido
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Esta página es solo para miembros de la promoción. 
              Inicia sesión para acceder.
            </p>
            
            <Link href="/login">
              <Button variant="primary" size="lg" className="w-full">
                <LogIn className="h-5 w-5 mr-2" />
                Iniciar Sesión
              </Button>
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              ¿No tienes cuenta? Contacta al administrador.
            </p>
            
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-xs text-blue-700 dark:text-blue-300">
                <strong>Demo:</strong> Usa admin@promocion2024.com / admin123
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
