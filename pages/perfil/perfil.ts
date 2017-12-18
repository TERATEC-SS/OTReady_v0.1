import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Perfil } from '../../models/perfil';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database'
import { LoginPage } from '../login/login';
//import { CameraOptions, Camera } from '@ionic-native/camera';
import firebase from 'firebase';
//import { FotoPerfilPage } from '../foto-perfil/foto-perfil';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  image: string = null;

  public currentDate: number;  

  userId = this.afAuth.auth.currentUser.uid;

  perfil = {} as Perfil

  fotoPerfil = this.afDatabase.object(`profile/`+this.userId+`/fotoPerfil`)

  


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public afDatabase: AngularFireDatabase,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    //public camera: Camera,
    //public modalCtrl: ModalController
  ) {
  }

  createProfile() {
  this.afAuth.authState.subscribe(auth => {
    this.afDatabase.object(`profile/`+ this.userId).set(this.perfil)
    .then(() => 
    this.navCtrl.setRoot(LoginPage))
    })
    let loader = this.loadingCtrl.create({
      content: "Por favor espere...",
      duration: 3000
    })
    loader.present();
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
