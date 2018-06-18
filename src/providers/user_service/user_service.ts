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
              resolve(success);
            }).catch((err) => {
              reject(err);
            });

        }).catch((error) => {
          reject(error);
        });
    });
  }


  /**
  * Authnticate the user with google plus and retrive his detials
  */
  authenticateWithGooglePlus() {
    return new Promise((resolve, reject) => {
      this.googlePlus.login({})
        .then(res => {
          resolve(res);
        })
        .catch((err) =>{
          reject(err);
        });
    });
  }
}