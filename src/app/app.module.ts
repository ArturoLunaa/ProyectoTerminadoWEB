import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



//Importar componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloUnoComponent } from './components/articulo-uno/articulo-uno.component';
import { HomeComponent } from './components/home/home.component';
import { ArticuloDosComponent } from './components/articulo-dos/articulo-dos.component';
import { ArticuloTresComponent } from './components/articulo-tres/articulo-tres.component';
import { ArticuloCuatroComponent } from './components/articulo-cuatro/articulo-cuatro.component';
import { ArticuloCincoComponent } from './components/articulo-cinco/articulo-cinco.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GaleriaComponent } from './components/galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticuloUnoComponent,
    HomeComponent,
    ArticuloDosComponent,
    ArticuloTresComponent,
    ArticuloCuatroComponent,
    ArticuloCincoComponent,
    NavbarComponent,
    FormularioComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
