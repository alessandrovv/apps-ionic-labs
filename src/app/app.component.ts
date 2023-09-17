import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customer', url: '/customers', icon: 'person' },
    { title: 'Places', url: '/lugares', icon: 'location' },
    { title: 'Agenda', url: '/agenda', icon: 'person' },
  ];
  constructor() {}
}
