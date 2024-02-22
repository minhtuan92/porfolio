import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkeletonModule } from 'primeng/skeleton'
import { AnimateModule } from 'primeng/animate'
import { LayoutService } from '@core/services'
import { FooterComponent } from '@shared/layouts'
import { BehaviorSubject, debounceTime, take } from 'rxjs'
import { AngularSvgIconModule } from 'angular-svg-icon'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SkeletonModule, AnimateModule, FooterComponent, AngularSvgIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  isMyImageLoading$ = new BehaviorSubject<boolean>(true)
  isShowImage = signal<boolean>(false)

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {
    this.isMyImageLoading$.pipe(debounceTime(500), take(1)).subscribe(() => {
      this.isShowImage.set(true)
    })
  }
}
