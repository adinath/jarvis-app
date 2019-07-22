import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IEvent } from './event-model'

@Injectable()
export class EventService {
    getEvents(): Observable<IEvent[]>{
        let subject = new Subject<IEvent[]>()
        setTimeout(() => {
            subject.next(EVENTS)
            subject.complete()
        }, 100);
        return subject
    }
    getEvent(id: any) {
        return EVENTS[id]
    }
}

const EVENTS : IEvent[]= [{
    id: 0,
    name: 'Angular Connect',
    date: new Date('1/1/2020'),
    time: '10:00 am',
    price: 299.00,
    location: {
        address: '33 Hudson st',
        city: 'Jersey City',
        country: 'USA'
    }
}
    , {
    id: 1,
    name: 'Angular Disconnect',
    date: new Date('1/1/2020'),
    time: '10:00 am',
    price: 299.00,
    location: {
        address: '33 Hudson st',
        city: 'Jersey City',
        country: 'USA'
    }
}
    , {
    id: 2,
    name: 'Angular Returns',
    date: new Date('1/1/2020'),
    time: '10:00 am',
    price: 299.00,
    location: {
        address: '33 Hudson st',
        city: 'Jersey City',
        country: 'USA'
    }
}
]