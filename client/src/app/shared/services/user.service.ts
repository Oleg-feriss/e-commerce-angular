import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserRegistrationForm } from '../../register/models';
import { API_URLS } from '../constants';
import {
  UpdateUserRequest,
  User,
  UserLoginCredentials,
  UserAuth,
} from '@shared/models';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly http: HttpClient,
    private localService: LocalService
  ) {}

  public doesEmailExist(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${API_URLS.USER}${email}`);
  }

  public register(formValues: UserRegistrationForm): Observable<UserAuth> {
    const { name, surname, email, password } = formValues;
    const newUser = {
      name,
      surname,
      email,
      password,
    };
    return this.http.post<UserAuth>(`${API_URLS.USER}sign-up`, newUser);
  }

  public login(userCredentials: UserLoginCredentials): Observable<UserAuth> {
    return this.http.post<UserAuth>(`${API_URLS.AUTH}user`, userCredentials);
  }

  public updateName(
    userId: string,
    userData: UpdateUserRequest
  ): Observable<User> {
    return this.http.put<User>(`${API_URLS.USER}${userId}`, userData);
  }

  public getUserData(): User {
    return JSON.parse(localStorage.getItem('user') as string);
  }

  public logout(): void {
    this.localService.removeData('user');
    this.localService.removeData('token');
  }
}
