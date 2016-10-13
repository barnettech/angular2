import {Component} from 'angular2/core';
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import 'rxjs/Rx';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import ComponentOne from './component-one.ts';
import ComponentTwo from './component-two.ts';
import ComponentThree from './component-three.ts';


@Component({
    selector: 'simple-routing',
    directives: [ROUTER_DIRECTIVES],
    template: `<div>
	
	<h1><a class='menu-item' [routerLink]="['/ComponentOne']">One</a>
		<a class='menu-item' [routerLink]="['/ComponentTwo']">Two</a>
		<a class='menu-item' [routerLink]="['/ComponentThree']">Three</a>
	</h1>
        <ul>
          <li *ngFor="#frnd of result">
            {{frnd.name}} is {{frnd.age}} years old.
          </li>
        </ul>        <div>
	  <router-outlet></router-outlet>
	</div>
	
	`
})
@RouteConfig([
    {path: '/componentOne', as: 'ComponentOne', useAsDefault: true, component: ComponentOne},
    {path: '/componentTwo', as: 'ComponentTwo', useAsDefault: false, component: ComponentTwo},
    {path: '/componentThree', as: 'ComponentThree', useAsDefault: false, component: ComponentThree},
])
export class SimpleRouting {
  constructor(http:Http) {
  this.people = http.get('angular2-json').subscribe(result => this.result =result.json());
  }
}
