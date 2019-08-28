import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    const promise = new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve();
          clearInterval(intervalo);
        }
      }, 1000);
    });

    promise
      .then(() => {
        console.log('Termino');
      })
      .catch(err => {
        console.log(`Error en la promesa: ${err}`);
      });
  }

  ngOnInit() {
  }

}
