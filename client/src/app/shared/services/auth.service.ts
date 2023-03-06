import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}

  public isAuthenticated(): boolean {
    return Boolean(this.userService.getUserData());
  }
}
