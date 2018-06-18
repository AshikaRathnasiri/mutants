import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';
import { HttpModule } from "@angular/http";
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';

import { UserServiceProvider } from '../providers/user_service/user_service';
import { ProductServiceProvider } from '../providers/product_service/product_service';
import { ApiServiceProvider } from '../providers/api_service/api_service';
import { StorageServiceProvider } from '../providers/storage_service/storage_service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { ProductDetailsPage } from '../pages/product-details/product-details'

export const firebaseConfig = {
  apiKey: "AIzaSyBdKoLalhQyDT_WgCGx_x-Xl-3iT6Cj04Y",
  authDomain: "mutants-3292b.firebaseapp.com",
  databaseURL: "https://.firebaseio.com",
  storageBucket: ".appspot.com",
  projectId: "mutants-3292b",
  messagingSenderId: "1084326114631"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    UserProfilePage,
    ProductDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    UserProfilePage,
    ProductDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    GooglePlus,
    UserServiceProvider,
    ApiServiceProvider,
    ProductServiceProvider,
    StorageServiceProvider
  ]
})
export class AppModule {}
