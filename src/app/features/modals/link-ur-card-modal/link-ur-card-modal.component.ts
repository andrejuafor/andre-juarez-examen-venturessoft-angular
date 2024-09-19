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
import { CommonModule } from '@angular/common';
import { LinkUrCardModalService } from './link-ur-card-modal.service';

@Component({
  selector: 'app-link-ur-card-modal',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule, SharedModule, FormsModule, ReactiveFormsModule, CommonModule],

  templateUrl: './link-ur-card-modal.component.html',
  styleUrl: './link-ur-card-modal.component.scss'
})
export class LinkUrCardModalComponent {
  public faClose = faClose;
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public showPassword = signal<boolean>(false);
  public cardIcon = signal<string>('');
  public cardForm!: FormGroup;
  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    public linkUrCardModalService: LinkUrCardModalService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.cardForm = this.fb.group({
      cardholder: ['', Validators.required],
      card_number: ['', Validators.required],
      exp_month: ['', Validators.required],
      exp_year: ['', Validators.required],
      cvv: ['', Validators.required],
    })
  }

  isControlValid(controlName: string): boolean {
    const control = this.cardForm.controls[controlName]
    return control.valid && (control.dirty || control.touched)
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.cardForm.controls[controlName]
    return control.invalid && (control.dirty || control.touched)
  }

  public validateForm(): void {
    this.cardForm.markAllAsTouched()
    if (!this.cardForm.valid) {
      this._snackBar.open('Llena los datos marcados', '¡Entendido!', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
  }

  public changeCard(event: any): void {
    const cardNumber = event.target.value;
    this.determinateTypeCard(cardNumber);
    if (cardNumber.length >= 16) {
      document.getElementById('donorMonth')?.focus();
    }
  }

  public goToYearInput(event: any): void {
    if (event.target.value.length === 2) {
      document.getElementById('donorYear')?.focus();
    }
  }

  public goToCvvInput(event: any): void {
    if (event.target.value.length === 4) {
      document.getElementById('donorCvv')?.focus();
    }
  }

  private determinateTypeCard(cardNumber: any) {
    const visa = new RegExp("^4");
    const amex = new RegExp("^(34|37)");
    const master = new RegExp("^5[1-5]");
    const discover = new RegExp("^6011");

    const isVisa = {
      type: "visa",
    };

    const isAmex = {
      type: "amex",
    };

    const isMaster = {
      type: "master",
    };

    const isDiscover = {
      type: "discover",
    };

    const isDefault = {
      type: "no-exits",
    };


    if (cardNumber.match(visa)) {
      this.setValuesCard(isVisa);
      return;
    }

    if (cardNumber.match(amex)) {
      this.setValuesCard(isAmex);
      return;
    }

    if (cardNumber.match(master)) {
      this.setValuesCard(isMaster);
      return;
    }

    if (cardNumber.match(discover)) {
      this.setValuesCard(isDiscover);
      return;
    }

    this.setValuesCard(isDefault);
    return;
  }

  private setValuesCard(card: { type: string }) {
    this.cardIcon.set(card.type);
  }

  public closeModal(): void {
    this.cardForm.reset();
    this.linkUrCardModalService.showLinkCardModal(false);
  }
}
