// Controlador
import { Estudiante } from "./estudiante";
import { Modelo } from "./modelo";
import { Vista } from "./vista";
export class Controlador {
    private _modelo: Modelo;
    public get modelo(): Modelo {
        return this._modelo;
    }
    public set modelo(value: Modelo) {
        this._modelo = value;
    }
    private vista: Vista;
  
    constructor(modelo: Modelo, vista: Vista) {
      this._modelo = modelo;
      this.vista = vista;
    }
  
    setEstudiantes(estudiantes: Estudiante[]): void {
      this.modelo.Estudiantes = estudiantes;
    }
  
    getEstudiantes(): Estudiante[] {
      return this.modelo.Estudiantes;
    }
  
    agregarEstudiante(estudiante: Estudiante): void {
      this.modelo.agregarEstudiante(estudiante);
      this.actualizarVista();
    }
  
    eliminarEstudiante(estudiante: Estudiante): void {
      this.modelo.eliminarEstudiante(estudiante);
      this.actualizarVista();
    }
  
    private actualizarVista(): void {
      const estudiantes = this.modelo.Estudiantes;
      this.vista.mostrarEstudiantes(estudiantes);
    }
  }