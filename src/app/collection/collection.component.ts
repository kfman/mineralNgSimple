import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  samples: any[];

  constructor(private router: Router,
              private db: AngularFireDatabase,
              private authService: AuthService) {

  }

  ngOnInit(): void {

    this.authService.user.subscribe((user) => {
      // if (user == null) {
      //   this.router.navigate(['/login']);
      //   return;
      // }

      this.db.list(`users/${user.uid}/samples`).snapshotChanges().subscribe(value => {
        console.log('Event fired...');
        console.log(value);
        this.samples = value;
      });
    });
  }

}
