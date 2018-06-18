import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageServiceProvider } from './../../providers/storage_service/storage_service';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  private user : any;
  private name : string;
  private email : string;
  private image : string = 'assets/imgs/user.png';

  constructor(public navCtrl: NavController, public navParams: NavParams , public storage : StorageServiceProvider) {

  }


  /**
   * get user date save in local storage when init user profile 
   */
  ngOnInit(): void {
    if(this.storage.get('user')){
      this.user = this.storage.get('user');
      this.name = this.user.displayName
      this.email = this.user.email

      if(this.storage.get('loginType') == 'facebook')
      {
        this.image = this.user.photoURL || 'assets/imgs/user.png';
      }else{
        this.image = this.user.imageUrl || 'assets/imgs/user.png';
      }
    }
  }

}
