import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
//import { IonContent } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.page.html',
  styleUrls: ['./admin-user-form.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule]
})
export class AdminUserFormPage implements OnInit {
  userForm!: FormGroup;
  isEditMode = false;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();

    // Vérifie si on est en mode édition (route contient un id)
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.userId = +idParam;
      this.loadUser();
    }
  }

  initForm() {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      cin: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      role: ['client', Validators.required],
      numPermis: [''],
      marqueVoiture: [''],
      modeleVoiture: [''],
      plaqueImmatriculation: ['']
    });

    // Affiche ou cache les champs selon le rôle
    this.userForm.get('role')?.valueChanges.subscribe(role => {
      if (role === 'chauffeur') {
        this.userForm.get('numPermis')?.setValidators(Validators.required);
        this.userForm.get('marqueVoiture')?.setValidators(Validators.required);
        this.userForm.get('modeleVoiture')?.setValidators(Validators.required);
        this.userForm.get('plaqueImmatriculation')?.setValidators(Validators.required);
      } else {
        this.userForm.get('numPermis')?.clearValidators();
        this.userForm.get('marqueVoiture')?.clearValidators();
        this.userForm.get('modeleVoiture')?.clearValidators();
        this.userForm.get('plaqueImmatriculation')?.clearValidators();
      }

      this.userForm.get('numPermis')?.updateValueAndValidity();
      this.userForm.get('marqueVoiture')?.updateValueAndValidity();
      this.userForm.get('modeleVoiture')?.updateValueAndValidity();
      this.userForm.get('plaqueImmatriculation')?.updateValueAndValidity();
    });
  }

  loadUser() {
    this.userService.getUser(this.userId).subscribe((user: User) => {
      this.userForm.patchValue(user);
    });
  }

  onSubmit() {
    if (this.userForm.invalid) return;

    const user: User = this.userForm.value;

    if (this.isEditMode) {
      this.userService.updateUser(this.userId, user).subscribe(() => {
        this.router.navigate(['/admin/users']);
      });
    } else {
      this.userService.addUser(user).subscribe(() => {
        this.router.navigate(['/admin/users']);
      });
    }
  }
}
