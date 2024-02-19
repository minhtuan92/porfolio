import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { LayoutService } from '@core/services'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { MenuModule } from 'primeng/menu'

import { DarkmodeButtonComponent } from '@shared/components'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, AngularSvgIconModule, DarkmodeButtonComponent, MenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  navigations: MenuItem[] = [
    {
      id: '1',
      label: '_home',
      routerLink: '/',
      routerLinkActiveOptions: '{exact:true}'
    },
    {
      id: '2',
      label: '_about',
      routerLink: 'about',
      routerLinkActiveOptions: '{exact:true}'
    },
    {
      id: '3',
      label: '_skills',
      routerLink: 'skills'
    },
    {
      id: '4',
      label: '_resume',
      routerLink: 'resume'
    },
    {
      id: '5',
      label: '_projects',
      routerLink: 'projects'
    },
    {
      id: '6',
      label: '_contact',
      routerLink: 'contact'
    }
  ]
  mainNav = this.navigations.slice(0, -1)
  contactNav = this.navigations.slice(-1)[0]
  isMenuShow = false
  constructor(public layoutService: LayoutService) {}

  toggleMenu() {
    this.isMenuShow = !this.isMenuShow
  }
}
