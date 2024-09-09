import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoginService } from '../modals/login/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    public loginService: LoginService
  ) { }

}
