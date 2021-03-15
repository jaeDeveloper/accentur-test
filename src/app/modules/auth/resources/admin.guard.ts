import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  user: User = JSON.parse(localStorage.getItem('user'));
  canActivate(): boolean {
      this.router.navigate(['/home']);
    return true;
  }
}