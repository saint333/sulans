import { Promotion, PromotionPhoto } from '../entities/promotion.entity';
import { PromotionRepository } from '../repositories/promotion.repository';

/**
 * Caso de uso para obtener información de la promoción
 */
export class GetPromotionInfoUseCase {
  constructor(private readonly promotionRepository: PromotionRepository) {}

  async execute(): Promise<Promotion> {
    try {
      return await this.promotionRepository.getPromotionInfo();
    } catch (error) {
      throw new Error(`Error al obtener información de la promoción: ${error}`);
    }
  }
}

/**
 * Caso de uso para obtener fotos de la promoción
 */
export class GetPromotionPhotosUseCase {
  constructor(private readonly promotionRepository: PromotionRepository) {}

  async execute(): Promise<PromotionPhoto[]> {
    try {
      return await this.promotionRepository.getPromotionPhotos();
    } catch (error) {
      throw new Error(`Error al obtener fotos de la promoción: ${error}`);
    }
  }
}

/**
 * Caso de uso para agregar foto a la promoción
 */
export class AddPromotionPhotoUseCase {
  constructor(private readonly promotionRepository: PromotionRepository) {}

  async execute(
    photoData: Omit<PromotionPhoto, 'id' | 'uploadDate'>
  ): Promise<PromotionPhoto> {
    if (!photoData.url || !photoData.title) {
      throw new Error('URL y título de la foto son requeridos');
    }

    try {
      return await this.promotionRepository.addPromotionPhoto(photoData);
    } catch (error) {
      throw new Error(`Error al agregar foto: ${error}`);
    }
  }
}
