'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error('Credenciales inválidas');
      }

      setIsRedirecting(true); // Activar estado de redirección
      router.push('/dashboard');
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error al iniciar sesión',
      };
    } finally {
      setIsRedirecting(false); // Desactivar estado de redirección
    }
  };

  const logout = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  const requireAuth = () => {
    if (status === 'loading') {
      return false; // Todavía cargando
    }

    if (status === 'unauthenticated') {
      router.push('/login');
      return false;
    }

    return true;
  };

  return {
    user: session?.user,
    isAuthenticated: !!session,
    isLoading: status === 'loading',
    isRedirecting,
    login,
    logout,
    requireAuth,
  };
}
