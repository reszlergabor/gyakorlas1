import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gyakorlas';
  myArray = [
    'hihi',
    'hoho',
    'pepe',
    'tritty',
    'trutty'
  ];
  array2 = [33, 6, 9, 11, 15];
  sum = this.array2.reduce((x, y) => x + y);

  x2() {
    // console.log(this.array2.map((param: number) => param * 2));
    this.array2 = (this.array2.map((param: number) => param * 2));
  }

  xhalf() {
    // console.log(this.array2.map((param: number) => param * 2));
    this.array2 = (this.array2.map((param: number) => param * 0.5));
  }


}
