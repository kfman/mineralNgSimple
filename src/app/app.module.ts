import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebaseConfig} from '../secrets/firebase';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(
      firebaseConfig
    ),
    AngularFireDatabaseModule,

  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    HttpClient,
    // {provide: 'BASE_URL', useValue: environment.creekDataBackend},

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
