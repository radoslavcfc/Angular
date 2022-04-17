import { Component, Input } from "@angular/core";

@Component({
    selector:'my-warning-alert',
    template:'<div class="my-alert">{{message}}</div>',
    styles:[
        `.my-alert{
            background-color: red;
            text-align: center;
            padding: 5px;
            font-size: 20px;
            color: white;
            font-weight: bolder
        }`
    ]
})
export class WarningComponent{
    @Input() message: string;
}