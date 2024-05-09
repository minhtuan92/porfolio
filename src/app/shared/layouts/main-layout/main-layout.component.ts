import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { takeUntil } from 'rxjs';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { injectDestroy } from 'ngxtension/inject-destroy';

import { LayoutService, ThemeService } from 'src/app/core/services';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

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
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  scrollbarTheme: string;

  private destroy$ = injectDestroy();

  private themeService = inject(ThemeService);

  layoutService = inject(LayoutService);

  ngOnInit(): void {
    this.updateScrollBarTheme();
    this.themeService.themeChange$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateScrollBarTheme();
    });
  }

  updateScrollBarTheme(): void {
    this.scrollbarTheme = `os-theme-${this.themeService.currentTheme === 'dark' ? 'light' : 'dark'}`;
  }
}
