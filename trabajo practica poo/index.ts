import { Estudiante } from "./estudiante";
import { Modelo } from "./modelo";
import { Vista } from "./vista";

const vista1 = new Vista;
const modelo = new Modelo();
const estudiante3 = new Estudiante("Carlos", 20);
vista1.mostrarEstudiantes(modelo.Estudiantes)
vista1.mostrarError("Si ve esto hubo un error")