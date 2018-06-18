import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiServiceProvider } from '../api_service/api_service'

@Injectable()
export class ProductServiceProvider {

    public url: string = "http://124.43.16.202:6073/online-shop-restaurant/restaurant_api/data/menu_item/dineMenuItems/mainSubMenu/3/3/3/1";
    constructor(private http: Http , public apiService: ApiServiceProvider ) {

    }


    /**
    * retrieve products 
    */
    getProducts() {
        return this.apiService.get(this.url).map((response) => {
            return response.data;
        });

    }
}