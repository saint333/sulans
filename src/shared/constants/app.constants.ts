/**
 * Constantes de la aplicación
 */
export const APP_CONFIG = {
  APP_NAME: 'SULANS',
  APP_DESCRIPTION: 'Promoción 2024 - Colegio Secundario',
  GRADUATION_YEAR: '2014 - 2019',
  GRADUATION_DATE: '2024-12-15',
  TOTAL_STUDENTS: 35,
  SCHOOL_NAME: 'Colegio Secundario SULANS',
} as const;

/**
 * Constantes de la paleta de colores
 */
export const COLORS = {
  PRIMARY: '#36d6fa',
  PRIMARY_DARK: '#0ba0d6',
  PRIMARY_LIGHT: '#87e8fc',
  SECONDARY: '#6366f1',
  ACCENT_GREEN: '#10b981',
  ACCENT_ORANGE: '#f59e0b',
  GRADIENT_START: '#f0f9ff',
  GRADIENT_END: '#e0f2fe',
} as const;

/**
 * Constantes de navegación
 */
export const NAVIGATION = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  GALLERY: '/galeria',
  STUDENTS: '/estudiantes',
  EVENTS: '/eventos',
  CONTACT: '/contacto',
  LOGIN: '/login',
} as const;

/**
 * Constantes de redes sociales
 */
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/promocion2024',
  INSTAGRAM: 'https://instagram.com/promocion2024',
  WHATSAPP: 'https://wa.me/123456789',
} as const;
