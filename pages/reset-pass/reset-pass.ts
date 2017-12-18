import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ResetPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-pass',
  templateUrl: 'reset-pass.html',
})
export class ResetPassPage {

  user = {} as User

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    
    
) {
  }

  resetPass(){
    this.afAuth.auth.sendPasswordResetEmail(this.user.email)
    .then((user) => {
      let alert = this.alertCtrl.create({
        title: 'Datos Enviados',
        subTitle: 'Se ha enviado un correo con los detalles para reactivar su cuenta.',
        buttons: ['OK']
      });
      this.navCtrl.setRoot(LoginPage);
    })
  }

  back(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPassPage');
  }

}
