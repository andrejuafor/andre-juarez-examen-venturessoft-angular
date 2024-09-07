import { Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from '../../features/table/table.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
