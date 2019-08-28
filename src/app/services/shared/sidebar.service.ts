import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Graficas', url: '/graficas1' },
        { title: 'Promesas', url: '/promises' },
        { title: 'Rxjs', url: '/rxjs' },
      ]
    }
  ];

  constructor() { }
}
