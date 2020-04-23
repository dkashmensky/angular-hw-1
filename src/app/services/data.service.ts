import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    const data = sessionStorage.getItem('userData');

    if (!data) {
      return false;
    }

    return data;
  }

  getResult() {
    const data = sessionStorage.getItem('userResult');

    if (!data) {
      return false;
    }

    return data;
  }

  getScores() {
    const data = localStorage.getItem('scores');

    if (!data) {
      return false;
    }

    return data;
  }

  setData(data) {
    sessionStorage.setItem('userData', data);
  }

  setResult(data) {
    sessionStorage.setItem('userResult', data);
  }

  setScores(data) {
    localStorage.setItem('scores', data);
  }

  removeResult() {
    sessionStorage.removeItem('userResult');
  }

  removeData() {
    sessionStorage.removeItem('userData');
  }
}
