import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  getHighscores() {
    const scores = localStorage.getItem('scores');
    if (!scores) {
      return 'No highscores found!';
    }

    const highscores = JSON.parse(scores)
      .sort((a, b) => b.score / b.timer - a.score / a.timer)
      .slice(0, 10)
      .map((item) => {
        return `
        <tr>
          <td>${item.user}</td>
          <td>${item.score}</td>
          <td>${item.timer}</td>
          <td>${Math.round((item.score / item.timer) * 100) / 100}</td>
        </tr>
        `;
      })
      .join('');

    return `
    <table class="highscores__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Game timer</th>
          <th>Clicks per second</th>
        </tr>
      </thead>
      <tbody>
        ${highscores}
      </tbody>
    </table>
    `;
  }
}
