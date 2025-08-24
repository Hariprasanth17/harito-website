import { Component, inject } from '@angular/core';
import { Images } from '../../../theme/image';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private fb = inject(FormBuilder);
  showPassword = false;
  image = Images;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  SignUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    terms: [false, Validators.requiredTrue],
  }
  );
  onSubmit() {
    if (this.SignUpForm.valid) {
      alert("Form Submitted: " + JSON.stringify(this.SignUpForm.value));
      // reset form
      this.SignUpForm.reset()
    } else {
      this.SignUpForm.markAllAsTouched();
      alert("Form Invalid ");
    }
  }
}
