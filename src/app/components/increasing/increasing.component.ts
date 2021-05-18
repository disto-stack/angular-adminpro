import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styles: [
  ]
})
export class IncreasingComponent {

  progress: number = 50;

  get percentage() {
    return `${this.progress}%`;
  }

  changeValue(value: number): number | void {
    if (this.progress + value > 100 ) {
      return this.progress = 100;
    } else if (this.progress + value < 0) {
      return this.progress = 0;
    }

    this.progress += value;
  }

}
