import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        div > a.active { color: #F97924; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event : any
    constructor(private eventService: EventService, 
        private route: ActivatedRoute) { }

    ngOnInit(): void { 
        this.event = this.eventService.getEvent(this.route.snapshot.params['id'])
    }
}
