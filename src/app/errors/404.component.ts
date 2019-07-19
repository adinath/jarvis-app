import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error-404',
    template: `
    <div>Page not found!! Go Home!!</div>
    `
})
export class Error404Component implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
