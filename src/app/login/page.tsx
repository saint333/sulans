'use client';

import { PageLayout } from '@/presentation/components/layout/page-layout';
import { LogIn, UserPlus, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';
import { APP_CONFIG, COLORS } from '@/shared/constants/app.constants';
import { useState } from 'react';

/**
 * Página de login y registro
 */
export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            <form className="space-y-6">
              {/* Nombre completo (solo en registro) */}
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:bg-gray-700 dark:text-white"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:bg-gray-700 dark:text-white"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:bg-gray-700 dark:text-white"
                    placeholder="Tu contraseña"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirmar contraseña (solo en registro) */}
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirmar contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:bg-gray-700 dark:text-white"
                      placeholder="Confirma tu contraseña"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
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
                    <a href="#" className="text-[#36d6fa] hover:underline">
                      ¿Olvidaste tu contraseña?
                    </a>
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
                      <a href="#" className="text-[#36d6fa] hover:underline">
                        términos y condiciones
                      </a>
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
              >
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
        <div className="mt-8 text-center">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#36d6fa]/20">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
              Promoción {APP_CONFIG.GRADUATION_YEAR}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Únete a la comunidad digital de nuestra promoción. Comparte recuerdos, mantente conectado y participa en nuestras reuniones.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
