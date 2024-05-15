import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
    private apiUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getPacientes(): Observable<any> {
        return this.http.get(environment.baseUrl);
    }

    getPaciente(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }

    
}   
