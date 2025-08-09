import { Student, AchievementCategory, SocialPlatform } from '../../core/entities/student.entity';
import { StudentRepository } from '../../core/repositories/student.repository';

/**
 * Implementación mock del repositorio de estudiantes
 * En un proyecto real, esto se conectaría a una base de datos
 */
export class MockStudentRepository implements StudentRepository {
  private students: Student[] = [
    {
      id: '1',
      name: 'Ana',
      lastName: 'García',
      email: 'ana.garcia@email.com',
      graduationYear: 2024,
      achievements: [
        {
          id: '1',
          title: 'Mejor Promedio',
          description: 'Obtuvo el mejor promedio de la promoción',
          date: new Date('2024-12-01'),
          category: AchievementCategory.ACADEMIC,
        },
      ],
      socialLinks: [
        {
          platform: SocialPlatform.INSTAGRAM,
          url: 'https://instagram.com/ana.garcia',
        },
      ],
    },
    {
      id: '2',
      name: 'Carlos',
      lastName: 'Rodríguez',
      email: 'carlos.rodriguez@email.com',
      graduationYear: 2024,
      achievements: [
        {
          id: '2',
          title: 'Capitán de Fútbol',
          description: 'Lideró el equipo de fútbol durante 3 años',
          date: new Date('2024-11-15'),
          category: AchievementCategory.SPORTS,
        },
      ],
      socialLinks: [
        {
          platform: SocialPlatform.FACEBOOK,
          url: 'https://facebook.com/carlos.rodriguez',
        },
      ],
    },
    // Más estudiantes de ejemplo...
  ];

  async getAllStudents(): Promise<Student[]> {
    // Simular delay de red
    await this.delay(100);
    return [...this.students];
  }

  async getStudentById(id: string): Promise<Student | null> {
    await this.delay(50);
    return this.students.find(student => student.id === id) || null;
  }

  async searchStudentsByName(name: string): Promise<Student[]> {
    await this.delay(100);
    const searchTerm = name.toLowerCase();
    return this.students.filter(
      student =>
        student.name.toLowerCase().includes(searchTerm) ||
        student.lastName.toLowerCase().includes(searchTerm)
    );
  }

  async createStudent(studentData: Omit<Student, 'id'>): Promise<Student> {
    await this.delay(200);
    const newStudent: Student = {
      ...studentData,
      id: (this.students.length + 1).toString(),
    };
    this.students.push(newStudent);
    return newStudent;
  }

  async updateStudent(id: string, studentData: Partial<Student>): Promise<Student> {
    await this.delay(150);
    const index = this.students.findIndex(student => student.id === id);
    if (index === -1) {
      throw new Error('Estudiante no encontrado');
    }
    
    this.students[index] = { ...this.students[index], ...studentData };
    return this.students[index];
  }

  async deleteStudent(id: string): Promise<void> {
    await this.delay(100);
    const index = this.students.findIndex(student => student.id === id);
    if (index === -1) {
      throw new Error('Estudiante no encontrado');
    }
    this.students.splice(index, 1);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
