import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
    events: any
    constructor(private eventService: EventService,
                private route: ActivatedRoute) {

    }

    handleEventClicked(eventName) {
        console.log(eventName)
    }

    ngOnInit() {
       this.events = this.route.snapshot.data['events']
    }
}