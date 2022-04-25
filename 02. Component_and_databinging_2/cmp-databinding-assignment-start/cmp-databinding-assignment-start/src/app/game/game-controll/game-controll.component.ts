import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {
  @Output() addComponentEvent = new EventEmitter<number>();
  intervalId:any;

  constructor() { }

  ngOnInit() {
  }
  onStart(){
    let count = 0;
    this.intervalId = setInterval(()=>{
      this.addComponentEvent.emit(count++);
    }   
    , 1000);
  }

  onStop(){
    clearInterval(this.intervalId);
  }
}
