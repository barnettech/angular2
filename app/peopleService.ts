//a simple service
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class PeopleService {
  constructor(http:Http) {
    this.people = http.get('api/people.json').map(res => res.json());
  }
}
