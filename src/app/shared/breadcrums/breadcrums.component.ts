import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {
  title!: string;
  titleSubs$: Subscription;

  constructor(
    private _router: Router
  ) {     
    this.titleSubs$ = this.getRoutesData().subscribe(({ title }) => this.title = title);
  }

  getRoutesData() {
    return this._router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
  }
  
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

}
