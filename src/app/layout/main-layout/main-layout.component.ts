import { Component, signal } from '@angular/core';
import { TableComponent } from '../../features/table/table.component';
import { MenuComponent } from '../../features/menu/menu.component';
import { BrandComponent } from '../../features/brand/brand.component';
import { DetailComponent } from '../../features/detail/detail.component';
import { LoginComponent } from '../../features/modals/login/login.component';
import { LoginService } from '../../features/modals/login/login.service';
import { RegisterComponent } from '../../features/modals/register/register.component';
import { Subscription } from 'rxjs';
import { RegisterService } from '../../features/modals/register/register.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TableComponent, MenuComponent, BrandComponent, DetailComponent, LoginComponent, RegisterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  private subscription: Subscription[] = [];
  public hasLoginModalActive = signal<boolean>(false);
  public hasRegisterModalActive = signal<boolean>(false);

  constructor(
    private loginService: LoginService,
    private registerService: RegisterService
  ) {
    this.getLoginModalVariables();
    this.getRegisterModalVariables();
  }

  private getLoginModalVariables() {
    const subscribe = this.loginService.currentLoginModalStatus.subscribe(status => {
      this.hasLoginModalActive.set(status);
    });
    this.subscription.push(subscribe);
  }

  private getRegisterModalVariables() {
    const subscribe = this.registerService.currentRegisterModalStatus.subscribe(status => {
      this.hasRegisterModalActive.set(status);
    });
    this.subscription.push(subscribe);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }
}
