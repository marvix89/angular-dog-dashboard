import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.configuration';


@Injectable()
export class DogService {

    /**
    * @constructor
    *
    * @description The default constructor of the 'DogService' class.
    * @param http The http client.
    */
    constructor(private readonly http: HttpClient) {}

    /**
    * The method to retrieve dogs breeds list.
    */
    getDogsList() {
        return this.http.get(Configuration.REST_API_URL + 'breeds/list');
    }
    /**
    * The method to retrieve dog image.
    */
    getRandomDogImg(breed: string) {
        return this.http.get(Configuration.REST_API_URL + 'breed/' + breed + '/images/random');
    }
}
