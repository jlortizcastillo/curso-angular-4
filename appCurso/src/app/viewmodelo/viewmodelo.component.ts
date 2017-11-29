import { Component, OnInit } from '@angular/core';
import { Alumno } from 'app/modelos/alumno.model';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {
  alumno1 = new Alumno(1, 'Jorge', 'Ortiz', 'Lima');
  constructor() { }

  ngOnInit() {
  }

}
