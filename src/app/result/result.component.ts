import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../services/result.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent {
  constructor(private dataService: DataService,
              private resultService: ResultService,
              private router: Router) { }

  username = this.dataService.getData();
  result = this.dataService.getResult();
  showScores = false;
  highscores = this.resultService.getHighscores();

  reset() {
    this.dataService.removeResult();
    this.router.navigate(['/game']);
  }

  toggleScores() {
    this.showScores = !this.showScores;
  }
}
