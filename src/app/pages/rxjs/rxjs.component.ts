import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
  intervalSubs: Subscription;

  constructor() { 
    this.intervalSubs = this.getInterval().subscribe(console.log) // Equals to (value) => console.log(value);
  }

  ngOnInit(): void {
    /*
    this.getObservable()
      .pipe(
        retry(1)  
      )
      .subscribe(
        val => console.log('Sub', val),
        err => console.error('Error', err),
        () => console.info('Observable completed')
      );
    */
  }

  getInterval(): Observable<number> {
    return interval(500)
      .pipe(
        map(val => val + 1),
        filter(val => val % 2 === 0),
        take(10)
      );
  }

  getObservable():Observable<number> {
    let i = 0;

    return new Observable<number>(observer => {
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
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
}
