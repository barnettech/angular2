import {Injectable} from 'angular2/core';
import {Component, View, EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-person',
  inputs: ['name'],
  outputs: ['hello']
})
@View({
  template: `
    <div>
      <span>{{name}}</span>
      <button (click)="sayHello()">Say Hello</button>
    </div>
  `
})
export class Person {
  hello = new EventEmitter();
  sayHello(e) {
    this.hello.next(this.name);
  }
}
