import { Component, OnInit } from '@angular/core';

// Importar archivo JSON
import data from 'src/assets/json/articulos.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Exportar los datos del archivo JSON
  Articulos: any = data;
  
  constructor() { }

  ngOnInit(): void {
  }

}


