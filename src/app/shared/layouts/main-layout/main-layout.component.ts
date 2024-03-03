import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'

import { SidebarComponent } from '../components/sidebar/sidebar.component'
import { HeaderComponent } from '../components/header/header.component'
import { FooterComponent } from '../components/footer/footer.component'
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx'
import { DestroyService, LayoutService, ThemeService } from 'src/app/core/services'
import { takeUntil } from 'rxjs'
import { ScrollTopModule } from 'primeng/scrolltop'
import { AngularSvgIconModule } from 'angular-svg-icon'

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    OverlayscrollbarsModule,
    ScrollTopModule,
    AngularSvgIconModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  providers: [DestroyService]
})
export class MainLayoutComponent implements OnInit {
  scrollbarTheme: string
  constructor(
    private themeService: ThemeService,
    private destroyService: DestroyService,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.updateScrollBarTheme()
    this.themeService.themeChange$.pipe(takeUntil(this.destroyService.destroyed$)).subscribe(() => {
      this.updateScrollBarTheme()
    })
  }

  updateScrollBarTheme() {
    this.scrollbarTheme = 'os-theme-' + (this.themeService.currentTheme === 'dark' ? 'light' : 'dark')
  }
}
