import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { LayoutService, ThemeService } from '@core/services';
import { LOCALSTORAGE_ITEMS, THEME_OPTIONS } from '@shared/constants';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-darkmode-button',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './darkmode-button.component.html',
  styleUrl: './darkmode-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkmodeButtonComponent implements OnInit {
  darkModeActive = false;

  layoutService = inject(LayoutService);

  private themeService = inject(ThemeService);

  ngOnInit(): void {
    const theme = this.themeService.currentTheme;
    if (theme === THEME_OPTIONS.LIGHT) {
      this.darkModeActive = false;
    } else if (theme === THEME_OPTIONS.DARK) {
      this.darkModeActive = true;
    }
  }

  handleToggleTheme(): void {
    const theme = this.themeService.currentTheme;
    if (theme === THEME_OPTIONS.LIGHT) {
      localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, THEME_OPTIONS.DARK);
      this.darkModeActive = true;
    } else if (theme === THEME_OPTIONS.DARK) {
      localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, THEME_OPTIONS.LIGHT);
      this.darkModeActive = false;
    }
    this.themeService.updateTheme();
  }
}
