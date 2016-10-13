import {Component} from 'angular2/core';

@Component({
    selector: 'component-one',
    templateUrl: 'sites/all/modules/custom/groupdropbox/app/component-one.html'
})
export default class ComponentOne {
  constructor() {
    this.appMessage = "hello there";
    console.log("hello there jack in the bean stalk");
  }
}
