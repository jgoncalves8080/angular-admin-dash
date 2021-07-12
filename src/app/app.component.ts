import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  listMenu = [
    {
      path: 'pages/kanban.html',
      icon: 'nav-icon fas fa-columns',
      title: 'Calendary',
    },
    {
      path: 'pages/kanban.html',
      icon: 'nav-icon fas fa-columns',
      title: 'Calendary',
    },
    {
      path: 'pages/kanban.html',
      icon: 'nav-icon fas fa-columns',
      title: 'Calendary',
    },
    {
      path: 'pages/kanban.html',
      icon: 'nav-icon fas fa-columns',
      title: 'Calendary',
    },
  ];
}
