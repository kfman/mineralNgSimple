import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  login(username: string, password: string): void {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(async () => {
        const result = await this.authService.login(username, password);

        if (result) {
          this.router.navigate(['/collection']);
        }
      })
      .catch((error) => {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  }

  ngOnInit(): void {
  }

}
