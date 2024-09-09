import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList, faTableCells, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../shared/shared.module';
import { Subscription } from 'rxjs';
import { BrandService } from './brand.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, SharedModule, FormsModule, TranslateModule, RouterModule],
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
  public couponsAll = signal<any[]>([]);
  public currentCategory = signal<string>('');
  public paginatedItems = signal<any[]>([]);
  public showLoader = signal<boolean>(false);
  public hasAllCoupons = signal<boolean>(false);
  public currentPage: number = 0;
  public itemsPerPage: number = 7;

  constructor(
    private router: Router,
    private brandService: BrandService,
  ) {
    this.filterCouponsById();
    this.setViewComponents();
  }

  private setViewComponents(): void {
    this.hasAllCoupons.set(this.router.url.split('/')[1] === 'coupons' ? true : false);
  }

  private filterCouponsById() {
    const subscribe = this.brandService.currentIdMenuFilter.subscribe((data: any) => {
      if (data) {
        this.getBrandCoupons(`${data.idMenu}`);
        this.currentCategory.set(data.description)
      }

    });
    this.subscription.push(subscribe);
  }

  private getBrandCoupons(idMenu: string) {
    this.showLoader.set(true);
    const subscribe = this.brandService.getBrandCoupons(idMenu).subscribe((data: any) => {
      this.showLoader.set(false);
      this.currentPage = 0;
      this.couponsAll.set(this.normalizeEndpointResponse(data.menuItems));
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
    if (pageIndex >= 0 && pageIndex < this.paginatedItems().length) {
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

  onSortChange(order: any) {
    if (order.target.value === 'brandNameAsc') {
      this.sortBrandsAscending();
    } else if (order.target.value === 'brandNameDesc') {
      this.sortBrandsDescending();
    } else {
      this.couponsList.set(this.couponsAll());
    }
    this.paginateItems();
  }

  private sortBrandsAscending(): void {
    this.couponsList().sort((a, b) => {
      return a.nombreMarca.localeCompare(b.nombreMarca);
    });
  }

  private sortBrandsDescending(): void {
    this.couponsList().sort((a, b) => {
      return b.nombreMarca.localeCompare(a.nombreMarca);
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }
}
