import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { TranslationService } from '../assets/i18n/translation.service';
import { locale as enLang } from "../assets/i18n/en";
import { locale as esLang } from "../assets/i18n/es";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'andre-juarez-examen-venturessoft-angular';

  constructor(private translationService: TranslationService, private router: Router, private viewportScroller: ViewportScroller) {
    this.translationService.loadTranslations(enLang, esLang)
    this.translationService.setLanguage('es');
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
