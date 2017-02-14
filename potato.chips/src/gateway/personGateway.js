import {HttpClient} from 'aurelia-fetch-client';

export class PersonGateway{
    constructor(){
        this.personList = [];
    }

    getPersonList(){
        return HttpClient.fetch('http://localhost:5000/api/Values')
            .then(response => {personList = responst.json();});
    }

}