import { Component, OnInit } from '@angular/core';

import { equalPasswordsValidator } from '../validators/equalPasswords';

import {
  FormBuilder,
  FormControl,
  Validators,
  FormControlName,
} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  registerUser() {
    console.log(this.registerForm.value);
  }

  isFormControlInvalid(formControlName: string) {
    return (
      this.registerForm.get(formControlName)?.invalid &&
      this.registerForm.get(formControlName)?.touched
    );
  }
}
