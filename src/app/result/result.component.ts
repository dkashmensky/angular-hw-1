import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() username: string;
  @Input() result: number;

  @Output() voidResult = new EventEmitter<boolean>();

  showScores = false;

  reset() {
    this.voidResult.emit(true);
  }

  toggleScores() {
    this.showScores = !this.showScores;
  }

  getHighscores() {
    const scores = localStorage.getItem('scores');
    if (!scores) {
      return 'No highscores found!';
    }

    const highscores = JSON.parse(scores)
      .sort((a, b) => b.score - a.score)
      .map((item) => {
        return `
        <tr>
          <td>${item.user}</td>
          <td>${item.score}</td>
          <td>${item.timer}</td>
          <td>${new Date(item.timestamp).toLocaleString()}</td>
        </tr>
        `;
      })
      .join('');

    return `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Game timer</th>
          <th>Game date</th>
        </tr>
      </thead>
      <tbody>
        ${highscores}
      </tbody>
    </table>
    `;
  }
}
