import { Promotion, PromotionPhoto } from '../entities/promotion.entity';

/**
 * Repository interface para gestionar la promoción
 */
export interface PromotionRepository {
  /**
   * Obtiene la información de la promoción
   */
  getPromotionInfo(): Promise<Promotion>;

  /**
   * Obtiene las fotos de la promoción
   */
  getPromotionPhotos(): Promise<PromotionPhoto[]>;

  /**
   * Agrega una nueva foto a la promoción
   */
  addPromotionPhoto(photo: Omit<PromotionPhoto, 'id' | 'uploadDate'>): Promise<PromotionPhoto>;

  /**
   * Actualiza la información de la promoción
   */
  updatePromotionInfo(promotion: Partial<Promotion>): Promise<Promotion>;
}
