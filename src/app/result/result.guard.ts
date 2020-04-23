import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ResultGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const data = this.dataService.getResult();
    if (data) {
      return true;
    }

    this.router.navigate(['/game']);
    return false;
  }
}
