// Localization is based on '@ngx-translate/core';
// Please be familiar with official documentations first => https://github.com/ngx-translate/core

import { Injectable } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"
import { Router } from "@angular/router"
export interface Locale {
  lang: string
  data: any
}

const LOCALIZATION_LOCAL_STORAGE_KEY = "language"

@Injectable({
  providedIn: "root",
})
export class TranslationService {
  private langIds: any = []

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    this.translate.addLangs(['en', 'es'])
    localStorage.setItem(
      LOCALIZATION_LOCAL_STORAGE_KEY,
      this.getLanguageBrowser()
    )
    this.translate.use(this.getLanguageBrowser())
    this.translate.setDefaultLang("en")
  }

  private getLanguageBrowser() {
    const language = location.href.split("/")[3]
    return language !== "" ? language : "es"
  }

  loadTranslations(...args: Locale[]): void {
    const locales = [...args]
    locales.forEach((locale) => {
      this.translate.setTranslation(locale.lang, locale.data, true)

      this.langIds.push(locale.lang)
    })
    this.translate.addLangs(this.langIds)
  }

  setLanguage(lang: any) {
    this.translate.use(lang)
    localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang)
  }
}
