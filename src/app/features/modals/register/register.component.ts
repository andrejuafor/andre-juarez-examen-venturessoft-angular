import { Component, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { LoginService } from '../login/login.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule, SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public faClose = faClose;
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public showPassword = signal<boolean>(false);
  public registerForm!: FormGroup;
  private _snackBar = inject(MatSnackBar);
  private emailRegex: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private registerService: RegisterService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.compose([Validators.required]),],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern(this.emailRegex),
      ])],
      password: ['', Validators.compose([Validators.required]),],
      confirm_password: ['', Validators.compose([Validators.required]),],
    })
  }

  public validateForm(): void {
    this.registerForm.markAllAsTouched()
    if (this.registerForm.get('email')?.hasError('pattern')) {
      this._snackBar.open('Ingresa un correo válido', '¡Entendido!', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
    if (this.registerForm.get('password')?.value !== this.registerForm.get('confirm_password')?.value) {
      this._snackBar.open('Las contraseñas deben de coincidir', '¡Entendido!', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
    if (!this.registerForm.valid) {
      this._snackBar.open('Es necesario llenar todos los campos marcados', '¡Entendido!', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
  }

  public isControlValid(controlName: string): boolean {
    const control = this.registerForm.controls[controlName]
    return control.valid && (control.dirty || control.touched)
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.registerForm.controls[controlName]
    return control.invalid && (control.dirty || control.touched)
  }

  public closeModal(): void {
    this.registerForm.reset();
    this.registerService.showRegisterModal(false);
  }

  public backStep(): void {
    this.registerForm.reset();
    this.loginService.showLoginModal(true);
    this.registerService.showRegisterModal(false);
  }
}
