import { Component } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: Boolean = true;
  buttonClicks: any [] = [];

  addLogs(){
    this.buttonClicks.push(formatDate(Date.now(), 'yyyy/MM/dd-HH:MM:ss', 'en'));
    //this.buttonClicks.push(new Date());
  }
}
