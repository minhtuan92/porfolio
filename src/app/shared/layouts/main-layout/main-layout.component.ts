import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'

import { SidebarComponent } from '../components/sidebar/sidebar.component'
import { HeaderComponent } from '../components/header/header.component'
import { FooterComponent } from '../components/footer/footer.component'
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx'
import { DestroyService, ThemeService } from 'src/app/core/services'
import { takeUntil } from 'rxjs'

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent, FooterComponent, OverlayscrollbarsModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  providers: [DestroyService]
})
export class MainLayoutComponent implements OnInit {
  scrollbarTheme: string
  constructor(
    private themeService: ThemeService,
    private destroyService: DestroyService
  ) {}

  ngOnInit(): void {
    this.updateScrollBarTheme()
    console.log(this.scrollbarTheme)
    this.themeService.themeChange$.pipe(takeUntil(this.destroyService.destroyed$)).subscribe(() => {
      this.updateScrollBarTheme()
      console.log(this.themeService.currentTheme)
    })
  }

  updateScrollBarTheme() {
    this.scrollbarTheme = 'os-theme-' + (this.themeService.currentTheme === 'dark' ? 'light' : 'dark')
  }
}
