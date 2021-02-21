import {Component, OnInit} from '@angular/core';
import {Mineral} from '../models/mineral';
import {createConnection} from 'typeorm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    createConnection({
      type: 'sqlite',
      database: './Mineralien.sqlite',
      entities: [
        Mineral
      ],
      synchronize: true,
      logging: false
    }).then(connection => {
      const repository = connection.getRepository(Mineral);

      // here you can start to work with your entities
    }).catch(error => console.log(error));
  }

}
