import { Component } from "@angular/core";


@Component({
    selector: 'app-profile',
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css","./extra.style.css"],

})

export class ProfileComponent {
    count = 0;
    handelCounter(value: string) {
        if (value === "increment") {
            this.count++
        } else if (value === "decrement") {
            if (this.count > 0) {
                this.count--
            }

        } else {
            this.count = 0;
        }

    }

    eventFunction(event: MouseEvent) {
        //console event name
        console.log(event.type);
    }

    display = false

    toggle(){
        this.display = !this.display
    }

    users = ['ALi', 'usman','haider']
    students = [
        {name: 'Ali', age: 20},
        {name: 'Usman', age: 21},
        {name: 'Haider', age: 22},
    ]

}