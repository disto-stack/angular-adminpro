import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    const $obs = new Observable(observer => {
      let i = 0;
      setInterval(() => {
      
        i++;
        observer.next(i);
      
        if (i === 4) {
          observer.complete();
        } 

        if (i === 2) {
          observer.error('i = 2');
        }
        
      }, 1000)
    });

    $obs.subscribe(
      val => console.log('Sub', val),
      err => console.error('Error', err),
      () => console.info('Obs completed')
    );
  }

}
