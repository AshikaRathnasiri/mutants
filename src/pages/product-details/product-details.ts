import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  private product: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //get product details from parameter
     this.product = this.navParams.get('product');
  }

}
