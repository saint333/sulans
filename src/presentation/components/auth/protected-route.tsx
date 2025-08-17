"use client";

import { useAuth } from "@/shared/hooks/use-auth";
import { ReactNode } from "react";
import { Card, CardContent } from "@/presentation/components/ui/card";
import { Button } from "@/presentation/components/ui/button";
import { Lock, LogIn } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/presentation/components/layout/theme-provider";
import { useHydration } from "@/shared/hooks/use-hydration";

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, isRedirecting } = useAuth();
  const { theme } = useTheme();

  const hydrated = useHydration();
  if (!hydrated) {
    return null; // Evita renderizar hasta que el cliente esté hidratado
  }

  const backgroundColor = theme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";

  if (isRedirecting) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-4 border-[#36d6fa] mx-auto mb-6'></div>
          <h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
            Redirigiendo...
          </h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Por favor espera mientras te llevamos al inicio.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-4 border-[#36d6fa] mx-auto mb-6'></div>
          <h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
            Por favor espera...
          </h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Estamos procesando tu solicitud.
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated && !isRedirecting) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div
        className={`min-h-screen flex items-center justify-center p-4 ${backgroundColor}`}
      >
        <Card className='w-full max-w-md shadow-xl'>
          <CardContent className='p-8 text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-[#36d6fa] to-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6'>
              <Lock className='h-8 w-8 text-white' />
            </div>

            <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
              Acceso Restringido
            </h2>

            <p className={`text-gray-600 mb-6 ${textColor}`}>
              Esta página es solo para miembros de la promoción. Inicia sesión
              para acceder.
            </p>

            <Link href='/login'>
              <Button variant='primary' className='w-full'>
                <LogIn className='mr-2 h-4 w-4' /> Iniciar Sesión
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
