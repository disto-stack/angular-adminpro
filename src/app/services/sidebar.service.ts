import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', path: '/' },
        { title: 'Progress Bar', path: 'progress' },
        { title: 'Charts', path: 'charts' }
      ]
    }
  ]
  constructor() { }
}
