import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkeletonModule } from 'primeng/skeleton'
import { AnimateModule } from 'primeng/animate'
import { LayoutService } from '@core/services'
import { FooterComponent } from '@shared/layouts'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SkeletonModule, AnimateModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public layoutService: LayoutService) {}
  isMyImageLoading = true
}
