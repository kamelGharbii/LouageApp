import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {
  IonContent,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonInput,
    IonButton
  ]
})
export class RegisterPage {

  registerForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    telephone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    cin: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    role: ['client', Validators.required],

    // Champs chauffeur
    numPermis: [''],
    marque: [''],
    modele: [''],
    plaque: ['']
  });


  constructor(private fb: FormBuilder, private router: Router) {}

  get isChauffeur() {
    return this.registerForm.get('role')?.value === 'chauffeur';
  }

  toggleChauffeur(event: any) {

    const checked = event.target.checked;
    this.registerForm.get('role')?.setValue(checked ? 'chauffeur' : 'client');
    // Optionnel : réinitialiser les champs chauffeur si décoché
    if (!checked) {
      this.registerForm.get('numPermis')?.reset();
      this.registerForm.get('marque')?.reset();
      this.registerForm.get('modele')?.reset();
      this.registerForm.get('plaque')?.reset();
    }
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Ajouter appel API ici
      this.router.navigate(['/login']);
    }
  }
}
