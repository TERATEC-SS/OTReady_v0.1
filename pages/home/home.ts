import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ListaPage } from '../lista/lista';
import { Perfil } from '../../models/perfil';
import firebase from 'firebase';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userId = this.afAuth.auth.currentUser.uid;
  perfilData: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public afDatabase: AngularFireDatabase,
    public modalCtrl: ModalController,
    ) {
    this.perfilData = afDatabase.object(`profile/`+ this.userId).valueChanges();
  }

  ionViewDidLoad() {
    console.log(this.userId);
  }

  lpModal(){
    let modal = this.modalCtrl.create(ListaPage);
    modal.present();
  }

  iModal(){
    let modal = this.modalCtrl.create(InfoPage);
    modal.present();
  }

}
