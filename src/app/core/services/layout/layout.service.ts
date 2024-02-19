import { Injectable, OnDestroy, Optional, SkipSelf, inject } from '@angular/core'
import { EnsureLoadedOnceGuard } from '@shared/utils'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Subject, takeUntil } from 'rxjs'
import { SCREEN_SIZE } from '@shared/constants'

@Injectable({
  providedIn: 'root'
})
export class LayoutService extends EnsureLoadedOnceGuard implements OnDestroy {
  destroyed$ = new Subject<void>()
  currentScreenSize: string
  displayNameMap = new Map([
    [Breakpoints.XSmall, SCREEN_SIZE.XSMALL],
    [Breakpoints.Small, SCREEN_SIZE.SMALL],
    [Breakpoints.Medium, SCREEN_SIZE.MEDIUM],
    [Breakpoints.Large, SCREEN_SIZE.LARGE],
    [Breakpoints.XLarge, SCREEN_SIZE.XLARGE]
  ])

  constructor(
    @Optional() @SkipSelf() parent: LayoutService,
    private breakpointObserver: BreakpointObserver
  ) {
    super(parent)
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? SCREEN_SIZE.UNKNOW
          }
        }
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }
}
