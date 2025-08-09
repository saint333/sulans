/**
 * Entidad Student - Representa un estudiante de la promoción
 */
export interface Student {
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly email?: string;
  readonly photo?: string;
  readonly graduationYear: number;
  readonly achievements: Achievement[];
  readonly socialLinks: SocialLink[];
}

/**
 * Entidad Achievement - Logros del estudiante
 */
export interface Achievement {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly date: Date;
  readonly category: AchievementCategory;
}

/**
 * Entidad SocialLink - Enlaces sociales del estudiante
 */
export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly url: string;
}

/**
 * Enums para tipos específicos
 */
export enum AchievementCategory {
  ACADEMIC = 'academic',
  SPORTS = 'sports',
  ARTISTIC = 'artistic',
  SOCIAL = 'social',
}

export enum SocialPlatform {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  WHATSAPP = 'whatsapp',
  LINKEDIN = 'linkedin',
  TWITTER = 'twitter',
}
