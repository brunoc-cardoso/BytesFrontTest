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

  timeElm;
  millisecondsElm;

  interval;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;

  constructor() { }

  ngOnInit() {
  }

  stopwatch() {

    this.timeElm = document.getElementById('time');
    this.millisecondsElm = document.getElementById('milliseconds');

      // milleseconds
      if (this.milliseconds < 99) {
        this.milliseconds++;
      }
      if (this.milliseconds === 99) {
        this.milliseconds = 0;
      }

      // seconds
      if (this.milliseconds === 0) {
        this.seconds++;
      }
      if (this.seconds === 59) {
        this.seconds = 0;
      }

      // minutes
      if ((this.milliseconds === 0) && (this.seconds === 0)) {
        this.minutes++;
      }

      // show
      this.timeElm.innerHTML = ('0' + this.minutes).slice(-2) + ':' + ('0' + this.seconds).slice(-2) + ' ';
      this.millisecondsElm.innerHTML = this.milliseconds;
  }

  startStopwatch() {
    clearInterval(this.interval);
    this.interval = setInterval(() =>  {
      this.stopwatch();
    }, 10);
  }

  pauseStopwatch() {
    clearInterval(this.interval);
  }

  restartStopwatch() {
    this.milliseconds = 0,
    this.seconds = 0,
    this.minutes = 0;

    clearInterval(this.interval);
    this.startStopwatch();
  }

}
