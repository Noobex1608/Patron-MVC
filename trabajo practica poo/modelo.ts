import { Estudiante } from "./estudiante";
export class Modelo {
    private estudiantes: Estudiante[] = [];
  
    get Estudiantes(): Estudiante[] {
      return this.estudiantes;
    }
    set Estudiantes(value: Estudiante[]){
        this.estudiantes = value;
    }
    
    agregarEstudiante(estudiante: Estudiante): void {
      this.estudiantes.push(estudiante);
    }
  
    eliminarEstudiante(estudiante: Estudiante): void {
      const index = this.estudiantes.indexOf(estudiante);
      if (index !== -1) {
        this.estudiantes.splice(index, 1);
      }
    }
  }