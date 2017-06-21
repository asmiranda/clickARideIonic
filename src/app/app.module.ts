import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';

// Importing AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook'

// AF2 Settings
const firebaseConfig = {
  apiKey: "AIzaSyCLy1wkquypQEeEEcSsy68UvK4Cg__1y7w",
    authDomain: "click-a-ride-770f7.firebaseapp.com",
    databaseURL: "https://click-a-ride-770f7.firebaseio.com",
    storageBucket: "click-a-ride-770f7.appspot.com",
    projectId: "click-a-ride-770f7",
    messagingSenderId: "860765689439"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider, 
    Facebook
  ]
})
export class AppModule {}
