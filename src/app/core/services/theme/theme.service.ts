import { ApplicationRef, Injectable, Optional, SkipSelf, inject } from '@angular/core';
import { Subject } from 'rxjs';

import { EnsureLoadedOnceGuard } from '@shared/utils';
import { LOCALSTORAGE_ITEMS, THEME_OPTIONS } from '@shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends EnsureLoadedOnceGuard {
  private themeChangeSubject$ = new Subject<void>();

  themeChange$ = this.themeChangeSubject$.asObservable();

  currentTheme: string;

  private appRef = inject(ApplicationRef);

  constructor(@Optional() @SkipSelf() parent: ThemeService) {
    super(parent);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      this.updateTheme();
      this.themeChangeSubject$.next();

      // Trigger refresh of UI
      this.appRef.tick();
    });
  }

  updateTheme(): void {
    const theme = localStorage.getItem(LOCALSTORAGE_ITEMS.THEME) || '';
    if (theme === THEME_OPTIONS.LIGHT) {
      this.removeDarkClass();
      this.currentTheme = THEME_OPTIONS.LIGHT;
    } else if (theme === THEME_OPTIONS.SYSTEM) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.addDarkClass();
      } else this.removeDarkClass();
      this.currentTheme = THEME_OPTIONS.SYSTEM;
    } else {
      this.addDarkClass();
      if (!theme) localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, THEME_OPTIONS.DARK);
      this.currentTheme = THEME_OPTIONS.DARK;
    }
    this.themeChangeSubject$.next();
  }

  addDarkClass(): void {
    document.documentElement.classList.add('dark');
  }

  removeDarkClass(): void {
    document.documentElement.classList.remove('dark');
  }
}
