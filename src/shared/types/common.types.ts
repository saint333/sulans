/**
 * Tipos comunes de la aplicación
 */
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: Date;
}

/**
 * Tipos para errores
 */
export interface AppError {
  code: string;
  message: string;
  details?: unknown;
}

/**
 * Tipos para paginación
 */
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Tipos para filtros
 */
export interface StudentFilters {
  name?: string;
  graduationYear?: number;
  achievements?: string[];
}

/**
 * Tipos para el tema de la aplicación
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Props comunes de componentes
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
