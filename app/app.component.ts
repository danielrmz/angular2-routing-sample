import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Routing Test App</h1>
  <br />
  <ul>
    <li><a routerLink="home">Home</a></li>
    <li><a routerLink="module1">Page1</a></li>
    <li><a routerLink="module1/page2">Page2</a></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }
