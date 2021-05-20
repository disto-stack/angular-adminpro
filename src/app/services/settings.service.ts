import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const actualTheme = localStorage.getItem('theme') || './assets/css/colors/default.css'; 
    this.linkTheme?.setAttribute('href', actualTheme);
  }

  changeTheme(themeClass: string) {
    const url = `./assets/css/colors/${themeClass}.css`
    
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

  checkCurrentTheme() {
    const themeLinks = document.querySelectorAll('.selector');
    
    themeLinks?.forEach(element => {
      element.classList.remove('working');

      const bntTheme = element.getAttribute('data-theme');
      const btnUrl = `./assets/css/colors/${bntTheme}.css`;

      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnUrl === currentTheme) element.classList.add('working');
    })
  }
}
