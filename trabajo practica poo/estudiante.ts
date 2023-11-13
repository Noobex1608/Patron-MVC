import { Modelo } from "./modelo";
import { Vista } from "./vista";
import { Controlador } from "./controlador";
  // Clase de ejemplo
  export class Estudiante {
    
    constructor(public nombre: string, public edad: number) {}

  }

  // Uso del patrón MVC
  const modelo = new Modelo();
  const vista = new Vista();
  const controlador = new Controlador(modelo, vista);
  
  // Agregar estudiantes
  const estudiante1 = new Estudiante("Juan", 20);
  const estudiante2 = new Estudiante("María", 22);
  
  controlador.agregarEstudiante(estudiante1);
  controlador.agregarEstudiante(estudiante2);
  
  // Eliminar estudiante
  controlador.eliminarEstudiante(estudiante1);
  controlador.agregarEstudiante(estudiante1);
