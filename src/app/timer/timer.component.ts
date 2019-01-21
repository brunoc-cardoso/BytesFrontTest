import { Component, OnInit } from '@angular/core';
import { faPause, faPlay,  faStop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  faPause = faPause;
  faPlay = faPlay;
  faStop = faStop;

  constructor() { }

  ngOnInit() {
  }

  stopwatch() {
    // TODO
  }

  startStopwatch() {
    // TODO
  }

  pauseStopwatch() {
    // TODO
  }

  stopStopwatch() {
    // TODO
  }

}
