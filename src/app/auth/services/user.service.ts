import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RegisterForm } from '../../models/register-form.model';

import { environment } from '../../../environments/environment';
import { UserCreatedResponse } from '../../models/responses/user-created-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  createUser(formData: RegisterForm) {
    return this.httpClient.post<UserCreatedResponse>(
      `${this.apiUrl}/user`,
      formData
    );
  }
}
