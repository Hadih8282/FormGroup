import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let login = localStorage.getItem('login');
    // console.log(login);
    
    if (login === 'true') {
      return true;
    } else {
        this.router.navigate(['']);
        return false;
    }
  }
}
