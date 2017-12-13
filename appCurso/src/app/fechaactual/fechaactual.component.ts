import { Component } from '@angular/core';

@Component({
    selector: 'app-fechaactual',
    template: `
        <p>La cotizacion actual del dolar es de {{ dolareuro | euro }}</p>
    `,
    styleUrls: ['./fechaactual.component.css']
})
export class FechaActualComponent {
    dolareuro: number = 0.88;
}
