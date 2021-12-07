import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticuloUnoComponent } from './components/articulo-uno/articulo-uno.component';
import { ArticuloDosComponent } from './components/articulo-dos/articulo-dos.component';
import { ArticuloTresComponent } from './components/articulo-tres/articulo-tres.component';
import { ArticuloCuatroComponent } from './components/articulo-cuatro/articulo-cuatro.component';
import { ArticuloCincoComponent } from './components/articulo-cinco/articulo-cinco.component';
import { HomeComponent } from './components/home/home.component';
import {FormularioComponent} from './components/formulario/formulario.component'
import { GaleriaComponent } from './components/galeria/galeria.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'articulo-uno', component: ArticuloUnoComponent},
  {path:'articulo-dos', component:ArticuloDosComponent},
  {path:'articulo-tres', component:ArticuloTresComponent},
  {path:'articulo-cuatro',component:ArticuloCuatroComponent},
  {path:'articulo-cinco',component:ArticuloCincoComponent},
  {path:'formulario',component:FormularioComponent},
  {path:'galeria',component:GaleriaComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
