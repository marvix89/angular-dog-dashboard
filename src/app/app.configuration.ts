import { Injectable } from '@angular/core';

@Injectable()
export abstract class Configuration {

    protected constructor() { }

    // STATIC
    static REST_API_URL = 'https://dog.ceo/api/';

}
