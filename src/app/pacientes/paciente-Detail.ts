import {paciente } from './paciente';   

export class pacienteDetail extends paciente{
    constructor(
        nombre: string,
        edad: Number,
        diagnostico: string
    )
    {super(nombre, edad, diagnostico);}
}