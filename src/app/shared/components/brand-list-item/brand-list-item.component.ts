import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-brand-list-item',
  standalone: true,
  template: `
    <mat-card appearance="outlined" class="card">
      <div class="card-wrapper">
        <div class="card-brand-name">
          <div class="card-image-wrapper">
            <img [src]="logo" alt="brand logo">
          </div>
          <div class="brand-titles-wrapper">
            <mat-card-subtitle>{{ brandName }}</mat-card-subtitle>
            <mat-card-title>{{ brandDescription }}</mat-card-title>
          </div>
        </div>
        <div class="brand-actions-wrapper">
          <span class="tag">
            <fa-icon [icon]="faMoneyBill"></fa-icon>
            {{ 'brand.instan_coupon' | translate }}
          </span>
          <button mat-button>
            {{ 'brand.get_coupon' | translate }}
            <fa-icon [icon]="faArrowRight"></fa-icon>
          </button>
        </div>
      </div>
    </mat-card>
  `,
  imports: [MatCardModule, MatButtonModule, FontAwesomeModule, TranslateModule],
  styleUrl: './brand-list-item.component.scss'
})
export class BrandListItemComponent {
  @Input() brandDescription!: string;
  @Input() brandName!: string;
  @Input() logo!: string;
  @Input() hasInstantCoupon!: boolean;
  @Input() url!: string;

  public faMoneyBill = faMoneyBill;
  public faArrowRight = faArrowRight;
}
