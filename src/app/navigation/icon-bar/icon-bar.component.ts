import { Component, OnInit } from '@angular/core';
import { faBell, faCalendar, faComments, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {

  faBell = faBell;
  faCalendar = faCalendar;
  faComments = faComments;
  faUser = faUser;
  faCog = faCog;

  constructor() { }

  ngOnInit() {
  }

}
