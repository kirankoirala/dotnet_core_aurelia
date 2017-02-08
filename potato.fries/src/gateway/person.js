import 'fetch';
import {HttpClient} from "aurelia-fetch-client";

export class Person{
    constructor(){
        this.persons = [];
        this.getPersons();
    }

    getPersons() {
      httpClient.fetch('localhost:5000/api/values')
      .then(response => response.json())
      .then(data => {
         this.persons = data;
      });
      return null;
    }
}