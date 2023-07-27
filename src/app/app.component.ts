import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { passwordStrengthValidator } from './password-strength.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        passwordStrengthValidator(),
      ]]
    });
  }

  submitPswForm() {
    console.log('Form Data', this.form.value);
    this.form.reset();
  }
}
