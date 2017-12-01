import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  capital: string;

  constructor() { }

  ngOnInit() {
  }

  setResultado() {
    return this.capital === 'Lima' ? true : false;
  }
}
