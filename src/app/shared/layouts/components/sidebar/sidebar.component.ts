import { ChangeDetectionStrategy, Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntil } from 'rxjs';

import { ScreenSize } from '@shared/constants';
import { DestroyService, LayoutService } from '@core/services';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class SidebarComponent implements OnInit {
  lineNumbers: number[] = [];

  constructor(
    public layoutService: LayoutService,
    private destroyService: DestroyService
  ) {
    effect(() => {
      console.log(`The count is: ${this.layoutService.isMobile()}`);
    });
  }

  ngOnInit(): void {
    this.layoutService.screenSizeChanged$.pipe(takeUntil(this.destroyService.destroyed$)).subscribe((screenSize) => {
      this.calculateLineNumbers(screenSize);
    });
  }

  calculateLineNumbers(screenSize: string): void {
    const screenHeight = window.outerHeight;
    const lineHeight = screenSize === ScreenSize.TABLET_LANDSCAPE || screenSize === ScreenSize.WEB_LANDSCAPE ? 8 : 24;
    const zoom = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
    const maxLineNumbers = Math.floor(Math.floor(screenHeight / lineHeight) / zoom);
    this.lineNumbers = Array.from({ length: maxLineNumbers }, (_, index) => index + 1);
  }
}
