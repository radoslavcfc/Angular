import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControllComponent } from './game/game-controll/game-controll.component';
import { EvenComponent } from './game/even/even.component';
import { OddComponent } from './game/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
