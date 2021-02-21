import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseAuth: AngularFireAuth) {

  }

  login(username: string, password: string): void {
    this.firebaseAuth.auth.signInWithEmailAndPassword(username, password);
  }

  ngOnInit(): void {
  }

}
