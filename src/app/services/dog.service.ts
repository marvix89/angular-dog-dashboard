import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.configuration';


@Injectable()
export class DogService {


    constructor(private readonly http : HttpClient) {}

    getDogsList() {
        return this.http.get(Configuration.REST_API_URL + 'breeds/list');
    }
    getRandomDogImg(breed : string){
        return this.http.get(Configuration.REST_API_URL + 'breed/'+breed+'/images/random');
    }
}
