import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { NotesService } from '../../services/note.service';
import { FormularioPage } from '../formulario/formulario';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  userId = this.afAuth.auth.currentUser.uid;    
  perfilData: Observable<any>

  notes:any= null;
  id: any = null;
  title: any = null;
  coor: boolean

  @ViewChild('myNav') nav: NavController;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public notesService : NotesService, 
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase)
    {

      if (this.userId == 'OXBzBmvjkHf1n51Lktt9KOkXXMD3'){
        this.coor = true
      }else{
        this.coor = false
      }

      this.perfilData = afDatabase.object(`profile/`+ this.userId).valueChanges();

      this.id = navParams.get(`id`);
      if(this.id != 0){
      let loader = this.loadingCtrl.create({
        content: "Cargando Formularios...",
        duration: 3000
      });
      loader.present();
      notesService.getNotes()
        .valueChanges().subscribe( notas => {
          console.log(notas)
            this.notes = notas;
        });
      };
    }

  presentModal() {
    let modal = this.modalCtrl.create(FormularioPage);
    modal.present();
  }
  public goToDetail(id){
    this.navCtrl.push(FormularioPage, {id:id});
  }
  public createNote(){
    this.navCtrl.push(FormularioPage, {id:0});
  }
  backToHome(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log(this.userId);
  }

}
