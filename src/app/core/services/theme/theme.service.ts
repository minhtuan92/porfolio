import { ApplicationRef, Injectable, Optional, SkipSelf, inject } from '@angular/core';
import { Subject } from 'rxjs';

import { EnsureLoadedOnceGuard } from '@shared/utils';
import { LOCALSTORAGE_ITEMS, ThemeOptions } from '@shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends EnsureLoadedOnceGuard {
  private appRef = inject(ApplicationRef);

  private themeChangeSubject$ = new Subject<void>();

  themeChange$ = this.themeChangeSubject$.asObservable();

  currentTheme: ThemeOptions;

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
    if (theme === ThemeOptions.LIGHT) {
      this.removeDarkClass();
      this.currentTheme = ThemeOptions.LIGHT;
    } else if (theme === ThemeOptions.SYSTEM) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.addDarkClass();
      } else this.removeDarkClass();
      this.currentTheme = ThemeOptions.SYSTEM;
    } else {
      this.addDarkClass();
      if (!theme) localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, ThemeOptions.DARK);
      this.currentTheme = ThemeOptions.DARK;
    }
    this.themeChangeSubject$.next();
  }

  private addDarkClass(): void {
    document.documentElement.classList.add('dark');
  }

  private removeDarkClass(): void {
    document.documentElement.classList.remove('dark');
  }
}
