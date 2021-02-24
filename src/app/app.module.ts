import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebaseConfig} from '../secrets/firebase';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CollectionComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AngularFireDatabaseModule,
    MatToolbarModule,
    MatFormFieldModule,
    NgbModule,
    AngularFireModule.initializeApp(
      firebaseConfig
    ),
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,

  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    HttpClient,
    // {provide: 'BASE_URL', useValue: environment.creekDataBackend},

  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
