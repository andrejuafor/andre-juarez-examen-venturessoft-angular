import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList, faTableCells, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../shared/shared.module';
import { Subscription } from 'rxjs';
import { BrandService } from './brand.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, SharedModule, FormsModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent {
  private subscription: Subscription[] = [];
  public faList = faList;
  public faTableCells = faTableCells;
  public faChevronRight = faChevronRight;
  public faChevronLeft = faChevronLeft;
  public currentDisplayListView = signal<string>('gallery');
  public couponsList = signal<any[]>([]);
  public paginatedItems = signal<any[]>([]);
  public showLoader = signal<boolean>(false);
  public currentPage: number = 0;
  public itemsPerPage: number = 7;

  constructor(
    private brandService: BrandService,
  ) {
    this.filterCouponsById();
  }

  private filterCouponsById() {
    const subscribe = this.brandService.currentIdMenuFilter.subscribe((data: any) => {
      if (data) this.getBrandCoupons(`${data}`);
    });
    this.subscription.push(subscribe);
  }

  private getBrandCoupons(idMenu: string) {
    this.showLoader.set(true);
    const subscribe = this.brandService.getBrandCoupons(idMenu).subscribe((data: any) => {
      this.showLoader.set(false);
      this.currentPage = 0;
      this.couponsList.set(this.normalizeEndpointResponse(data.menuItems));
      this.paginateItems();
    }, err => {
      this.showLoader.set(false);
    });
    this.subscription.push(subscribe);
  }

  private paginateItems(): void {
    this.paginatedItems.set([]);
    for (let i = 0; i < this.couponsList().length; i += this.itemsPerPage) {
      this.paginatedItems().push(this.couponsList().slice(i, i + this.itemsPerPage));
    }
  }

  public changePage(pageIndex: number): void {
    if (pageIndex >= 0 && pageIndex < this.paginatedItems.length) {
      this.currentPage = pageIndex;
    }
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
