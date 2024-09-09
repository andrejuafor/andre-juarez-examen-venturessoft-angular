import { Component } from '@angular/core';
import { TableComponent } from '../../features/table/table.component';
import { MenuComponent } from '../../features/menu/menu.component';
import { BrandComponent } from '../../features/brand/brand.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TableComponent, MenuComponent, BrandComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
