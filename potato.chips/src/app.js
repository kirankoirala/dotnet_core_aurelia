import {PersonGateway} from 'gateway/personGateway';

export class App {
  constructor() {
    this.personGateway = new PersonGateway();
    this.message = 'Hello World!';
    this.persons = [];
    this.getPersons();
  }

  getPersons(){
    return this.personGateway.getPersonList()
        .then(persons => {
            this.persons = persons;
        });
    //debugger;
    //this.persons = this.personGateway.personList;
  }
}
