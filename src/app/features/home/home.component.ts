import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkeletonModule } from 'primeng/skeleton'
import { AnimateModule } from 'primeng/animate'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SkeletonModule, AnimateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMyImageLoading = true
}
