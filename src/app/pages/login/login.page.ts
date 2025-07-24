<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
})
export class LoginPage {
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  form = this.fb.group({
=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {
  IonContent,
  IonText,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonInput,
    IonButton,
    IonText
  ]
})
export class LoginPage implements OnInit {
  loginForm = this.fb.group({
>>>>>>> 9243be3d9796f2bd8bd79373acb3080d2a3e8813
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

<<<<<<< HEAD
  login() {
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe({
        next: () => this.router.navigate(['/home']), // page d’accueil après login
        error: err => alert('Login échoué'),
      });
    }
  }
=======
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:8080/api/auth/login', this.loginForm.value)
        .subscribe({
          next: (res: any) => {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/home']);
          },
          error: (err) => {
            this.errorMessage = 'Identifiants invalides';
          }
        });
    }
  }
  loginWithGoogle() {
    // 🔧  rediriger vers backend 
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }

  loginWithFacebook() {
    // 🔧  rediriger vers backend 
    window.location.href = 'http://localhost:8080/oauth2/authorization/facebook';
  }
>>>>>>> 9243be3d9796f2bd8bd79373acb3080d2a3e8813
}
