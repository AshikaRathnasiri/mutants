import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';


var httpService;

@Injectable()
export class UserServiceProvider {

  constructor(
    public http: Http,
    public facebook: Facebook,
    private googlePlus: GooglePlus) {

    httpService = this.http;

  }

  /**
  * Authnticate the user with facebook and retrive his detials
  */
  authenticateWithFacebook() {
    return new Promise((resolve, reject) => {
      this.facebook.login(['email'])
        .then(response => {
          const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

          firebase.auth().signInWithCredential(facebookCredential)
            .then(success => {
              console.log("Firebase success: " + JSON.stringify(success));
              resolve(success);
            }).catch((err) => {
              console.log('firebase error');
              reject(err);
            });

        }).catch((error) => {
          console.log('fb login :', error);
          reject(error);
        });
    });
  }


  authenticateWithGooglePlus() {
    return new Promise((resolve, reject) => {
      this.googlePlus.login({})
        .then(res => {
          resolve(res);
          console.log('google plus auth', res);
          // this.displayName = res.displayName;
          // this.email = res.email;
          // this.familyName = res.familyName;
          // this.givenName = res.givenName;
          // this.userId = res.userId;
          // this.imageUrl = res.imageUrl;

          // this.isLoggedIn = true;
        })
        .catch((err) =>{
          reject(err);
          console.error('google plus err', err)
        });
    });
  }
}