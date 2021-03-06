import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  samples = new Array<any>();

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {

    this.authService.user.subscribe((user) => {
      // if (user == null) {
      //   this.router.navigate(['/login']);
      //   return;
      // }

      firebase.database().ref(`users/${user.uid}/samples`).once('value').then(value => {
        console.log('Event fired...');
        value.forEach(e => {
          this.samples.push(e.val());
          return false;
        });
      });
    });
  }

}
