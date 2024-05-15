import { NgModule } from '@angular/core';
//import { ServerModule } from '@angular/platform-server';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { ServerModule } from '@angular/platform-server';
import { paciente } from './pacientes/paciente';
import { AppRoutingModule } from './app-routing.module';
//import { pacienteModule } from './pacientes/paciente.module'; // Import the pacienteModule from the appropriate file
@NgModule({
        imports: [
                AppModule,
                AppRoutingModule,
                BrowserModule,
                HttpClientModule,
                
                
    ],
    bootstrap: [AppComponent],
})
export class AppServerModule {}
        

