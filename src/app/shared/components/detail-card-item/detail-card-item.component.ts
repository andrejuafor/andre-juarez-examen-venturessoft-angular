import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-card-item',
  standalone: true,
  template: `
    <mat-card appearance="outlined">
      <div class="card-image-wrapper">
        <img mat-card-image [src]="brandImg" alt="brand img">
      </div>
      <span class="logo">
        <img mat-card-image [src]="brandLogo" alt="brand img">
      </span>
      <span class="tag">
        <fa-icon [icon]="faMoneyBill"></fa-icon>
        Cashback
      </span>
      <div class="card-body">
        <mat-card-header>
          <mat-card-subtitle>{{ brandName }}</mat-card-subtitle>
          <mat-card-title>{{ brandPromo || brandPromoDefault }}</mat-card-title>
        </mat-card-header>
      </div>
    </mat-card>
  `,
  imports: [MatCardModule, MatButtonModule, FontAwesomeModule],
  styleUrl: './detail-card-item.component.scss'
})
export class DetailCardItemComponent {
  @Input() brandLogo!: string;
  @Input() brandImg!: string;
  @Input() brandName!: string;
  @Input() brandPromo!: string;

  public brandPromoDefault = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec volutpat urna. Donec id biam.';
  public faMoneyBill = faMoneyBill;
  public faArrowRight = faArrowRight;
}
