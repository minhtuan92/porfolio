import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'

interface Navigation {
  label?: string
  link?: string
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navigations: Navigation[] = [
    {
      label: '_home',
      link: ''
    },
    {
      label: '_about',
      link: ''
    },
    {
      label: '_skills',
      link: ''
    },
    {
      label: '_resume',
      link: ''
    },
    {
      label: '_projects',
      link: ''
    }
  ]
}
