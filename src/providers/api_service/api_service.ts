import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {

    // public apiUrl: string = "";
    constructor(private http: Http) {

    }


    /**
    * Make get request to API
    * @param {string} url - relative url of the request
    */
    get(url: string) {
        return this.http.get( url )
            .map((response: Response) => response.json());

    }
}