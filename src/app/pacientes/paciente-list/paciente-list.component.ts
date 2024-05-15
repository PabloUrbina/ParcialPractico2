import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { paciente } from  '../paciente';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacientes: paciente[] = [];
  selected: Boolean = false;
  selectedPaciente !: paciente;  

  
  onSelect(paciente: paciente): void {  
    this.selected = true;
    this.selectedPaciente = paciente;
  }



  constructor(private pacienteService: PacienteService) {}

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe(pacientes => this.pacientes = pacientes);
  }
   
  ngOnInit() {
    this.getPacientes();
  }

}
