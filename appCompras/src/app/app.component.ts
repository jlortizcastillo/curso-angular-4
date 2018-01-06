import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAiciJbOiw11-3wT_NJgTW43uaG92WwuCA',
      authDomain: 'comprasapp-4715b.firebaseapp.com'
    });
  }
}
