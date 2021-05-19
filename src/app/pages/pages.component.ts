import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  private linkTheme = document.querySelector('#theme');
  
  ngOnInit(): void {
    const actualTheme = localStorage.getItem('theme') || './assets/css/colors/default.css'; 
    this.linkTheme?.setAttribute('href', actualTheme);
  }
}
