import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/note.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import firebase from 'firebase';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  public currentDate: number;

  note: any = { 
    id: null,
    tipo: null,
    title: null,
    description: null,
    direccion:null,
    ciudad: null,
    region: null,
    descriptionFoto1: null,
    descriptionFoto2: null,
    descriptionFoto3: null,
    comentarios: null,
    eppAltura: null,
    vehiculo: null,
    especificarOtro: null, 
    foto1: null,
    foto2: null,
    foto3: null,
    foto4: null,
  };

  activate1: any;
  id: any = null;
  userId = this.afAuth.auth.currentUser.uid;
  items : Observable<any[]>
  image1: string = null;
  image2: string = null;  
  image3: string = null; 
  image4: string = null;
  coor: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public notesService: NotesService, 
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private camera: Camera,
    public alert: AlertController,
  ) {

    if (this.userId == 'OXBzBmvjkHf1n51Lktt9KOkXXMD3'){
      this.coor = true
    }else{
      this.coor = false
    }
    
    this.id = navParams.get('id');

    if(this.id != 0){
      notesService.getNote(this.id)
        .valueChanges().subscribe(note =>{
          console.log(note)
          this.note = note});
    };

    this.currentDate = Date.now();

  }

  ionViewDidLoad() {
    console.log(this.currentDate);
  }

  //Agregar Notas al formulario
  addNote() {
    if(this.id != 0){
      this.notesService.editNote(this.note);
      alert('Nota editada con éxito');
      }
    else{
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
      alert('Nota creada con éxito');
      }
      this.navCtrl.pop();
  }

  deleteNote(){
    this.notesService.deleteNote(this.note);
    alert('Nota eliminada con éxito');
    this.navCtrl.pop();
  }

  getPicture1(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit : true,      
      correctOrientation: true,
      saveToPhotoAlbum: true,
      targetWidth: 500,
      targetHeight: 500,
      quality: 50
    }
    this.camera.getPicture(options)
    .then(imageData => {
      this.image1 = `data:image/jpeg;base64,${imageData}`;
      const selfieRef = firebase.storage().ref(`profilePictures/`+this.note.id+`/form${this.currentDate}.jpg`);
      selfieRef.putString(imageData, 'base64', {contentType: 'image/jpg'})
      .then(savedNewPhoto => {
        firebase.database().ref(`notas/`+this.userId+`/`+this.note.id+`/foto1`).set(savedNewPhoto.downloadURL);
        }).catch(error =>{
          console.error( error );
        });
    })
  }

  getPicture2(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit : true,      
      correctOrientation: true,
      saveToPhotoAlbum: true,
      targetWidth: 500,
      targetHeight: 500,
      quality: 50
    }
    this.camera.getPicture(options)
    .then(imageData => {
      this.image2 = `data:image/jpeg;base64,${imageData}`;
      const selfieRef = firebase.storage().ref(`profilePictures/`+this.note.id+`/form${this.currentDate}.jpg`);
      selfieRef.putString(imageData, 'base64', {contentType: 'image/jpg'})
      .then(savedNewPhoto => {
        firebase.database().ref(`notas/`+this.userId+`/`+this.note.id+`/foto2`).set(savedNewPhoto.downloadURL);
        }).catch(error =>{
          console.error( error );
        });
    })
  }

  getPicture3(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit : true,      
      correctOrientation: true,
      saveToPhotoAlbum: true,
      targetWidth: 500,
      targetHeight: 500,
      quality: 50
    }
    this.camera.getPicture(options)
    .then(imageData => {
      this.image3 = `data:image/jpeg;base64,${imageData}`;
      const selfieRef = firebase.storage().ref(`profilePictures/`+this.note.id+`/form${this.currentDate}.jpg`);
      selfieRef.putString(imageData, 'base64', {contentType: 'image/jpg'})
      .then(savedNewPhoto => {
        firebase.database().ref(`notas/`+this.userId+`/`+this.note.id+`/foto3`).set(savedNewPhoto.downloadURL);
        }).catch(error =>{
          console.error( error );
        });
    })
  }

  getPicture4(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit : true,      
      correctOrientation: true,
      saveToPhotoAlbum: true,
      targetWidth: 500,
      targetHeight: 500,
      quality: 50
    }
    this.camera.getPicture(options)
    .then(imageData => {
      this.image4 = `data:image/jpeg;base64,${imageData}`;
      const selfieRef = firebase.storage().ref(`profilePictures/`+this.note.id+`/form${this.currentDate}.jpg`);
      selfieRef.putString(imageData, 'base64', {contentType: 'image/jpg'})
      .then(savedNewPhoto => {
        firebase.database().ref(`notas/`+this.userId+`/`+this.note.id+`/foto4`).set(savedNewPhoto.downloadURL);
        }).catch(error =>{
          console.error( error );
        });
    })
  }


}
