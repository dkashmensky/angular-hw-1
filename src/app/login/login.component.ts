import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private dataService: DataService, private router: Router) { }

  setUser(ev) {
    if (ev.target.value) {
      this.dataService.setData(ev.target.value);
      this.router.navigate(['/game']);
    }
  }
}
