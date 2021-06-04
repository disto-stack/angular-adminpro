import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from "rxjs/operators";

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
    let i = 0;

    const $obs = new Observable(observer => {
      setInterval(() => {
      
        i++;
        observer.next(i);
      
        if (i === 5) {
          observer.complete();
        } 

        if (i === 2) {
          observer.error('i = 2');
        }
        
      }, 1000)
    });

    $obs
      .pipe(
        retry(1)  
      )
      .subscribe(
        val => console.log('Sub', val),
        err => console.error('Error', err),
        () => console.info('Obs completed')
      );
  }

}
