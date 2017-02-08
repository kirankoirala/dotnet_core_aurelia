import {Person} from "gateway/person";

export class App {
  constructor() {
    this.message = 'Hello World!';
    debugger;
    this.persons = Person.getPersons();
  }
}
