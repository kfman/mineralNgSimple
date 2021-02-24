import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  public get isLoggedIn() {
    return localStorage.getItem('user') != null;
  }

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
    this.user = this.afAuth.authState;
  }

  async login(username: string, password: string): Promise<boolean> {
    console.log('firebase login for ' + username);
    try {
      const credentials = await firebase.auth().signInWithEmailAndPassword(username, password);


      localStorage.setItem('user', await credentials.user.getIdToken());
      console.log(credentials.user.uid);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async logout() {
    await firebase.auth().signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isDeveloper');
  }

}
