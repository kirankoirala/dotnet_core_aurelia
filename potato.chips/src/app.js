import {PersonGateway} from 'gateway/personGateway';

export class App {
  constructor() {
    this.message = 'Hello World!';
    this.persons = [];
    this.getPersons();
  }

  getPersons(){
    debugger;
    PersonGateway.personList
    .then(data => {this.persons = data});
    console.log(this.persons);
  }
}
