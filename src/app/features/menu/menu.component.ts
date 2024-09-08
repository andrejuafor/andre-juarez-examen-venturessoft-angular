import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuService } from './menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private subscription: Subscription[] = [];
  public currentCategory!: string;
  public categories = signal<any[]>([]);

  constructor(
    private menuService: MenuService,
  ) {
    this.getCategories();
  }


  public filterByCategory(category: string): void {
    console.log(category);
    this.currentCategory = category;
  }

  private getCategories() {
    const subscribe = this.menuService.getCategories().subscribe((data: any) => {
      this.categories.set(this.normalizeEndpointResponse(data.menuItems));
    });
    this.subscription.push(subscribe);
  }

  private normalizeEndpointResponse(categories: any[]): any[] {
    return categories.map(category => {
      return {
        ...category,
        description: category['descripción'],
      };
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }
}
