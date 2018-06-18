import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product_service/product_service';
import { ProductDetailsPage } from '../product-details/product-details'

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  // private data: any;
  private products: any = [];
  private page : number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public productService: ProductServiceProvider) {
  }


  /**
   * Retrieve all products when init products page
   */
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      for (var key in data) {
        this.products.push(data[key]);
      }
    }, (err) => {
      console.log(err);
    });
  }


  /**
   * Retrieve other data when scroll down the list
   * @param infiniteScroll 
   */
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.productService.getProducts().subscribe((data) => {
        for (var key in data) {
          this.products.push(data[key]);
        }
      }, (err) => {
        console.log(err);
      });

      infiniteScroll.complete();
    }, 500);
  }


  /**
   * Redirect to product details page
   * @param item - product object
   */
  productDetails(item : any){
    this.navCtrl.setRoot( ProductDetailsPage , {'product':item});
  }
}
