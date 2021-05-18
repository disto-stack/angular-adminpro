import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styles: [
  ]
})
export class IncreasingComponent {

  @Input() progress: number = 50;

  @Output() outputProgress: EventEmitter<number> = new EventEmitter();

  changeValue(value: number): number | void {
    if (this.progress + value > 100 ) return this.outputProgress.emit(100);
    else if (this.progress + value < 0) return this.outputProgress.emit(0); 
    
    this.progress += value;
    this.outputProgress.emit(this.progress);
  }
}
