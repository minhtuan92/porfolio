import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { RouterLink } from '@angular/router'
import { LOCALSTORAGE_ITEMS, THEME_OPTIONS } from 'src/app/shared/constants'
import { ThemeService } from 'src/app/core/services'

interface SocialApp {
  icon: string
  link: string
}
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, AngularSvgIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private themeService: ThemeService) {}
  socialApps: SocialApp[] = [
    {
      icon: 'linkedIn',
      link: 'https://linkedIn.com'
    },
    {
      icon: 'facebook',
      link: 'https://facebook.com'
    },
    {
      icon: 'github',
      link: 'https://github.com'
    }
  ]

  handleToggleTheme() {
    const theme = this.themeService.currentTheme
    if (theme === THEME_OPTIONS.LIGHT) {
      localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, THEME_OPTIONS.DARK)
    } else if (theme === THEME_OPTIONS.DARK) {
      localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, THEME_OPTIONS.LIGHT)
    }
    this.themeService.updateTheme()
  }
}
