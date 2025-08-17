'use client';

import { PageLayout } from '@/presentation/components/layout/page-layout';
import { Input, PasswordInput } from '@/presentation/components/ui/input';
import { LogIn, UserPlus, Mail, Lock, User, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';
import { APP_CONFIG, COLORS } from '@/shared/constants/app.constants';
import { useAuth } from '@/shared/hooks/use-auth';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Página de login y registro
 */
export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (isLogin) {
      // Proceso de login
      const result = await login(email, password);
      if (!result.success) {
        setError(result.error || 'Error al iniciar sesión');
      }
    } else {
      // Proceso de registro (simplificado para demo)
      setError('El registro no está disponible. Contacta al administrador.');
    }

    setIsLoading(false);
  };

  if (isAuthenticated || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#36d6fa] mx-auto mb-6"></div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Por favor espera...</h2>
          <p className="text-gray-500 dark:text-gray-400">Estamos procesando tu solicitud.</p>
        </div>
      </div>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto max-w-md">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`
              }}
            >
              {isLogin ? (
                <LogIn className="h-8 w-8 text-white" />
              ) : (
                <UserPlus className="h-8 w-8 text-white" />
              )}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#36d6fa] to-[#6366f1] bg-clip-text text-transparent mb-4">
            {isLogin ? 'Bienvenido de vuelta' : 'Únete a nosotros'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {isLogin 
              ? 'Accede a tu cuenta de la promoción'
              : 'Crea tu cuenta para conectar con tus compañeros'
            }
          </p>
        </div>

        {/* Formulario */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Mensaje de error */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">{error}</span>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Nombre completo (solo en registro) */}
              {!isLogin && (
                <Input
                  type="text"
                  id="name"
                  name="name"
                  label="Nombre completo"
                  placeholder="Tu nombre completo"
                  icon={User}
                  required
                />
              )}

              {/* Email */}
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                placeholder="tu@email.com"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Contraseña */}
              <PasswordInput
                id="password"
                name="password"
                label="Contraseña"
                placeholder="Tu contraseña"
                icon={Lock}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Confirmar contraseña (solo en registro) */}
              {!isLogin && (
                <PasswordInput
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirmar contraseña"
                  placeholder="Confirma tu contraseña"
                  icon={Lock}
                  required
                />
              )}

              {/* Recordar sesión / Términos */}
              <div className="flex items-center justify-between text-sm">
                {isLogin ? (
                  <>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#36d6fa] bg-gray-100 border-gray-300 rounded focus:ring-[#36d6fa] dark:focus:ring-[#36d6fa] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <span className="ml-2 text-gray-600 dark:text-gray-400">
                        Recordar sesión
                      </span>
                    </label>
                    <button
                      type="button"
                      className="text-[#36d6fa] hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </>
                ) : (
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#36d6fa] bg-gray-100 border-gray-300 rounded focus:ring-[#36d6fa] dark:focus:ring-[#36d6fa] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-0.5"
                      required
                    />
                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                      Acepto los{' '}
                      <button
                        type="button"
                        className="text-[#36d6fa] hover:underline"
                      >
                        términos y condiciones
                      </button>
                    </span>
                  </label>
                )}
              </div>

              {/* Botón de envío */}
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {isLogin ? 'Iniciando...' : 'Creando...'}
                  </>
                ) : (
                  <>
                    {isLogin ? (
                      <>
                        <LogIn className="h-5 w-5 mr-2" />
                        Iniciar Sesión
                      </>
                    ) : (
                      <>
                        <UserPlus className="h-5 w-5 mr-2" />
                        Crear Cuenta
                      </>
                    )}
                  </>
                )}
              </Button>
            </form>

            {/* Divisor */}
            <div className="my-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                    o
                  </span>
                </div>
              </div>
            </div>

            {/* Cambiar modo */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-[#36d6fa] hover:underline font-medium"
                >
                  {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Información adicional */}
        <div className="mt-8 space-y-4">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#36d6fa]/20">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
              Promoción {APP_CONFIG.GRADUATION_YEAR}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Únete a la comunidad digital de nuestra promoción. Comparte recuerdos, mantente conectado y participa en nuestras reuniones.
            </p>
          </div>

          {/* Credenciales de prueba */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 shadow-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">
              🧪 Credenciales de Prueba
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong className="text-blue-700 dark:text-blue-300">Administrador:</strong>
                <div className="ml-4 text-blue-600 dark:text-blue-400">
                  Email: admin@promocion2024.com<br />
                  Contraseña: admin123
                </div>
              </div>
              <div>
                <strong className="text-blue-700 dark:text-blue-300">Estudiante:</strong>
                <div className="ml-4 text-blue-600 dark:text-blue-400">
                  Email: estudiante@promocion2024.com<br />
                  Contraseña: estudiante123
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
