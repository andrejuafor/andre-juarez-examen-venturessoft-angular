import { Component } from '@angular/core';
import { BrandComponent } from '../../features/brand/brand.component';
import { MenuComponent } from '../../features/menu/menu.component';

@Component({
  selector: 'app-all-coupons',
  standalone: true,
  imports: [MenuComponent, BrandComponent],
  templateUrl: './all-coupons.component.html',
  styleUrl: './all-coupons.component.scss'
})
export class AllCouponsComponent {

}
