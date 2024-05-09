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
export class LayoutService extends EnsureLoadedOnceGuard implements OnDestroy {
  currentScreenSize: string;

  private destroyed$ = new Subject<void>();

  private screenSizeChanged = new BehaviorSubject<string>('');

  readonly screenSizeChanged$ = this.screenSizeChanged.asObservable();

  private $isMobile: WritableSignal<boolean> = signal<boolean>(false);

  readonly isMobile: Signal<boolean> = computed(this.$isMobile);

  private breakpointObserver = inject(BreakpointObserver);

  constructor(@Optional() @SkipSelf() parent: LayoutService) {
    super(parent);
    this.breakpointObserver
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
        this.screenSizeChanged.next(this.currentScreenSize);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
