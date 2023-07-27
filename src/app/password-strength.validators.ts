import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null  => {

    const value = control.value;

    if (!value || value.length < 8) {
      return null;
    }

    if (/^[A-Za-z]+$/.test(value) || /^\d+$/.test(value) || /^[^A-Za-z0-9]+$/.test(value)) {
      return { easy: true };
    }

    if (/^\D+$/.test(value) || /^[A-Za-z0-9]*$/.test(value) || /^[^A-Za-z]+$/.test(value)) {
      return { medium: true };
    }

    return null;
  }
}
