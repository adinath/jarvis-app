import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1> Upcoming Angular Events </h1>
        <hr/>
        <div>
            <h2>{{events.name}}</h2>
            <div> Date : {{events.date}} </div>
            <div> Time : {{events.time}} </div>
            <div> Price : {{events.price}} </div>
        </div>

    </div>
    `
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