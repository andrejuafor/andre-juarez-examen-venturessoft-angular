import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-brand-card-item',
  standalone: true,
  template: `
    <mat-card appearance="outlined">
      <div class="card-image-wrapper">
        <img mat-card-image [src]="logo" alt="brand logo">
      </div>
      @if (hasInstantCoupon){
        <span class="tag">
          <fa-icon [icon]="faMoneyBill"></fa-icon>
          {{ 'brand.instan_coupon' | translate }}
        </span>
      }
      <div class="card-body">
        <mat-card-header>
          <mat-card-subtitle>{{ brandName }}</mat-card-subtitle>
          <mat-card-title>{{ brandDescription }}</mat-card-title>
        </mat-card-header>
        <mat-card-actions>
          <button mat-button>
            {{ 'brand.get_coupon' | translate }}
            <fa-icon [icon]="faArrowRight"></fa-icon>
          </button>
        </mat-card-actions>
      </div>
    </mat-card>
  `,
  imports: [MatCardModule, MatButtonModule, FontAwesomeModule, TranslateModule],
  styleUrl: './brand-card-item.component.scss'
})
export class BrandCardItemComponent {
  @Input() brandDescription!: string;
  @Input() brandName!: string;
  @Input() logo!: string;
  @Input() hasInstantCoupon!: boolean;
  @Input() url!: string;

  public faMoneyBill = faMoneyBill;
  public faArrowRight = faArrowRight;
}

