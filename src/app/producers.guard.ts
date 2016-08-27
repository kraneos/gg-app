import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CurrentUserService } from './shared/services/current-user.service';
import { LoginService } from './shared/services/login.service';

@Injectable()
export class ProducersGuard implements CanActivate {
  constructor(
    private router: Router,
    private currentUserService: CurrentUserService,
    private loginService: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    let currentUser = this.currentUserService.get();
    let isProducer = false;
    currentUser.roles.forEach(role => {
      if (role.name.indexOf('Clients') === -1) {
        isProducer = true;
      }
    });

    return isProducer;
  }
}
