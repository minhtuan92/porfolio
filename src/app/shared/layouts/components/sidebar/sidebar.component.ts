import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenSize } from '@shared/constants';
import { LayoutService } from '@core/services';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  lineNumbers = computed<number[]>(() => {
    return this.calculateLineNumbers(this.layoutService.screenSize());
  });

  layoutService = inject(LayoutService);

  calculateLineNumbers(screenSize: string): number[] {
    const screenHeight = window.outerHeight;
    const lineHeight = screenSize === ScreenSize.TABLET_LANDSCAPE || screenSize === ScreenSize.WEB_LANDSCAPE ? 8 : 24;
    const zoom = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
    const maxLineNumbers = Math.floor(Math.floor(screenHeight / lineHeight) / zoom);
    return Array.from({ length: maxLineNumbers }, (_, index) => index + 1);
  }
}
