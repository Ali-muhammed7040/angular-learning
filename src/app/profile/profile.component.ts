import { Component, signal } from "@angular/core";


@Component({
    selector: 'app-profile',
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css", "./extra.style.css"],

})

export class ProfileComponent {
    x = signal(90)
    y = signal(10)

    updateX() {
        this.x.set(100)
    }

    users = [
        {
            name: "John Doe",
            age: 30,
            address: {
                street: "50 Main street",
                city: "Boston",
                state: "MA"
            }
        },
        {
            name: "Jane Doe",
            age: 25,
            address: {
                street: "20 School street",
                city: "Somerville",
                state: "MA"
            }
        },
        {
            name: "Nancy Doe",
            age: 35,
            address: {
                street: "55 Harvard street",
                city: "Cambridge",
                state: "MA"
            }
        }
    ]
}
