import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { TranslationService } from '../../../assets/i18n/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public faLanguage = faLanguage;

  constructor(
    private translationService: TranslationService,
  ) { }

  public changeLang(lang: any): void {
    this.translationService.setLanguage(lang.target.value)
  }

}
