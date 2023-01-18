import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template:
        `
        <h1> {{titulo}} </h1>
        <h1>
            <strong>la base es de : {{base}}</strong>
        </h1>
        <button (click)="acumular(-base);"> - 5</button>
        <span><strong>{{numero}}</strong></span>
        <button (click)="acumular(base)"> - 5</button>    
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    //. Tarea

    // sumar() {
    //   this.numero += 1;
    // }
    // restar(){
    //   this.numero -= 1;
    // }


    acumular(valor: number) {
        this.numero += valor;
    }
}