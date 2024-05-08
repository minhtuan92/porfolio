import {
  Injectable,
  OnDestroy,
  Optional,
  Signal,
  SkipSelf,
  WritableSignal,
  computed,
  inject,
  signal
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

import { EnsureLoadedOnceGuard } from '@shared/utils';
import { SCREEN_SIZE } from '@shared/constants';

const DisplayNameMap = new Map([
  [Breakpoints.HandsetPortrait, SCREEN_SIZE.HANDSET_PORTRAIT],
  [Breakpoints.TabletPortrait, SCREEN_SIZE.TABLET_PORTRAIT],
  [Breakpoints.WebPortrait, SCREEN_SIZE.WEB_PORTRAIT],
  [Breakpoints.HandsetLandscape, SCREEN_SIZE.HANDSET_LANDSCAPE],
  [Breakpoints.TabletLandscape, SCREEN_SIZE.TABLET_LANDSCAPE],
  [Breakpoints.WebLandscape, SCREEN_SIZE.WEB_LANDSCAPE]
]);

@Injectable({
  providedIn: 'root'
})
export class LayoutService extends EnsureLoadedOnceGuard implements OnDestroy {
  private destroyed$ = new Subject<void>();

  private screenSizeChanged = new BehaviorSubject<string>('');
  readonly screenSizeChanged$ = this.screenSizeChanged.asObservable();

  #isMobile: WritableSignal<boolean> = signal<boolean>(false);
  readonly isMobile: Signal<boolean> = computed(this.#isMobile);
  currentScreenSize: string;

  private breakpointObserver = inject(BreakpointObserver);

  constructor(@Optional() @SkipSelf() parent: LayoutService) {
    super(parent);
    this.breakpointObserver
      .observe([...DisplayNameMap.keys()])
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = DisplayNameMap.get(query) ?? SCREEN_SIZE.UNKNOW;
          }
        }

        this.#isMobile.set(
          !(
            this.currentScreenSize === SCREEN_SIZE.TABLET_LANDSCAPE ||
            this.currentScreenSize === SCREEN_SIZE.WEB_LANDSCAPE
          )
        );
        this.screenSizeChanged.next(this.currentScreenSize);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
