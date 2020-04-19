import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-hw-one';
  username = '';
  gameInProgress = false;
  selectedTime = 10;
  timer = 10;
  timerOptions = [10, 20, 30, 40, 50, 60];
  clicks = 0;
  finalResult = 0;

  setUsername(ev) {
    this.username = ev.target.value;
  }

  setTimer(ev) {
    this.timer = ev.target.value;
    this.selectedTime = ev.target.value;
  }

  startGame() {
    this.gameInProgress = true;

    const timer = setInterval(() => {
      try {
        this.timer--;
        if (this.timer < 0) {
          this.gameOver();
          clearInterval(timer);
        }
      } catch (e) {
        clearInterval(timer);
        console.log('Timer error: ', e);
      }
    }, 1000);
  }

  incrementClicks() {
    this.clicks++;
  }

  resetResult() {
    this.finalResult = 0;
  }

  gameOver() {
    this.finalResult = this.clicks;

    this.saveResult();

    this.gameInProgress = false;
    this.timer = 10;
    this.selectedTime = 10;
    this.clicks = 0;
  }

  saveResult() {
    let scores: string = localStorage.getItem('scores');
    if (!scores) {
      scores = '[]';
    }

    const scoresObject = JSON.parse(scores);
    scoresObject.push({
      user: this.username,
      score: this.finalResult,
      timer: this.selectedTime,
      timestamp: Date.now(),
    });

    localStorage.setItem('scores', JSON.stringify(scoresObject));
  }
}
