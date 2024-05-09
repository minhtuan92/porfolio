import { Injectable, Optional, SkipSelf, computed, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs';
import { injectDestroy } from 'ngxtension/inject-destroy';

import { EnsureLoadedOnceGuard } from '@shared/utils';
import { ScreenSize } from '@shared/constants';

const DisplayNameMap = new Map([
  [Breakpoints.HandsetPortrait, ScreenSize.HANDSET_PORTRAIT],
  [Breakpoints.TabletPortrait, ScreenSize.TABLET_PORTRAIT],
  [Breakpoints.WebPortrait, ScreenSize.WEB_PORTRAIT],
  [Breakpoints.HandsetLandscape, ScreenSize.HANDSET_LANDSCAPE],
  [Breakpoints.TabletLandscape, ScreenSize.TABLET_LANDSCAPE],
  [Breakpoints.WebLandscape, ScreenSize.WEB_LANDSCAPE]
]);

@Injectable({
  providedIn: 'root'
})
export class LayoutService extends EnsureLoadedOnceGuard {
  currentScreenSize: string;

  private $screenSize = signal<string>('');

  readonly screenSize = computed(this.$screenSize);

  private $isMobile = signal<boolean>(false);

  readonly isMobile = computed(this.$isMobile);

  private destroyed$ = injectDestroy();

  private breakpointObserver$ = inject(BreakpointObserver);

  constructor(@Optional() @SkipSelf() parent: LayoutService) {
    super(parent);
    this.breakpointObserver$
      .observe([...DisplayNameMap.keys()])
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        Object.keys(result.breakpoints).forEach((query) => {
          if (result.breakpoints[query]) {
            this.currentScreenSize = DisplayNameMap.get(query) ?? ScreenSize.UNKNOW;
          }
        });

        this.$isMobile.set(
          !(
            this.currentScreenSize === ScreenSize.TABLET_LANDSCAPE ||
            this.currentScreenSize === ScreenSize.WEB_LANDSCAPE
          )
        );
        this.$screenSize.set(this.currentScreenSize);
      });
  }
}
