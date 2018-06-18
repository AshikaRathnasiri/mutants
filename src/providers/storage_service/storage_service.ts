import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class StorageServiceProvider {

  constructor(public http: Http) {
  }

  /**
  * Save item in the local storage
  * @param {string} key - unique key to identify the record
  * @param {any} value - data to store
  */
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
  * Retrive an item from the local storage
  * @param {string} key - unique key of the record
  */
  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }


  /**
  * Delete an item from the local storage
  * @param {string} key - unique key of the record
  */
  remove(key: string) {
    localStorage.removeItem(key);
  }

}
