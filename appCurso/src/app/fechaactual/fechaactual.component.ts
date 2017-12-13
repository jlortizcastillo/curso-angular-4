import { Component } from '@angular/core';

@Component({
    selector: 'app-fechaactual',
    template: `
        <p>El resultado es {{ resultado | number: '3.2-2' }}</p>
    `,
    styleUrls: ['./fechaactual.component.css']
})
export class FechaActualComponent {
    resultado: number = 1.2;
}
