import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestroyService, LayoutService } from '@core/services';
import { takeUntil } from 'rxjs';
import { SCREEN_SIZE } from '@shared/constants';

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
  ) {}

  ngOnInit() {
    this.layoutService.screenSizeChanged$.pipe(takeUntil(this.destroyService.destroyed$)).subscribe((screenSize) => {
      this.calculateLineNumbers(screenSize);
    });
  }

  calculateLineNumbers(screenSize: string) {
    const screenHeight = window.outerHeight;
    const lineHeight = screenSize === SCREEN_SIZE.TABLET_LANDSCAPE || screenSize === SCREEN_SIZE.WEB_LANDSCAPE ? 8 : 24;
    const zoom = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
    const maxLineNumbers = Math.floor(Math.floor(screenHeight / lineHeight) / zoom);
    this.lineNumbers = Array.from({ length: maxLineNumbers }, (_, index) => index + 1);
  }
}
