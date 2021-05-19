import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  private linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void { }

  changeTheme(themeClass: string) {
    const url = `./assets/css/colors/${themeClass}.css`
    
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

}
