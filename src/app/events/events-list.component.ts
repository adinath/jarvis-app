import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/events.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit{
    events: any[]
   constructor(private eventService: EventService) {
      
   }

    handleEventClicked(data){
        console.log(data)
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
}