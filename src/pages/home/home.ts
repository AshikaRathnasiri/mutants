import { StorageServiceProvider } from './../../providers/storage_service/storage_service';
import { Component } from '@angular/core';
import { NavController , LoadingController} from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user_service/user_service';
import { ProductServiceProvider } from './../../providers/product_service/product_service';
import { ProductsPage } from '../products/products';
import { Common } from '../../app/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , public loadingCtrl: LoadingController , public userService : UserServiceProvider,
    public productService :ProductServiceProvider , public storage: StorageServiceProvider ,public common :Common) {

  }


   /**
  * Authenticate the user with facebook
  */
  SignInWithFacebook() {
    this.userService.authenticateWithFacebook().then((data)=>{
      this.storage.set('user',data);
      this.storage.set('loginType', 'facebook');
      this.redirectToProducts();
    },(err)=>{
      // console.log('authentication error ',err);
      this.common.showErrorAlert('Error Alert!' , 'Something went wrong.');
    });
  }


  /**
  * Authenticate the user with Google Plus
  */
  SignInWithGooglePlus(){
    this.userService.authenticateWithGooglePlus().then((data)=>{
      this.storage.set('user',data);
      this.storage.set('loginType', 'googlePlus');
      this.redirectToProducts();
    },(err)=>{
      // console.log('GooglePlus authentication error ',err);
      this.common.showErrorAlert('Error Alert!' , 'Something went wrong.');
    });
  }


  /**
   * Redirect to products page
   */
  redirectToProducts() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `<ion-spinner name="crescent"></ion-spinner>`
    });

    this.navCtrl.setRoot( ProductsPage );
  }
}
