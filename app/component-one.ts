import {Component} from 'angular2/core';
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'component-one',
    template: `<div>
        <ul>
          <li *ngFor="#frnd of result">
            {{frnd.name}} is {{frnd.age}} years old.
          </li>
        </ul> 
	</div>
	
	`
})
export default class ComponentOne {
  constructor(http:Http) {
    this.appMessage = "hello there";
    console.log("hello there jack in the bean stalk");
    this.people = http.get('angular2-json').subscribe(result => this.result =result.json());
  }
}
