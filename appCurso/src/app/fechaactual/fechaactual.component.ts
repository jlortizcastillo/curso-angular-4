import { Component } from '@angular/core';

@Component({
    selector: 'app-fechaactual',
    template: `
        <p> {{ ciudad | lowercase }}, {{ hoy | date: 'd-M-y' }} a las {{ hoy | date: 'H:m Z'}}</p>
        <app-copyright></app-copyright>
    `,
    styleUrls: ['./fechaactual.component.css']
})
export class FechaActualComponent {
    hoy = new Date();
    ciudad: string = 'Lima';
}
