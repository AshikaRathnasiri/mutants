import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageServiceProvider } from './../../providers/storage_service/storage_service';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
      
      console.log('this.user :',this.user);
      console.log('image : ',this.name);
      console.log('name : ',this.image);
      console.log('email : ',this.email);
    }
    console.log('image : ',this.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
