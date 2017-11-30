import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto = 'Originalmente el texto se carga asi';

  constructor() { }

  ngOnInit() {
  }

  modTexto() {
    this.texto = 'al pulsar el boton el texto se muestra asi';
  }
}
