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

  control = null;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;

  constructor() { }

  ngOnInit() {
  }

  stopwatch() {
    // milleseconds
    if (this.milliseconds < 99) {
      this.milliseconds++;
      if (this.milliseconds < 10) { this.milliseconds += 0; }
      // component receives data
    }
    if (this.milliseconds === 99) {
      this.milliseconds = -1;
    }

    // seconds
    if (this.seconds === 0) {
      this.seconds++;
      if (this.seconds < 10) { this.seconds += 0; }
      // component receives data
    }
    if (this.seconds === 59) {
      this.seconds = -1;
    }

    // minutes
    if (this.minutes === 0 && this.seconds === 0) {
      this.minutes++;
      if (this.minutes < 10) { this.minutes += 0; }
      // component receives data
    }
    if (this.minutes === 59) {
      this.minutes = -1;
    }

    // show time
    console.log(this.minutes + ':' + this.seconds + ':' + this.milliseconds);
  }

  startStopwatch() {
    this.control = setInterval(this.stopwatch, 1000);
  }

  pauseStopwatch() {
    // TODO
  }

  stopStopwatch() {
    // TODO
  }

}
