import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'create-event',
    template: `
        <div>
            <p> create component here </p>
            <button type="button" (click)="cancel()">Cancel </button>
        </div>
    `
})

export class CreateEventComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void { }

    cancel(){
        this.router.navigate(['/events'])
    }
}
