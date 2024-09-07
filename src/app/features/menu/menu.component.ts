import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public currentCategory!: string;
  readonly categories = signal([
    { name: 'Featured' },
    { name: 'Restaurants' },
    { name: 'Travel' },
    { name: 'Fuel' },
    { name: 'Service' },
    { name: 'Gifts & Entretaiment' },
    { name: 'Shopping' },
    { name: 'Electronics' },
    { name: 'Software' },
    { name: 'Health & Beauty' },
    { name: 'Office Supceas' },
    { name: 'Autoservice' },
  ]);

  public filterByCategory(category: string): void {
    console.log(category);
    this.currentCategory = category;
  }
}
