/**
 * Entidad Promotion - Representa la promoción de secundaria
 */
export interface Promotion {
  readonly id: string;
  readonly name: string;
  readonly year: number;
  readonly graduationDate: Date;
  readonly school: string;
  readonly motto: string;
  readonly totalStudents: number;
  readonly photos: PromotionPhoto[];
  readonly events: Event[];
  readonly statistics: PromotionStatistics;
}

/**
 * Entidad PromotionPhoto - Fotos de la promoción
 */
export interface PromotionPhoto {
  readonly id: string;
  readonly url: string;
  readonly title: string;
  readonly description?: string;
  readonly uploadDate: Date;
  readonly tags: string[];
}

/**
 * Entidad Event - Eventos de la promoción
 */
export interface Event {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly date: Date;
  readonly location: string;
  readonly type: EventType;
  readonly photos: string[];
}

/**
 * Estadísticas de la promoción
 */
export interface PromotionStatistics {
  readonly yearsStudied: number;
  readonly totalMemories: number;
  readonly totalPhotos: number;
  readonly totalEvents: number;
}

/**
 * Tipos de eventos
 */
export enum EventType {
  GRADUATION = 'graduation',
  REUNION = 'reunion',
  CELEBRATION = 'celebration',
  ACADEMIC = 'academic',
  SOCIAL = 'social',
}
