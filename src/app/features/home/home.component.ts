import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkeletonModule } from 'primeng/skeleton'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SkeletonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMyImageLoading = true
}
