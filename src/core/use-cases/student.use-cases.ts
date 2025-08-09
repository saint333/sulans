import { Student } from '../entities/student.entity';
import { StudentRepository } from '../repositories/student.repository';

/**
 * Caso de uso para obtener todos los estudiantes
 */
export class GetAllStudentsUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(): Promise<Student[]> {
    try {
      return await this.studentRepository.getAllStudents();
    } catch (error) {
      throw new Error(`Error al obtener estudiantes: ${error}`);
    }
  }
}

/**
 * Caso de uso para buscar estudiantes
 */
export class SearchStudentsUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(searchTerm: string): Promise<Student[]> {
    if (!searchTerm.trim()) {
      throw new Error('El término de búsqueda no puede estar vacío');
    }

    try {
      return await this.studentRepository.searchStudentsByName(searchTerm);
    } catch (error) {
      throw new Error(`Error al buscar estudiantes: ${error}`);
    }
  }
}

/**
 * Caso de uso para obtener un estudiante específico
 */
export class GetStudentByIdUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(id: string): Promise<Student | null> {
    if (!id.trim()) {
      throw new Error('El ID del estudiante es requerido');
    }

    try {
      return await this.studentRepository.getStudentById(id);
    } catch (error) {
      throw new Error(`Error al obtener estudiante: ${error}`);
    }
  }
}
