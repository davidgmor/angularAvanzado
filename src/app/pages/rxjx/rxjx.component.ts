import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjx',
  templateUrl: './rxjx.component.html',
  styles: []
})
export class RxjxComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor() {

    this.subscription = this.returnObservable().pipe(
      retry(2)
    )
    .subscribe(
      num => console.log('Subs ', num),
      error => console.error('Error', error),
      () => console.log('Termino')
    );
  }

  ngOnInit() {
    console.log('works');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      const interval = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        // if ( contador === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }
      }, 1000);

    }).pipe(
      map( resp => resp.valor),
      filter( (valor, index) => {
        // console.log('filter', valor, index);
        if ( (valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

}
