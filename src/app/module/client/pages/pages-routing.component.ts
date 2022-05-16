import { header } from './../core/header/model/header';
import { Component } from '@angular/core';

@Component({
  selector: 'pages-routing-root',
  template: `
  <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

  `,

})
export class PagesRoutingComponent {
}
