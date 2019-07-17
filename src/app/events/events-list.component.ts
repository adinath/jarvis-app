import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    events = {
        id: 1,
        name: 'Angular Connect',
        date: '1/1/2020',
        time: '10:00 am',
        price: '299.00',
        location: {
            address: '33 Hudson st',
            city: 'Jersey City',
            country: 'USA'
        }
    }
}