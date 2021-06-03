import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises-rxjs',
  templateUrl: './promises-rxjs.component.html',
  styles: [
  ]
})
export class PromisesRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(users => resolve(users.data))
    })
  }
}
