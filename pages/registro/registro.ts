import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { PerfilPage } from '../perfil/perfil';


@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user = {} as User

  constructor(
    public navCtrl: NavController,
    public afAuth: AngularFireAuth,     
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrado(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then(
      res => {
        this.navCtrl.setRoot(PerfilPage);
      }, error => {
          let alert = this.alertCtrl.create({
            title: 'Email Incorrecto',
            subTitle: 'El Email ingresado ya está registrado, por favor intente con otra credencial.',
            buttons: ['OK']
          });
          alert.present();})
          let loader = this.loadingCtrl.create({
            content: "Por favor espere...",
            duration: 3000
          });
          loader.present();
  }
  
  back(){
      this.navCtrl.pop();
    }
  

}
