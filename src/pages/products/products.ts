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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productService.getProducts().subscribe((data) => {

      for (var key in data) {
        this.products.push(data[key]);
      }
      console.log('name ::', this.products);
    }, (err) => {
      console.log(err);
    });
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.productService.getProducts().subscribe((data) => {
 
        for (var key in data) {
          this.products.push(data[key]);
        }
        console.log('name ::', this.products);
      }, (err) => {
        console.log(err);
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


  productDetails(item : any){
    console.log('item :',item);
    this.navCtrl.setRoot( ProductDetailsPage , {'product':item});
  }
}
