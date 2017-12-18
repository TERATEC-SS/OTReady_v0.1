import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CONFIG } from './app.firebase.module';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { ResetPassPage } from '../pages/reset-pass/reset-pass';
import { PerfilPage } from '../pages/perfil/perfil';
import { ListaPage } from '../pages/lista/lista';
import { FormularioPage } from '../pages/formulario/formulario';
//import { InfoPage } from '../pages/info/info';

import { NotesService } from '../services/note.service';
import { Camera } from '@ionic-native/camera';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { InfoPageModule } from '../pages/info/info.module';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistroPage,
    HomePage,
    ResetPassPage,
    PerfilPage,
    ListaPage,
    FormularioPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    InfoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistroPage,
    HomePage,
    ResetPassPage,
    PerfilPage,
    ListaPage,
    FormularioPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesService,
    Camera,
    DateTime
  ]
})
export class AppModule {}
