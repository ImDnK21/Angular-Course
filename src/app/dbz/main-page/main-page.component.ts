import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //. Tarea:
  //. Cambiar Li`s de main.page.component.html por los personajes del siguiente arreglo
  //. Luego agregar el personaje en el arreglo, y luego de ser agregador, limpiar el form
  //. mediante la inicializacion del nombre en vacio '' y el poder en 0

  personajes : Personaje[] = [
    {
      nombre : 'Goku',
      poder : 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo : Personaje = {
    nombre : 'maestro Roshi',
    poder : 1000
  }

  // cambiarNombre(event : any){
  //   console.log(event.target.value);

  // }

}
