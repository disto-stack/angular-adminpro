import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { equalPasswordsValidator } from '../validators/equalPasswords';

import { UserService } from '../services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      terms: new FormControl(false, Validators.requiredTrue),
    },
    {
      validators: equalPasswordsValidator('password', 'confirmPassword'),
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }

    this.userService.createUser(this.registerForm.value).subscribe(
      (response) => {
        Swal.fire('User created', 'User successfully created', 'success');
        this.router.navigateByUrl('/login');
      },
      (errorResponse: HttpErrorResponse) =>
        Swal.fire('Error', errorResponse.error.message, 'error')
    );

    this.registerForm.reset();
  }

  isFormControlInvalid(formControlName: string) {
    return (
      this.registerForm.get(formControlName)?.invalid &&
      this.registerForm.get(formControlName)?.touched
    );
  }

  get invalidForm() {
    return this.registerForm.invalid;
  }
}
