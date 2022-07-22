import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    remember: new FormControl(false),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(this.loginForm.value).subscribe(
      (response) => {
        Swal.fire('Token', response.token, 'info');
      },
      (errorResponse: HttpErrorResponse) =>
        Swal.fire('Error', errorResponse.error.message, 'error')
    );

    this.loginForm.reset();
  }

  isFormControlInvalid(formControlName: string) {
    return (
      this.loginForm.get(formControlName)?.invalid &&
      this.loginForm.get(formControlName)?.touched
    );
  }

  get invalidForm() {
    return this.loginForm.invalid;
  }
}
