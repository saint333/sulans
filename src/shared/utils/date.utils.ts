/**
 * Utilidades para formateo de fechas
 */
export const formatDate = (date: Date, format: 'short' | 'long' | 'medium' = 'medium'): string => {
  const formatOptions: Record<string, Intl.DateTimeFormatOptions> = {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    medium: { year: 'numeric', month: 'long', day: 'numeric' },
    long: { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    },
  };

  return new Intl.DateTimeFormat('es-ES', formatOptions[format]).format(date);
};

/**
 * Calcula la diferencia en años entre dos fechas
 */
export const getYearsDifference = (startDate: Date, endDate: Date = new Date()): number => {
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
  return diffYears;
};

/**
 * Verifica si una fecha es válida
 */
export const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};
