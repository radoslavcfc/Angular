import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allNumbers: number[] = [];

  addElement(num:number){
    this.allNumbers.push(num);
  }
}
