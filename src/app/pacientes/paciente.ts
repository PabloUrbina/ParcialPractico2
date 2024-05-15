export class paciente {
    nonbre: string;
    edad: Number;
    diagnostico: string;

    constructor(nombre: string, edad: Number, diagnostico: string) {
        this.nonbre = nombre;
        this.edad = edad;
        this.diagnostico = diagnostico;
    }
}