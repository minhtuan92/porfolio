import { Injectable, OnDestroy, Optional, SkipSelf } from '@angular/core'
import { EnsureLoadedOnceGuard } from '@shared/utils'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { BehaviorSubject, Subject, takeUntil } from 'rxjs'
import { SCREEN_SIZE } from '@shared/constants'

@Injectable({
  providedIn: 'root'
})
export class LayoutService extends EnsureLoadedOnceGuard implements OnDestroy {
  destroyed$ = new Subject<void>()
  displayNameMap = new Map([
    [Breakpoints.HandsetPortrait, SCREEN_SIZE.HANDSET_PORTRAIT],
    [Breakpoints.TabletPortrait, SCREEN_SIZE.TABLET_PORTRAIT],
    [Breakpoints.WebPortrait, SCREEN_SIZE.WEB_PORTRAIT],
    [Breakpoints.HandsetLandscape, SCREEN_SIZE.HANDSET_LANDSCAPE],
    [Breakpoints.TabletLandscape, SCREEN_SIZE.TABLET_LANDSCAPE],
    [Breakpoints.WebLandscape, SCREEN_SIZE.WEB_LANDSCAPE]
  ])
  screenSizeChanged$ = new Subject<void>()
  currentScreenSize: string
  isMobile$ = new BehaviorSubject<boolean>(true)

  constructor(
    @Optional() @SkipSelf() parent: LayoutService,
    private breakpointObserver: BreakpointObserver
  ) {
    super(parent)
    this.breakpointObserver
      .observe([...this.displayNameMap.keys()])
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? SCREEN_SIZE.UNKNOW
          }
        }
        this.isMobile$.next(
          !(
            this.currentScreenSize === SCREEN_SIZE.TABLET_LANDSCAPE ||
            this.currentScreenSize === SCREEN_SIZE.WEB_LANDSCAPE
          )
        )
        this.screenSizeChanged$.next()
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }
}
