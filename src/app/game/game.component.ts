import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  constructor(private dataService: DataService, private router: Router) { }

  username = this.dataService.getData();
  gameInProgress = false;
  selectedTime = 10;
  timerCount = 10;
  timerOptions = [10, 20, 30, 40, 50, 60];
  clicks = 0;

  setTimer(ev) {
    this.timerCount = ev.target.value;
    this.selectedTime = ev.target.value;
  }

  startGame() {
    this.gameInProgress = true;

    const timer = setInterval(() => {
      try {
        this.timerCount--;
        if (this.timerCount < 0) {
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

  gameOver() {
    this.dataService.setResult(this.clicks);
    this.saveResult();

    this.router.navigate(['/result']);
  }

  saveResult() {
    let scores = this.dataService.getScores();
    if (!scores) {
      scores = '[]';
    }

    const scoresObject = JSON.parse(scores);
    scoresObject.push({
      user: this.username,
      score: this.clicks,
      timer: this.selectedTime,
      timestamp: Date.now(),
    });

    this.dataService.setScores(JSON.stringify(scoresObject));
  }

  quit() {
    this.dataService.removeData();
    this.router.navigate(['/login']);
  }
}
