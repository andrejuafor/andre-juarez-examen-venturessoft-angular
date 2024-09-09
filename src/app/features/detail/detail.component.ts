import { Component, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BrandService } from '../brand/brand.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  private subscription: Subscription[] = [];
  public couponsList = signal<any[]>([]);
  private idMenuList: any[] = [
    {
      idMenu: 1001
    },
    {
      idMenu: 2100
    },
    {
      idMenu: 3400
    },
    {
      idMenu: 4600
    },
  ]

  constructor(
    private brandService: BrandService,
  ) {
    for (let item of this.idMenuList) {
      this.getBrandCoupons(item.idMenu);
    }
  }

  private getBrandCoupons(idMenu: string) {
    const subscribe = this.brandService.getBrandCoupons(idMenu).subscribe((data: any) => {
      this.couponsList().push(data.menuItems[0])
    });
    this.subscription.push(subscribe);
  }

  private normalizeEndpointResponse(coupons: any[]): any[] {
    return coupons.map(coupon => {
      return {
        ...coupon,
        description: coupon['descripción'],
        hasInstantCoupon: true,
      };
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }
}
