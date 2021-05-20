import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  private linkTheme = document.querySelector('#theme');
  private themeLinks: NodeListOf<Element> | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.themeLinks = document.querySelectorAll('.selector');
    this.checkCurrentTheme();  
  }

  changeTheme(themeClass: string) {
    const url = `./assets/css/colors/${themeClass}.css`
    
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {    
    this.themeLinks?.forEach(element => {
      element.classList.remove('working');

      const bntTheme = element.getAttribute('data-theme');
      const btnUrl = `./assets/css/colors/${bntTheme}.css`;

      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnUrl === currentTheme) element.classList.add('working');
    })
  }
}
