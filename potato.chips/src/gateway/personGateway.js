import {HttpClient} from 'aurelia-fetch-client';

export class PersonGateway{
    constructor(){
        this.client = new HttpClient();
        this.personList = [];
    }

    getPersonList(){
        return this.client.fetch('http://localhost:5000/api/Values')
            .then(response => {return response.json();});
    }

} 