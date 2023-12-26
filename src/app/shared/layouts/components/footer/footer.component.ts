import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { RouterLink } from '@angular/router'
import { DarkmodeButtonComponent } from '../darkmode-button/darkmode-button.component'

interface SocialApp {
  icon: string
  link: string
}
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, AngularSvgIconModule, DarkmodeButtonComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor() {}

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
}
