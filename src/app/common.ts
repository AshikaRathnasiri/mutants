import { AlertController, LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';



@Injectable()
export class Common {
    static loading;
    static refresh: boolean = false;
    private timer: number;

    constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

    }


    /**
    * Error alert function
    *@param {string} title - title of the pop up
    *@param {string} subtitle - subtitle of the pop up
    */
    showErrorAlert(title: string, subtitle: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            cssClass: 'text-fontfamily',
            buttons: [{
                text: 'OK',
                handler: () => {
                    alert.dismiss();
                    return false;
                }
            }]
        });
        alert.present();
    }


    /*    
    * show loading screen
    */
    showLoading() {
        this.hideLoading();
        Common.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: `<ion-spinner name="dots"></ion-spinner>`
        });
        Common.loading.present();
    }


    /*    
    * dismiss loading screen
    */
    hideLoading() {
        if (Common.loading) {
            Common.loading.dismiss();
            Common.loading = undefined;
        }
    }

}
