import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
    getEvents() {
        let subject = new Subject()
        setTimeout(() => {
            subject.next(EVENTS)
            subject.complete()
        }, 100);
        return subject
    }
    getEvent(id:any) {
        return EVENTS[id]
    }
}

const EVENTS = [{
    id: 0,
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
,{
    id: 1,
    name: 'Angular Disconnect',
    date: '1/1/2020',
    time: '10:00 am',
    price: '299.00',
    location: {
        address: '33 Hudson st',
        city: 'Jersey City',
        country: 'USA'
    }
}
,{
    id: 2,
    name: 'Angular Returns',
    date: '1/1/2020',
    time: '10:00 am',
    price: '299.00',
    location: {
        address: '33 Hudson st',
        city: 'Jersey City',
        country: 'USA'
    }
}
]