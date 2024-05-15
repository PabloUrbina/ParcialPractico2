import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PacienteService } from './paciente.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PacienteService', () => {
    let service: PacienteService;
    let debugElement: DebugElement;
    let fixture: ComponentFixture<PacienteService>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, HttpClientModule],
        declarations: [PacienteService]
        })
        .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(PacienteService);
        service = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(service).toBeTruthy();
    });
    });
    
