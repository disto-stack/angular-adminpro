import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(users => resolve(users.data))
      .catch(err => reject(err))
    })
  }
}
