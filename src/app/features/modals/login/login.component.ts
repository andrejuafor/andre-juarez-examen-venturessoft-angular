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
import { LoginService } from './login.service';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule, SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public faClose = faClose;
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public showPassword = signal<boolean>(false);
  public loginForm!: FormGroup;
  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private registerService: RegisterService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required]),],
      password: ['', Validators.compose([Validators.required]),],
    })
  }

  public login(): void {
    if (!this.loginForm.valid) {
      this._snackBar.open('La contraseña y/o el usuario son incorrectos', '¡Entendido!', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
  }

  public goToRegisterCheckout(): void {
    this.loginForm.reset();
    this.loginService.showLoginModal(false);
    this.registerService.showRegisterModal(true);
  }

  public closeModal(): void {
    this.loginForm.reset();
    this.loginService.showLoginModal(false);
  }
}
