import { ApplicationRef, Injectable, Optional, SkipSelf } from '@angular/core'

import { EnsureLoadedOnceGuard } from 'src/app/shared/utils'
import { LOCALSTORAGE_ITEMS, THEME_OPTIONS } from 'src/app/shared/constants'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends EnsureLoadedOnceGuard {
  themeChange$ = new Subject<void>()
  currentTheme: string
  constructor(
    @Optional() @SkipSelf() parent: ThemeService,
    private ref: ApplicationRef
  ) {
    super(parent)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      this.updateTheme()
      this.themeChange$.next()

      // Trigger refresh of UI
      this.ref.tick()
    })
  }

  updateTheme() {
    const theme = localStorage.getItem(LOCALSTORAGE_ITEMS.THEME) || ''
    if (theme === THEME_OPTIONS.LIGHT) {
      this.removeDarkClass()
      this.currentTheme = THEME_OPTIONS.LIGHT
    } else if (theme === THEME_OPTIONS.SYSTEM) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.addDarkClass()
      } else this.removeDarkClass()
      this.currentTheme = THEME_OPTIONS.SYSTEM
    } else {
      this.addDarkClass()
      if (!theme) localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, THEME_OPTIONS.DARK)
      this.currentTheme = THEME_OPTIONS.DARK
    }
  }

  addDarkClass() {
    document.documentElement.classList.add('dark')
  }

  removeDarkClass() {
    document.documentElement.classList.remove('dark')
  }
}
