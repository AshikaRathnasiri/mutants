import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { StorageServiceProvider } from '../providers/storage_service/storage_service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: StorageServiceProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Products', component: ProductsPage },
      { title: 'Profile', component: UserProfilePage },
      { title: 'Logout', component: null }
    ];
  }


  /**
   * Open user selected page
   * @param page 
   */
  openPage(page) {
    if (page.title == 'Logout') {
      this.logout();
    } else {
      this.nav.setRoot(page.component);
    }

  }


  /**
   * logout the user
   */
  logout() {
    this.storage.remove('user');
    this.storage.remove('loginType');
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.nav.setRoot(HomePage);
  }

}