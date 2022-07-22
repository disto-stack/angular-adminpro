import { ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

export function equalPasswordsValidator(
  passwordControlName: string,
  confirmPasswordControlName: string
) {
  return (formGroup: AbstractControl) => {
    if (
      formGroup.get(passwordControlName)?.value !==
      formGroup.get(confirmPasswordControlName)?.value
    ) {
      formGroup
        .get(confirmPasswordControlName)
        ?.setErrors({ matching_passwords: true });
    }

    return null;
  };
}
