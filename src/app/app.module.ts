import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



//Importar componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloUnoComponent } from './components/articulo-uno/articulo-uno.component';
import { HomeComponent } from './components/home/home.component';
import { ArticuloDosComponent } from './components/articulo-dos/articulo-dos.component';
import { ArticuloTresComponent } from './components/articulo-tres/articulo-tres.component';
import { ArticuloCuatroComponent } from './components/articulo-cuatro/articulo-cuatro.component';
import { ArticuloCincoComponent } from './components/articulo-cinco/articulo-cinco.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloUnoComponent,
    HomeComponent,
    ArticuloDosComponent,
    ArticuloTresComponent,
    ArticuloCuatroComponent,
    ArticuloCincoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
