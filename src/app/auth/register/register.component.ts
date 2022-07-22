import { Component, OnInit } from '@angular/core';

import { equalPasswordsValidator } from '../validators/equalPasswords';

import { UserService } from '../services/user.service';

import {
  FormBuilder,
  FormControl,
  Validators,
  FormControlName,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

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
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }

    this.userService.createUser(this.registerForm.value).subscribe(
      (response) => console.log(response),
      (errorResponse: HttpErrorResponse) =>
        console.error(errorResponse.error.message)
    );
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
