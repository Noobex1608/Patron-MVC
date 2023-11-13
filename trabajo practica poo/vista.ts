import { Estudiante } from "./estudiante";
import { Modelo } from "./modelo";
export class Vista {
    mostrarEstudiantes(estudiantes: Estudiante[]): void {
      console.log("Lista de Estudiantes:");
      
      for (const estudiante of estudiantes) {
        console.log(`${estudiante.nombre} - ${estudiante.edad} años`)
      };
    }
  
    mostrarMensaje(mensaje: string): void {
      console.log(`Mensaje: ${mensaje}`);
    }
  
    mostrarError(error: string): void {
      console.error(`Error: ${error}`);
    }
  }