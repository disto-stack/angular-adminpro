import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

import { RegisterForm } from '../../models/register-form.model';
import { LoginForm } from '../../models/login-form.model';
import { CreatedUserResponse } from '../../models/responses/created-user-response.model';
import { LoginResponse } from '../../models/responses/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  createUser(formData: RegisterForm) {
    return this.httpClient.post<CreatedUserResponse>(
      `${this.apiUrl}/user`,
      formData
    );
  }

  login(formData: LoginForm) {
    return this.httpClient.post<LoginResponse>(
      `${this.apiUrl}/login`,
      formData
    );
  }
}
