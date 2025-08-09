import { Student } from '../entities/student.entity';

/**
 * Repository interface para gestionar estudiantes
 */
export interface StudentRepository {
  /**
   * Obtiene todos los estudiantes de la promoción
   */
  getAllStudents(): Promise<Student[]>;

  /**
   * Obtiene un estudiante por ID
   */
  getStudentById(id: string): Promise<Student | null>;

  /**
   * Busca estudiantes por nombre
   */
  searchStudentsByName(name: string): Promise<Student[]>;

  /**
   * Crea un nuevo estudiante
   */
  createStudent(student: Omit<Student, 'id'>): Promise<Student>;

  /**
   * Actualiza un estudiante existente
   */
  updateStudent(id: string, student: Partial<Student>): Promise<Student>;

  /**
   * Elimina un estudiante
   */
  deleteStudent(id: string): Promise<void>;
}
