'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

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

      // Redirigir al dashboard después del login exitoso
      router.push('/dashboard');
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error al iniciar sesión' 
      };
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    router.push('/');
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
    login,
    logout,
    requireAuth,
  };
}
