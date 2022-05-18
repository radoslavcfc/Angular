import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeToInactiveCount = 0;
    inactiveToActiveCount = 0;

    increaseActToInact(){
        this.activeToInactiveCount++;
        console.log('Active to inactive count: ' + this.activeToInactiveCount)
    }

    increaseInactToAct(){
        this.inactiveToActiveCount++;
        console.log('Inactive to active count: ' + this.inactiveToActiveCount)
    }
}