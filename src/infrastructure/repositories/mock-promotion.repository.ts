import { Promotion, PromotionPhoto, EventType } from '../../core/entities/promotion.entity';
import { PromotionRepository } from '../../core/repositories/promotion.repository';

/**
 * Implementación mock del repositorio de promoción
 */
export class MockPromotionRepository implements PromotionRepository {
  private promotion: Promotion = {
    id: '1',
    name: 'Promoción 2024',
    year: 2024,
    graduationDate: new Date('2024-12-15'),
    school: 'Colegio Secundario SULANS',
    motto: 'El futuro pertenece a aquellos que creen en la belleza de sus sueños',
    totalStudents: 35,
    photos: [
      {
        id: '1',
        url: '/images/graduation-1.jpg',
        title: 'Ceremonia de Graduación',
        description: 'Momento especial de la entrega de diplomas',
        uploadDate: new Date('2024-12-15'),
        tags: ['graduación', 'ceremonia', 'diplomas'],
      },
      {
        id: '2',
        url: '/images/group-photo.jpg',
        title: 'Foto Grupal',
        description: 'Toda la promoción reunida',
        uploadDate: new Date('2024-12-15'),
        tags: ['grupal', 'promoción', 'recuerdo'],
      },
    ],
    events: [
      {
        id: '1',
        title: 'Ceremonia de Graduación',
        description: 'Evento principal de graduación con entrega de diplomas',
        date: new Date('2024-12-15'),
        location: 'Auditorio Principal',
        type: EventType.GRADUATION,
        photos: ['/images/graduation-1.jpg', '/images/graduation-2.jpg'],
      },
      {
        id: '2',
        title: 'Fiesta de Egresados',
        description: 'Celebración de fin de curso con toda la promoción',
        date: new Date('2024-12-20'),
        location: 'Salón de Eventos "La Quinta"',
        type: EventType.CELEBRATION,
        photos: ['/images/party-1.jpg', '/images/party-2.jpg'],
      },
    ],
    statistics: {
      yearsStudied: 5,
      totalMemories: 1000,
      totalPhotos: 250,
      totalEvents: 15,
    },
  };

  private photos: PromotionPhoto[] = [...this.promotion.photos];

  async getPromotionInfo(): Promise<Promotion> {
    await this.delay(100);
    return { ...this.promotion };
  }

  async getPromotionPhotos(): Promise<PromotionPhoto[]> {
    await this.delay(150);
    return [...this.photos];
  }

  async addPromotionPhoto(
    photoData: Omit<PromotionPhoto, 'id' | 'uploadDate'>
  ): Promise<PromotionPhoto> {
    await this.delay(200);
    
    const newPhoto: PromotionPhoto = {
      ...photoData,
      id: (this.photos.length + 1).toString(),
      uploadDate: new Date(),
    };
    
    this.photos.push(newPhoto);
    
    // Crear nueva instancia de promoción con datos actualizados
    this.promotion = {
      ...this.promotion,
      photos: [...this.photos],
      statistics: {
        ...this.promotion.statistics,
        totalPhotos: this.photos.length,
      },
    };
    
    return newPhoto;
  }

  async updatePromotionInfo(promotionData: Partial<Promotion>): Promise<Promotion> {
    await this.delay(150);
    this.promotion = { ...this.promotion, ...promotionData };
    return { ...this.promotion };
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
